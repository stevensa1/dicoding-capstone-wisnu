import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function PengajuanMitra() {
    useEffect(() => {
        document.title = 'Mitra WisNu - Pengajuan Akun Mitra WisNu';
    }, []);
    const [step, setStep] = useState(1);
    const [isSent, setIsSent] = useState(false);
    const [pdfApplicationRequest, setPdfApplicationRequest] = useState(null);
    const [imageLogo, setImageLogo] = useState(null);
    const [applicantForm, setApplicantForm] = useState({
        applicantConsent: false,
        applicantName: '',
        applicantRole: '',
        applicantPhoneNumber: '',
        applicantEmailAddress: '',
        applicantReason: '',
        companyName: '',
        companyAddress: '',
        companyPhone: '',
        companyEmail: '',
        companyWebsite: '',
        companyActivationRequestFileUri: '',
        logoAddress: '',
        companyDescription: '',
        password: '',
        confirmPassword: '',
    });

    const handleFormChange = (e) => {
        setApplicantForm({
            ...applicantForm,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const MAX_FILE_SIZE = 1024 * 1024 * 20; // 10 MB

        // Check file size
        if (file.size > MAX_FILE_SIZE) {
            alert(
                `File size is too large! Maximum allowed size is ${
                    MAX_FILE_SIZE / 1024 / 1024
                } MB.`
            );
            return; // Prevent setting state if size exceeds limit
        }
        if (e.target.name === 'logoAddress') {
            if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
                alert(
                    'File type is not supported! Only PNG and JPEG are allowed.'
                );
                return; // Prevent setting state if file type is not supported
            }
            // Set profile image state
            setImageLogo(file);
            return;
        } else if (e.target.name === 'companyActivationRequestFileUri') {
            if (file.type !== 'application/pdf') {
                alert('File type is not supported! Only PDF is allowed.');
                return; // Prevent setting state if file type is not supported
            }
            setPdfApplicationRequest(file);
        }
    };

    const sendRequest = (e) => {
        e.preventDefault();
        setStep(5);
        const uuid = uuidv4();
        const logoFormat = imageLogo.type.split('/')[1];
        const fileFormat = pdfApplicationRequest.type.split('/')[1];
        const logoKey = `${applicantForm.companyName}-${uuid}.${logoFormat}`;
        const fileKey = `${applicantForm.companyName}-${uuid}.${fileFormat}`;
        const logoPath = `partner/logos/${logoKey}`;
        const filePath = `partner/activation-requests/${fileKey}`;

        // Upload activation request file
        axios
            .get(
                `${process.env.REACT_APP_BACKEND_HOST}/presigned-url?filename=${filePath}`
            )
            .then((res) => {
                axios
                    .put(res.data.presignedUrl, pdfApplicationRequest, {
                        headers: {
                            'Content-Type': pdfApplicationRequest.type,
                        },
                    })
                    .then((res2) => {
                        axios
                            .get(
                                `${process.env.REACT_APP_BACKEND_HOST}/presigned-url?filename=${logoPath}`
                            )
                            .then((res3) => {
                                axios
                                    .put(res3.data.presignedUrl, imageLogo, {
                                        headers: {
                                            'Content-Type': imageLogo.type,
                                        },
                                    })
                                    .then((res4) => {
                                        axios
                                            .post(
                                                `${process.env.REACT_APP_BACKEND_HOST}/api/partner/request`,
                                                {
                                                    partnerUUID: uuid,
                                                    applicantName:
                                                        applicantForm.applicantName,
                                                    applicantRole:
                                                        applicantForm.applicantRole,
                                                    applicantEmailAddress:
                                                        applicantForm.applicantEmailAddress,
                                                    applicantPhoneNumber:
                                                        applicantForm.applicantPhoneNumber,
                                                    applicantReason:
                                                        applicantForm.applicantReason,
                                                    companyName:
                                                        applicantForm.companyName,
                                                    companyDescription:
                                                        applicantForm.companyDescription,
                                                    companyAddress:
                                                        applicantForm.companyAddress,
                                                    companyPhone:
                                                        applicantForm.companyPhone,
                                                    companyEmail:
                                                        applicantForm.companyEmail,
                                                    companyWebsite:
                                                        applicantForm.companyWebsite,
                                                    companyLogo: `/${logoPath}`,
                                                    companyActivationRequestFileUri: `/${filePath}`,
                                                    password:
                                                        applicantForm.password,
                                                }
                                            )
                                            .then((res5) => {
                                                setIsSent(true);
                                                alert(
                                                    'Pengajuan berhasil dikirim. Silahkan tunggu konfirmasi dari kami.'
                                                );
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                                alert(
                                                    'Terjadi kesalahan saat mengirim pengajuan. Silahkan coba lagi.'
                                                );
                                            });
                                    });
                            })
                            .catch((err) => {
                                console.log(err);
                                alert(
                                    'Terjadi kesalahan saat mengunggah logo perusahaan.'
                                );
                            });
                    });
            });
    };

    return (
        <>
            <div className='flex flex-col bg-red-orange-700 min-h-screen px-8 py-16 justify-center items-center'>
                <div className='bg-white shadow-md rounded-md p-4 w-full flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>
                        Pengajuan Akun Mitra WisNu
                    </h1>
                    <div className='flex flex-col md:flex-row w-full justify-center'>
                        <div className='flex flex-col gap-1 items-center w-full'>
                            <div className='h-8 w-8 flex items-center justify-center bg-red-orange-300 rounded-full'>
                                1
                            </div>
                            <p className='text-xs font-semibold text-center'>
                                Pengisian Informasi Pemohon
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 items-center w-full'>
                            <div className='h-8 w-8 flex items-center justify-center bg-red-orange-300 rounded-full'>
                                2
                            </div>
                            <p className='text-xs font-semibold text-center'>
                                Pengisian Informasi Perusahaan
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 items-center w-full'>
                            <div className='h-8 w-8 flex items-center justify-center bg-red-orange-300 rounded-full'>
                                3
                            </div>
                            <p className='text-xs font-semibold text-center'>
                                Buat Kredensial
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 items-center w-full'>
                            <div className='h-8 w-8 flex items-center justify-center bg-red-orange-300 rounded-full'>
                                4
                            </div>
                            <p className='text-xs font-semibold text-center'>
                                Periksa Berkas
                            </p>
                        </div>
                        <div className='flex flex-col gap-1 items-center w-full'>
                            <div className='h-8 w-8 flex items-center justify-center bg-red-orange-300 rounded-full'>
                                5
                            </div>
                            <p className='text-xs font-semibold text-center'>
                                Pengajuan Selesai
                            </p>
                        </div>
                    </div>
                    <hr className='my-2' />
                    {step === 1 && (
                        <>
                            <form
                                onSubmit={() => setStep(2)}
                                className='flex flex-col gap-4'
                            >
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='applicantName'
                                    >
                                        Nama Lengkap Pemohon
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='applicantName'
                                            value={applicantForm.applicantName}
                                            type='text'
                                            placeholder='Nama lengkap pemohon'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='applicantRole'
                                    >
                                        Jabatan Pemohon
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='applicantRole'
                                            value={applicantForm.applicantRole}
                                            type='text'
                                            placeholder='Masukan jabatan Anda dalam perusahaan'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='phoneNumber'
                                    >
                                        Nomor Handphone Pemohon
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='applicantPhoneNumber'
                                            value={
                                                applicantForm.applicantPhoneNumber
                                            }
                                            type='tel'
                                            placeholder='Masukkan nomor handphone aktif'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='applicantEmailAddress'
                                    >
                                        Alamat Email Pemohon
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='applicantEmailAddress'
                                            value={
                                                applicantForm.applicantEmailAddress
                                            }
                                            type='email'
                                            placeholder='Masukkan alamat email pemohon'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='applicantReason'
                                    >
                                        Tujuan Pengajuan Akun Mitra WisNu
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <textarea
                                            required
                                            className='w-full border-0 outline-none'
                                            value={
                                                applicantForm.applicantReason
                                            }
                                            name='applicantReason'
                                            type='text'
                                            placeholder='Alasan pengajuan akun mitra wisnu'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>

                                <button
                                    type='submit'
                                    className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                >
                                    Lanjut
                                </button>
                            </form>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <form
                                onSubmit={() => setStep(3)}
                                className='flex flex-col gap-4'
                            >
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyName'
                                    >
                                        Nama Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='companyName'
                                            value={applicantForm.companyName}
                                            type='text'
                                            placeholder='Masukkan nama lengkap perusahaan'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyDescription'
                                    >
                                        Deskripsi Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <textarea
                                            required
                                            className='w-full border-0 outline-none'
                                            name='companyDescription'
                                            value={
                                                applicantForm.companyDescription
                                            }
                                            type='text'
                                            placeholder='Deskripsikan perusahaan yang diajukan untuk menjadi mitra wisnu'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyAddress'
                                    >
                                        Alamat Kantor Pusat Perusahaan
                                    </label>
                                    <label
                                        className='text-xs text-gray-500'
                                        htmlFor='companyAddress'
                                    >
                                        Jalan, Kabupaten/Kota, Provinsi, Kode
                                        Postal
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='companyAddress'
                                            value={applicantForm.companyAddress}
                                            type='text'
                                            placeholder='Masukan alamat kantor pusat'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyPhone'
                                    >
                                        Nomor Telepon Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='companyPhone'
                                            value={applicantForm.companyPhone}
                                            type='tel'
                                            placeholder='Masukkan nomor telepon aktif'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyEmail'
                                    >
                                        Alamat Email Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            value={applicantForm.companyEmail}
                                            name='companyEmail'
                                            type='email'
                                            placeholder='identifier@company.com'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyWebsite'
                                    >
                                        Alamat Website/Situs Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            value={applicantForm.companyWebsite}
                                            name='companyWebsite'
                                            type='text'
                                            placeholder='www.example.com'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='companyActivationRequestFileUri'
                                    >
                                        Berkas Pengajuan Mitra WisNu
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='companyActivationRequestFileUri'
                                            type='file'
                                            accept='application/pdf'
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                >
                                    Lanjut
                                </button>
                            </form>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <form
                                onSubmit={() => {
                                    if (
                                        applicantForm.password !==
                                        applicantForm.confirmPassword
                                    ) {
                                        alert(
                                            'Kata sandi tidak sama dengan konfirmasi kata sandi.'
                                        );
                                    } else {
                                        setStep(4);
                                    }
                                }}
                                className='flex flex-col gap-4'
                            >
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='applicantName'
                                    >
                                        Nama Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            disabled
                                            className='w-full border-0 outline-none'
                                            name='applicantName'
                                            value={applicantForm.companyName}
                                            type='text'
                                            placeholder='Masukkan nama lengkap perusahaan'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='logoAddress'
                                    >
                                        Unggah Logo Perusahaan
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            className='w-full border-0 outline-none'
                                            name='logoAddress'
                                            type='file'
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='password'
                                    >
                                        Buat Kata Sandi
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='password'
                                            value={applicantForm.password}
                                            type='password'
                                            placeholder='Buat kata sandi minimal 8 karakter'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label
                                        className='text-sm font-bold text-gray-500'
                                        htmlFor='confirmPassword'
                                    >
                                        Konfirmasi Kata Sandi
                                    </label>
                                    <div className='flex items-center gap-2 rounded-md border px-4 py-2'>
                                        <input
                                            required
                                            className='w-full border-0 outline-none'
                                            name='confirmPassword'
                                            value={
                                                applicantForm.confirmPassword
                                            }
                                            type='password'
                                            placeholder='Konfirmasi kata sandi minimal 8 karakter'
                                            onChange={handleFormChange}
                                        />
                                    </div>
                                </div>
                                <button
                                    type='submit'
                                    className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                >
                                    Lanjut
                                </button>
                            </form>
                        </>
                    )}
                    {step === 4 && (
                        <>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Nama Perusahaan
                                    </h1>
                                    <p>{applicantForm.companyName}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Deskripsi Perusahaan
                                    </h1>
                                    <p>{applicantForm.companyDescription}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Nomor Telepon Perusahaan
                                    </h1>
                                    <p>{applicantForm.companyPhone}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Alamat Perusahaan
                                    </h1>
                                    <p>{applicantForm.companyAddress}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Alamat Email Perusahaan
                                    </h1>
                                    <p>{applicantForm.companyEmail}</p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <h1 className='font-bold text-lg'>
                                        Permintaan Pengajuan Mitra WisNu
                                    </h1>
                                    <p>{applicantForm.applicantReason}</p>
                                </div>
                                <form
                                    onSubmit={sendRequest}
                                    className='flex flex-col gap-4'
                                >
                                    {/* Consent checklist */}
                                    <div className='flex items-center gap-2'>
                                        <input
                                            required
                                            type='checkbox'
                                            name='applicantConsent'
                                            value={
                                                applicantForm.applicantConsent
                                            }
                                            onChange={handleFormChange}
                                        />
                                        <label htmlFor='consent'>
                                            Saya menyetujui bahwa semua data
                                            yang saya masukkan adalah benar dan
                                            dapat dipertanggungjawabkan.
                                        </label>
                                    </div>
                                    <button
                                        type='submit'
                                        className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                    >
                                        Ajukan
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                    {step === 5 && (
                        <>
                            {isSent ? (
                                <>
                                    <div className='flex flex-col gap-4'>
                                        <h1 className='text-2xl font-bold'>
                                            Pengajuan Akun Mitra WisNu
                                        </h1>
                                        <p>
                                            Pengajuan akun mitra wisnu Anda
                                            telah berhasil dikirim. Silahkan
                                            tunggu konfirmasi dari kami.
                                        </p>
                                        <button
                                            onClick={() =>
                                                (window.location.href = '/')
                                            }
                                            className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                        >
                                            Kembali ke Halaman Utama
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='flex flex-col gap-4'>
                                        <Skeleton />
                                        <h1 className='text-2xl font-bold'>
                                            Pengajuan Akun Mitra WisNu
                                        </h1>
                                        <p>
                                            Pengajuan akun mitra wisnu Anda
                                            sedang diproses.
                                        </p>
                                        <button
                                            onClick={() =>
                                                (window.location.href = '/')
                                            }
                                            className='rounded-md bg-red-orange-600 px-4 py-2 text-white transition duration-300 hover:bg-red-orange-950'
                                        >
                                            Kembali ke Halaman Utama
                                        </button>
                                    </div>
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default PengajuanMitra;
