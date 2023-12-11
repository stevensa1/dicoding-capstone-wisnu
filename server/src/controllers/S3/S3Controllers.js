import { S3 } from '../../index.js';
import { GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const getPresignedURL = async (filename) => {
    const params = {
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename,
        Expires: 1800,
        ContentType: 'application/octet-stream',
    };
    const bucketContent = {
        Bucket: params.Bucket,
        Key: params.Key,
        ContentType: params.ContentType,
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
