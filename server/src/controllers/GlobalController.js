import PartnerSchema from '../models/PartnerModel.js';
import DestinationModel from '../models/DestinationModel.js';
import PurchasedTicketSchema from '../models/PurchasedTicketModel.js';
import ReviewModel from '../models/ReviewModel.js';
import UserSchema from '../models/UserModel.js';

export const getStatistics = async (req, res) => {
    try {
        // Number of registered users
        const numberOfRegisteredUsers = await UserSchema.countDocuments();

        // Number of registered partners
        const numberOfRegisteredPartners = await PartnerSchema.countDocuments();

        // Number of registered destinations
        const numberOfRegisteredDestinations =
            await DestinationModel.countDocuments();

        // Number of purchased tickets
        const numberOfPurchasedTickets =
            await PurchasedTicketSchema.countDocuments();

        return res.status(200).json({
            numberOfRegisteredUsers,
            numberOfRegisteredPartners,
            numberOfRegisteredDestinations,
            numberOfPurchasedTickets,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};
