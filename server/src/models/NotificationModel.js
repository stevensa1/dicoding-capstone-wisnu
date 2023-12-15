import mongoose from 'mongoose';

const NotificationSchema = mongoose.Schema({
    notificationDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    notificationType: {
        type: String,
        required: true,
    },
    notificationContent: {
        type: String,
        required: true,
    },
    notificationSender: {
        type: String,
        required: true,
    },
    notificationTarget: {
        type: String,
        required: true,
    },
});

export default mongoose.model(
    'Notification',
    NotificationSchema,
    'notifications'
);
