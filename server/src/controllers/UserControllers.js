import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserSchema from '../models/UserModel.js';

export const checkEmail = async (req, res) => {
    const { emailAddress } = req.body;
    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailAddress)) {
            return res.status(400).json({
                message: 'Alamat email tidak valid.',
            });
        }
        const isEmailExist = await UserSchema.findOne({
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
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};

export const registerUser = async (req, res) => {
    const {
        firstName,
        lastName,
        birthPlace,
        birthDate,
        userName,
        emailAddress,
        phoneNumber,
        address,
        city,
        province,
        postalCode,
        password,
        profilePictureAddress,
    } = req.body;

    try {
        const isEmailExist = await UserSchema.findOne({
            emailAddress,
        });
        if (isEmailExist) {
            return res.status(409).json({
                message: 'Alamat email sudah terdaftar.',
            });
        }

        const isUserNameExist = await UserSchema.findOne({
            userName,
        });
        if (isUserNameExist) {
            return res.status(409).json({
                message: 'Nama pengguna sudah terdaftar.',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const fullName = `${firstName} ${lastName}`;
        const newUser = await UserSchema.create({
            profilePictureAddress,
            firstName,
            lastName,
            fullName,
            birthPlace,
            birthDate,
            userName,
            emailAddress,
            phoneNumber,
            address,
            city,
            province,
            postalCode,
            password: hashedPassword,
        });
        res.status(201).json({
            message: 'Pengguna berhasil terdaftar.',
            data: {
                id: newUser._id,
                profilePictureAddress: newUser.profilePictureAddress,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                fullName: newUser.fullName,
                birthPlace: newUser.birthPlace,
                birthDate: newUser.birthDate,
                userName: newUser.userName,
                emailAddress: newUser.emailAddress,
                phoneNumber: newUser.phoneNumber,
                address: newUser.address,
                city: newUser.city,
                province: newUser.province,
                postalCode: newUser.postalCode,
            },
        });
    } catch (e) {
        res.status(500).json({
            message: e.message,
        });
    }
};
