import mongoose from 'mongoose';

const PartnerActivationModel = mongoose.Schema({
    partnerUUID: {
        type: String,
        required: true,
        unique: true,
    },
    applicantName: {
        type: String,
        required: true,
    },
    applicantRole: {
        type: String,
        required: true,
    },
    applicantEmailAddress: {
        type: String,
        required: true,
    },
    applicantPhoneNumber: {
        type: String,
        required: true,
    },
    applicantReason: {
        type: String,
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    companyDescription: {
        type: String,
        required: true,
    },
    companyAddress: {
        type: String,
        required: true,
    },
    companyPhone: {
        type: String,
        required: true,
    },
    companyEmail: {
        type: String,
        required: true,
    },
    companyWebsite: {
        type: String,
        required: true,
    },
    companyLogo: {
        type: String,
        required: true,
        default: '/user/profile-pictures/default-profile-picture.png',
    },
    companyActivationRequestFileUri: {
        type: String,
        required: true,
        default: 'No file uploaded.',
    },
    accountPassword: {
        type: String,
        required: true,
    },
    requestStatus: {
        type: String,
        enmum: ['pending', 'approved', 'rejected', 'need more info'],
        required: true,
    },
});

export default mongoose.model(
    'PartnerActivationFile',
    PartnerActivationModel,
    'partnerActivationFiles'
);
