import { S3 } from '../../index.js';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const getPresignedURL = async (filename) => {
    const params = {
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename,
        Expires: 1800,
    };
    const bucketContent = {
        Bucket: params.Bucket,
        Key: params.Key,
    };

    try {
        const url = await getSignedUrl(
            S3,
            new PutObjectCommand(bucketContent),
            {
                expiresIn: params.Expires,
            }
        );

        return url;
    } catch (e) {
        throw new Error(e);
    }
};

export const getPresignedURLRequest = async (req, res) => {
    try {
        const filename = req.query.filename;
        const presignedUrl = await getPresignedURL(filename);
        res.status(200).json({ presignedUrl });
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
};

export const generatePresignedURL = async (req, res) => {
    const { fileName } = req.query;
    const key = fileName;

    getSignedUrl(
        S3,
        new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME,
            Key: key,
        }),
        {
            expiresIn: 3600,
        }
    )
        .then((r) =>
            res.status(200).json({
                error: false,
                data: {
                    url: r,
                    photoURI: key,
                },
            })
        )
        .catch((e) => {
            console.log(e);
            res.status(500).json({
                error: true,
                message:
                    'Gagal meminta upload file, silahkan coba beberapa saat lagi.',
            });
        });
};
