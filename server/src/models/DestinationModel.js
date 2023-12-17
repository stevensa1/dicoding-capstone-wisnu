import mongoose from 'mongoose';

const DestinationPictureSchema = mongoose.Schema({
    alt: {
        type: String,
        required: true,
    },
    imageAddress: {
        type: String,
        required: true,
    },
});

const FacilitySchema = mongoose.Schema({
    facilityName: {
        type: String,
        required: true,
    },
    facilityDescription: {
        type: String,
        required: true,
    },
});

const OpenTimeSchema = mongoose.Schema({
    openTimeDay: {
        type: String,
        required: true,
    },
    openTimeStart: {
        type: String,
    },
    openTimeEnd: {
        type: String,
    },
    isClosed: {
        type: Boolean,
        required: true,
        default: false,
    },
});

const TicketSchema = mongoose.Schema({
    ticketName: {
        type: String,
        required: true,
    },
    ticketDescription: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    ticketQuota: {
        type: Number,
        required: true,
    },
    ticketSold: {
        type: Number,
        required: true,
        default: 0,
    },
});

const DestinationModel = mongoose.Schema({
    destinationManagerPartnerId: {
        type: String,
        required: true,
    },
    destinationPictures: [DestinationPictureSchema],
    destinationName: {
        type: String,
        required: true,
    },
    destinationCategory: {
        type: String,
        required: true,
    },
    destinationAddress: {
        type: String,
        required: true,
    },
    destinationDescription: {
        type: String,
        required: true,
    },
    destinationHistory: {
        type: String,
        required: true,
    },
    destinationFacility: [FacilitySchema],
    destinationOpenTime: [OpenTimeSchema],
    destinationTicket: [TicketSchema],
    destinationSales: {
        type: Number,
        required: true,
        default: 0,
    },
    destinationViews: {
        type: Number,
        required: true,
        default: 0,
    },
    destinationFavorite: {
        type: Number,
        required: true,
        default: 0,
    },
});

export default mongoose.model('Destination', DestinationModel, 'destinations');
