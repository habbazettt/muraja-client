import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import ToasterLayout from '@/components/ToasterLayout'

export default function NotFound() {
    return (
        <div className="min-h-screen grid lg:grid-cols-5 bg-gray-100">
            <ToasterLayout />
            {/* Left side with illustration */}
            <div className="relative hidden lg:flex lg:col-span-3 flex-col items-center justify-center p-8 bg-gradient-to-br from-[#2E649C] to-[#1e4a6b] text-white">
                <div className="max-w-lg mx-auto text-center space-y-6">
                    <img
                        src="/MurajaApp-logo.svg"
                        alt="MTA Learning Management System"
                        width={300}
                        height={300}
                        className="mx-auto"
                    />
                    <p className="text-white/90 font-poppins text-lg leading-relaxed">
                        Platform Digital untuk Manajemen Muroja'ah Al-Qur'an dengan Dukungan Kecerdasan Buatan
                    </p>
                </div>
            </div>

            {/* Right side with Not Found message */}
            <div className="flex flex-col lg:col-span-2 items-center justify-center p-8">
                <div className="w-full max-w-lg space-y-6 text-center bg-white shadow-lg rounded-lg p-6">
                    <img
                        src="/404.svg"
                        alt="404 Not Found"
                        width={360}
                        height={460}
                        className="mx-auto mb-4"
                    />
                    <h1 className="text-4xl font-bold text-gray-800">404 - Not Found</h1>
                    <p className="mt-2 text-lg text-gray-600">
                        Maaf, halaman yang Anda cari tidak ditemukan.
                    </p>
                    <Link to="/auth/login" className="mt-4">
                        <Button className="w-full bg-[var(--primary-1)] hover:bg-[#275586] text-white py-2 rounded transition duration-300 ease-in-out transform hover:scale-105">
                            Login Kembali
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}