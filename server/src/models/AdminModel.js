import mongoose from 'mongoose';

const AdminModel = mongoose.Schema({
    adminName: {
        type: String,
        required: true,
    },
    adminRole: {
        type: String,
        required: true,
    },
    adminEmail: {
        type: String,
        required: true,
    },
    adminPassword: {
        type: String,
        required: true,
    },
    adminAvatar: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Admin', AdminModel, 'admins');
