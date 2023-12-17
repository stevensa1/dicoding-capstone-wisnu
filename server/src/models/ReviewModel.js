import mongoose from 'mongoose';

const ReviewModel = mongoose.Schema(
    {
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
        reviewUserId: {
            type: String,
            required: true,
        },
        reviewPartnerId: {
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
            default: '',
        },
    },
    {
        indexes: [
            {
                unique: true,
                fields: ['reviewDestinationId', 'reviewUserId'],
            },
        ],
    }
);

export default mongoose.model('Review', ReviewModel, 'reviews');
