import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
    {
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
