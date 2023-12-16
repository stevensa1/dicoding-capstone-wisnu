import jwt from 'jsonwebtoken';
import UserSchema from '../models/UserModel.js';
import PartnerSchema from '../models/PartnerModel.js';

export const isAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        // extract the token from the header
        const token = authHeader.split(' ')[1];
        try {
            // verify the token and get the user data
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await UserSchema.findOne({ _id: decoded.id });
            if (!user) {
                throw new Error('User not found');
            }
            // attach the user data to the request object
            res.locals.user = decoded;
            next();
        } catch (err) {
            return res.status(401).json({ error: err.message });
        }
    } else {
        return res.status(401).json({ error: 'Unauthorized access.' });
    }
};

export const isPartnerAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        // extract the token from the header
        const token = authHeader.split(' ')[1];
        try {
            // verify the token and get the user data
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const partner = await PartnerSchema.findOne({ _id: decoded.id });
            if (!partner) {
                throw new Error('Partner not found');
            }
            // attach the user data to the request object
            res.locals.user = decoded;
            next();
        } catch (err) {
            return res.status(401).json({ error: err.message });
        }
    }
};
