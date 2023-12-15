import mongoose from 'mongoose';

const managedDestinationSchema = mongoose.Schema({
    destinationId: {
        type: String,
        required: true,
    },
});

const PartnerSchema = mongoose.Schema({
    partnerUUID: {
        type: String,
        required: true,
        unique: true,
    },
    logoAddress: {
        type: String,
        required: true,
        default: '/images/default-profile-picture.png',
    },
    companyName: {
        type: String,
        required: true,
    },
    emailAddress: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    managedDestination: [managedDestinationSchema],
    destinationViews: {
        type: Number,
        required: true,
        default: 0,
    },
    ticketSales: {
        type: Number,
        required: true,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    averageRating: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model('Partner', PartnerSchema, 'partners');
