import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        profilePictureAddress: {
            type: String,
            required: true,
            // default: '/images/default-profile-picture.png',
        },
        emailAddress: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHashEncrypted: {
            type: String,
            required: true,
            minlength: 8,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema, 'users');
