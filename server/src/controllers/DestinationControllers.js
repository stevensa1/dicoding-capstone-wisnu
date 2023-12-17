import PartnerSchema from '../models/PartnerModel.js';
import DestinationModel from '../models/DestinationModel.js';
import PurchasedTicketSchema from '../models/PurchasedTicketModel.js';

// TODO
// Get all destination with minimal information for boxs
export const getAllDestination = async (req, res) => {
    try {
        const destinations = await DestinationModel.find().select(
            '-destinationHistory -destinationFacility -destinationOpenTime -destinationTicket'
        );
        return res.status(200).json({
            totalDestination: destinations.length,
            destinations,
        });
    } catch {
        return res.status(500).json({
            message: e.message,
        });
    }
};

// Get all destination belonging to partner
export const getAllDestinationByPartner = async (req, res) => {
    if (res.locals.user) {
        try {
            const destinations = await DestinationModel.find({
                destinationManagerPartnerId: res.locals.user.id,
            });
            return res.status(200).json({
                totalDestination: destinations.length,
                destinations,
            });
        } catch (e) {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};

// Get specific destination for destination detail (General usage)
export const getDestinationById = async (req, res) => {
    try {
        const destination = await DestinationModel.findOne({
            _id: req.params.id,
        });
        // Update views count + 1
        await DestinationModel.updateOne(
            { _id: req.params.id },
            { $inc: { destinationViews: 1 } }
        );
        // Update partner views count
        await PartnerSchema.updateOne(
            { _id: destination.destinationManagerPartnerId },
            { $inc: { destinationViews: 1 } }
        );
        return res.status(200).json({
            destination,
        });
    } catch (e) {
        return res.status(404).json({
            message: e.message,
        });
    }
};

// Get specific destination for destination detail (Partner usage)
export const getDestinationByIdForPartner = async (req, res) => {
    if (res.locals.user) {
        try {
            const destination = await DestinationModel.findOne({
                _id: req.params.id,
                destinationManagerPartnerId: res.locals.user.id,
            });
            return res.status(200).json({
                destination,
            });
        } catch {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};

// Post new destination (Partner only)
export const postNewDestination = async (req, res) => {
    if (res.locals.user) {
        const {
            destinationPictures,
            destinationName,
            destinationCategory,
            destinationAddress,
            destinationDescription,
            destinationHistory,
            destinationFacility,
            destinationOpenTime,
            destinationTicket,
        } = req.body;
        try {
            const newDestination = await DestinationModel.create({
                destinationManagerPartnerId: res.locals.user.id,
                destinationPictures: destinationPictures,
                destinationName: destinationName,
                destinationCategory: destinationCategory,
                destinationAddress: destinationAddress,
                destinationDescription: destinationDescription,
                destinationHistory: destinationHistory,
                destinationFacility: destinationFacility,
                destinationOpenTime: destinationOpenTime,
                destinationTicket: destinationTicket,
            });
            // Add destination id to partner's destination list
            await PartnerSchema.updateOne(
                { _id: res.locals.user.id },
                {
                    $push: {
                        managedDestination: newDestination._id,
                    },
                }
            );
            return res.status(201).json({
                message: 'New destination created.',
            });
        } catch (e) {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};

// Update destination information

// Update destination facility

// Update destination open time

// Update destination ticket

// Handle ticket purchase
export const handleTicketPurchase = async (req, res) => {
    // User must be logged in
    if (res.locals.user) {
        const { destinationId, ticketId, nameHolder, ageHolder, ticketDate } =
            req.body;
        try {
            // Get destination
            const destination = await DestinationModel.findById(destinationId);

            if (destination) {
                // Find matching ticket
                const ticketIndex = destination.destinationTicket.findIndex(
                    (ticket) => ticket._id == ticketId
                );
                if (ticketIndex !== -1) {
                    const ticket = destination.destinationTicket[ticketIndex];
                    // Check if ticket is still available
                    if (ticket.ticketQuota > 0) {
                        // Update destination ticket data
                        destination.destinationTicket[
                            ticketIndex
                        ].ticketQuota -= 1;
                        destination.destinationTicket[
                            ticketIndex
                        ].ticketSold += 1;
                        destination.destinationSales += 1;

                        // Save the updated destination
                        await destination.save();

                        // Increase ticket sales for the partner
                        const partner = await PartnerSchema.findOne({
                            _id: destination.destinationManagerPartnerId,
                        });

                        if (partner) {
                            await PartnerSchema.updateOne(
                                {
                                    _id: destination.destinationManagerPartnerId,
                                },
                                { $inc: { ticketSales: 1 } }
                            );
                        }

                        // Generate barcode
                        const barcode = Math.floor(
                            1000000000000000 + Math.random() * 9000000000000000
                        );

                        // Create a new purchased ticket
                        const newPurchasedTicket =
                            await PurchasedTicketSchema.create({
                                ticketDestinationId: destinationId,
                                ticketId: ticketId,
                                destinationName: destination.destinationName,
                                ticketKind: ticket.ticketName,
                                ticketPrice: ticket.ticketPrice,
                                ticketDate: ticketDate,
                                ticketNameHolder: nameHolder,
                                ticketAgeHolder: ageHolder,
                                ticketUserId: res.locals.user.id,
                                ticketPartnerId:
                                    destination.destinationManagerPartnerId,
                                ticketBarcode: barcode,
                            });

                        return res.status(200).json({
                            message: 'Ticket purchased.',
                            purchasedTicket: newPurchasedTicket,
                        });
                    } else {
                        // Ticket is not available
                        return res.status(400).json({
                            message: 'Ticket is not available.',
                        });
                    }
                } else {
                    // Ticket not found
                    return res.status(404).json({
                        message: 'Ticket not found.',
                    });
                }
            } else {
                // Destination not found
                return res.status(404).json({
                    message: 'Destination not found.',
                });
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};

// Get self user tickets
export const getSelfTickets = async (req, res) => {
    if (res.locals.user) {
        try {
            const tickets = await PurchasedTicketSchema.find({
                ticketUserId: res.locals.user.id,
            });
            return res.status(200).json({
                tickets,
            });
        } catch (e) {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};
