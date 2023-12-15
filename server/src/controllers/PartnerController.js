import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import PartnerSchema from '../models/PartnerModel.js';
import PartnerActivationFileModel from '../models/PartnerActivationFileModel.js';

export const checkEmail = async (req, res) => {
    const { emailAddress } = req.body;
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            return res.status(400).json({
                message: 'Alamat email tidak valid.',
            });
        }
        const isEmailExist = await PartnerSchema.findOne({
            emailAddress,
        });
        if (isEmailExist) {
            return res.status(409).json({
                message: 'Alamat email sudah terdaftar.',
            });
        }
        res.status(200).json({
            message: 'Alamat email tersedia.',
        });
    } catch {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const accountRequest = async (req, res) => {
    const {
        partnerUUID,
        applicantName,
        applicantRole,
        applicantEmailAddress,
        applicantPhoneNumber,
        applicantReason,
        companyName,
        companyDescription,
        companyAddress,
        companyPhone,
        companyEmail,
        companyWebsite,
        companyLogo,
        companyActivationRequestFileUri,
        password,
    } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newRequest = await PartnerActivationFileModel.create({
            partnerUUID,
            applicantName,
            applicantRole,
            applicantEmailAddress,
            applicantPhoneNumber,
            applicantReason,
            companyName,
            companyDescription,
            companyAddress,
            companyPhone,
            companyEmail,
            companyWebsite,
            companyLogo,
            companyActivationRequestFileUri,
            accountPassword: hashedPassword,
            requestStatus: 'pending',
        });
        res.status(200).json({
            message: 'Permintaan akun berhasil dikirim.',
            data: {
                uuid: newRequest.partnerUUID,
            },
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const checkAccountRequest = async (req, res) => {
    const { partnerUUID } = req.body;
    try {
        const isUUIDExist = await PartnerActivationFileModel.findOne({
            partnerUUID,
        });
        if (!isUUIDExist) {
            return res.status(404).json({
                message: 'UUID tidak ditemukan.',
            });
        }
        res.status(200).json({
            message: 'UUID ditemukan.',
            status: isUUIDExist.requestStatus,
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const approvedAccountRequest = async (req, res) => {
    const { partnerUUID } = req.body;
    try {
        const fileRequest = await PartnerActivationFileModel.findOne({
            partnerUUID,
        });
        if (!fileRequest) {
            return res.status(404).json({
                message: 'UUID tidak ditemukan.',
            });
        }

        const activatePartnerAccount = await PartnerSchema.create({
            partnerUUID,
            logoAddress: fileRequest.logoAddress,
            companyName: fileRequest.companyName,
            logoAddress: fileRequest.companyLogo,
            emailAddress: fileRequest.companyEmail,
            password: fileRequest.accountPassword,
            phoneNumber: fileRequest.companyPhone,
            description: fileRequest.companyDescription,
        });

        await PartnerActivationFileModel.updateOne(
            {
                partnerUUID,
            },
            {
                requestStatus: 'approved',
            }
        );

        res.status(200).json({
            message: 'Akun berhasil diaktifkan. Mitra sudah bisa login.',
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};
