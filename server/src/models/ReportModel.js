import mongoose from 'mongoose';

const ReportSchema = mongoose.Schema({
    reportDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    reportDestinationId: {
        type: String,
        required: true,
    },
    reportTicket: {
        type: String,
        required: true,
    },
    reportRevenue: {
        type: Number,
        required: true,
    },
    reportUserId: {
        type: String,
        required: true,
    },
    reportPartnerId: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Report', ReportSchema, 'reports');
