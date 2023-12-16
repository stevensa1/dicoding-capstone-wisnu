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
        return res.status(200).json({
            message: 'Alamat email tersedia.',
        });
    } catch {
        return res.status(500).json({
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
        return res.status(200).json({
            message: 'Permintaan akun berhasil dikirim.',
            data: {
                uuid: newRequest.partnerUUID,
            },
        });
    } catch (e) {
        return res.status(500).json({
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
        return res.status(200).json({
            message: 'UUID ditemukan.',
            status: isUUIDExist.requestStatus,
        });
    } catch (e) {
        return res.status(500).json({
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

        return res.status(200).json({
            message: 'Akun berhasil diaktifkan. Mitra sudah bisa login.',
        });
    } catch (e) {
        return res.status(500).json({
            message: e.message,
        });
    }
};

export const partnerLogin = async (req, res) => {
    const { emailAddress, password } = req.body;
    try {
        const partner = await PartnerSchema.findOne({
            emailAddress,
        });
        if (!partner) {
            return res.status(404).json({
                message: 'Email tidak ditemukan.',
            });
        }
        const isPasswordMatch = await bcrypt.compare(
            password,
            partner.password
        );
        if (!isPasswordMatch) {
            return res.status(401).json({
                message: 'Password salah.',
            });
        }
        const token = jwt.sign(
            {
                id: partner._id,
                emailAddress: partner.emailAddress,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1d',
            }
        );
        res.cookie('partnerSessionToken', token);
        return res.status(200).json({
            message: 'Login berhasil.',
            id: partner._id,
            token: token,
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const partnerLogout = async (req, res) => {
    res.clearCookie('partnerSessionToken');
    return res.status(200).json({
        message: 'Logout berhasil.',
    });
};

export const verifyLogin = async (req, res) => {
    if (res.locals.user) {
        try {
            const user = await PartnerSchema.findOne({
                _id: res.locals.user.id,
            }).select('-password');
            return res.status(200).json({
                message: 'Status login valid.',
            });
        } catch {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};

export const getPartnerData = async (req, res) => {
    if (res.locals.user) {
        try {
            const user = await PartnerSchema.findOne({
                _id: res.locals.user.id,
            }).select('-password');
            return res.status(200).json({
                message: 'Data pengguna berhasil ditemukan.',
                user,
            });
        } catch {
            return res.status(500).json({
                message: e.message,
            });
        }
    } else {
        return res.status(401).json({
            message: 'Unauthorized access.',
        });
    }
};
