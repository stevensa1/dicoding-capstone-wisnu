import mongoose from 'mongoose';

const ReviewSchema = mongoose.Schema({
    reviewDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    reviewDestinationId: {
        type: String,
        required: true,
    },
    reviewRating: {
        type: Number,
        required: true,
    },
    reviewComment: {
        type: String,
        required: true,
    },
    reviewUser: {
        type: String,
        required: true,
    },
    reviewPartner: {
        type: String,
        required: true,
    },
    isReplied: {
        type: Boolean,
        required: true,
        default: false,
    },
    reviewReply: {
        type: String,
        required: false,
    },
});

export default mongoose.model('Review', ReviewSchema, 'reviews');
