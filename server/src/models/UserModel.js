import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        profilePictureAddress: {
            type: String,
            required: true,
            default: '/images/default-profile-picture.png',
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: false,
        },
        fullName: {
            type: String,
            required: true,
        },
        birthPlace: {
            type: String,
            required: true,
        },
        birthDate: {
            type: Date,
            required: true,
        },
        userName: {
            type: String,
            required: true,
            unique: true,
        },
        emailAddress: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
        postalCode: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
        },
        lastLoggedIn: {
            type: Date,
            default: Date.now,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', UserSchema, 'users');
