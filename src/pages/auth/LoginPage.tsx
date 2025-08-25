import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";

import ToasterLayout from "@/components/ToasterLayout";

const loginSchema = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(6, "Kata sandi minimal 6 karakter"),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginPage() {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const loginForm = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const handleLogin = async (values: LoginFormValues) => {
        setIsLoading(true)
        const toastId = toast.loading("Memproses login...")

        try {
            const url = `${import.meta.env.VITE_API_URL}/auth/login`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.message || "Login gagal")
            }

            const data = await response.json()
            localStorage.setItem("auth_token", data.data.token)
            localStorage.setItem("user", JSON.stringify(data.data.user))

            toast.success("Login berhasil! 🎉", { id: toastId })

            if (values.password === "newuser2025") {
                navigate("/auth/reset-password/newuser")
            } else {
                navigate("/dashboard/user/murojaah-harian")
            }
        } catch (error: unknown) {
            const message = error instanceof Error ? error.message : "Terjadi kesalahan tidak diketahui"
            toast.error(message, { id: toastId })
        } finally {
            setIsLoading(false)
        }
    };

    return (
        <div className="min-h-screen grid lg:grid-cols-5">
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

            {/* Right Section */}
            <div className="flex flex-col lg:col-span-2 items-center justify-center p-8">
                <div className="w-full max-w-lg space-y-6">
                    <img
                        src="/MurajaApp-logo-blue.svg"
                        alt="MTA Learning Management System"
                        width={240}
                        height={240}
                        className="mx-auto"
                    />
                    <div className="text-center">
                        <h1 className="text-2xl font-script mb-5 font-jakarta font-bold">
                            Selamat Datang di Muraja.
                        </h1>
                        <h2 className="text-lg text-gray-600 font-poppins">
                            Login untuk Melanjutkan
                        </h2>
                    </div>
                    <Form {...loginForm}>
                        <form
                            onSubmit={loginForm.handleSubmit((values) =>
                                handleLogin(values)
                            )}
                            className="space-y-6"
                        >
                            <FormField
                                control={loginForm.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm font-bold text-gray-700">
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Masukkan email Anda"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={loginForm.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Kata Sandi</FormLabel>
                                        <FormControl>
                                            <div className="relative">
                                                <Input
                                                    type={showPassword ? "text" : "password"}
                                                    placeholder="Masukkan kata sandi"
                                                    {...field}
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    tabIndex={-1}
                                                >
                                                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                                                </button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="text-right">
                                <Link
                                    to="/auth/forgot-password"
                                    className="text-sm font-semibold text-[var(--primary-1)] hover:text-gray-700"
                                >
                                    Lupa password?
                                </Link>
                            </div>

                            <Button
                                className={`w-full bg-[var(--primary-1)] hover:bg-[#275586] text-white py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? "Memproses..." : "Login"}
                            </Button>
                        </form>
                    </Form>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-400"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">atau</span>
                        </div>
                    </div>

                    <p className="text-center text-sm text-gray-500">
                        Belum Punya Akun?{" "}
                        <Link
                            to={"/auth/register"}
                            className="text-md font-semibold text-[var(--primary-2)] hover:text-[var(--primary-1)]"
                        >
                            Daftar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}