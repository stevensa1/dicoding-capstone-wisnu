import PartnerSchema from '../models/PartnerModel.js';
import DestinationModel from '../models/DestinationModel.js';

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

// Get specific destination for destination detail (General usage)
export const getDestinationById = async (req, res) => {
    try {
        const destination = await DestinationModel.findOne({
            _id: req.params.id,
        });
        return res.status(200).json({
            destination,
        });
    } catch {
        return res.status(500).json({
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
