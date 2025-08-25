import { BookOpen, ChevronRight, Calendar, Brain, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WelcomePage() {
    const navigate = useNavigate()

    const features = [
        {
            icon: Brain,
            title: 'Rekomendasi Jadwal AI',
            description: 'Dapatkan saran jadwal muroja\'ah yang optimal berdasarkan kesibukan Anda'
        },
        {
            icon: Calendar,
            title: 'Manajemen Muroja\'ah Harian',
            description: 'Catat dan kelola progres muroja\'ah harian dengan mudah dan terstruktur'
        },
        {
            icon: BarChart3,
            title: 'Statistik & Analisis',
            description: 'Pantau perkembangan dan pencapaian muroja\'ah dengan visualisasi yang jelas'
        },
    ];

    return (
        <div className="min-h-screen grid lg:grid-cols-5 bg-gray-100">
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

            {/* Right side - Welcome Content */}
            <div className="flex flex-col lg:col-span-2 items-center justify-center p-8">
                <div className="w-full max-w-lg space-y-6 bg-white shadow-xl rounded-xl p-8">
                    <img
                        src="/MurajaApp-logo-blue.svg"
                        alt="MTA Learning Management System"
                        width={240}
                        height={240}
                        className="mx-auto"
                    />
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2">Selamat Datang!</h1>
                        <p className="text-lg text-gray-600">
                            Mulai perjalanan muroja'ah Anda dengan bantuan AI
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 gap-4 mt-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200 hover:border-[#2E649C]/30"
                                >
                                    <div className="flex items-start space-x-3">
                                        <div className="w-10 h-10 bg-[#2E649C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-8 h-8 text-[#2E649C]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Continue Button */}
                    <button
                        onClick={() => navigate('/auth/login')}
                        className="w-full py-3 bg-gradient-to-r from-[#2E649C] to-[#1e4a6b] hover:from-[#275586] hover:to-[#1a3e5a] text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold"
                    >
                        <span>Mulai Muroja'ah</span>
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Mobile Logo */}
                    <div className="lg:hidden text-center pt-6 border-t border-gray-100">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#2E649C] to-[#1e4a6b] rounded-xl flex items-center justify-center">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div className="mt-2 text-[#2E649C] font-semibold text-lg">Muraja</div>
                        <div className="text-gray-500 text-sm">Platform Muroja'ah Digital</div>
                    </div>
                </div>
            </div>
        </div>
    );
}