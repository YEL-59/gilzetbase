import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosPublic, axiosPrivate } from "@/configs/axios.config";
import toast from "react-hot-toast";
import { useAuth } from "./AuthContext";

// Register hook
export const useRegister = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/register", data);
            return res.data;
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Registration failed");
        },
    });
};

// Verify Email hook
export const useVerifyEmail = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/verify-email", data);
            return res.data;
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Email verification failed");
        },
    });
};

// Resend OTP hook
export const useResendOTP = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/resend-otp", data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.status) {
                toast.success(data.message || "OTP resent successfully");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to resend OTP");
        },
    });
};

// Login hook
export const useLogin = () => {
    const { login } = useAuth();
    return useMutation({
        mutationFn: async (credentials) => {
            const res = await axiosPublic.post("/auth/login", credentials);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.status) {
                login(data.token, data.data);
                toast.success(data.message || "Login successful");
            } else {
                toast.error(data.message || "Login failed");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Login failed");
        },
    });
};

// Forgot Password hook
export const useForgotPassword = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/forget-password", data);
            return res.data;
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to send OTP");
        },
    });
};

// Verify OTP (Forgot Password) hook
export const useVerifyOTP = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/verify-otp", data);
            return res.data;
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "OTP verification failed");
        },
    });
};

// Reset Password hook
export const useResetPassword = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPublic.post("/auth/reset-password", data);
            return res.data;
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "Failed to reset password");
        },
    });
};

// Get User Info hook
export const useGetUserInfo = () => {
    return useQuery({
        queryKey: ["user-info"],
        queryFn: async () => {
            const res = await axiosPrivate.get("/auth/user-info");
            return res.data;
        },
        retry: false,
    });
};

// Update Profile hook
export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/auth/update-profile", data, {
                headers: {
                    "Content-Type": undefined,
                },
                timeout: 30000,
            });
            return res.data;
        },
        onSuccess: (data) => {
            if (data.status) {
                toast.success(data.message || "Profile updated successfully");
                queryClient.invalidateQueries({ queryKey: ["user-info"] });
            } else {
                toast.error(data.message || "Failed to update profile");
            }
        },
        onError: (error) => {
            const serverErrors = error.response?.data?.errors;
            if (serverErrors) {
                Object.values(serverErrors).flat().forEach((msg) => {
                    toast.error(msg);
                });
            } else {
                toast.error(error.response?.data?.message || "Profile update failed");
            }
        },
    });
};

// Update Password hook
export const useUpdatePassword = () => {
    return useMutation({
        mutationFn: async (data) => {
            const res = await axiosPrivate.post("/auth/update-password", data);
            return res.data;
        },
        onSuccess: (data) => {
            if (data.status) {
                toast.success(data.message || "Password updated successfully");
            } else {
                toast.error(data.message || "Failed to update password");
            }
        },
        onError: (error) => {
            const serverErrors = error.response?.data?.errors;
            if (serverErrors) {
                Object.values(serverErrors).flat().forEach((msg) => {
                    toast.error(msg);
                });
            } else {
                toast.error(error.response?.data?.message || "Password update failed");
            }
        },
    });
};

// Logout hook
export const useLogout = () => {
    const { logout } = useAuth();
    return useMutation({
        mutationFn: async () => {
            const res = await axiosPrivate.post("/auth/logout");
            return res.data;
        },
        onSuccess: () => {
            logout();
            toast.success("Logged out successfully");
        },
        onError: (error) => {
            console.error("Logout error", error);
            logout(); // Logout anyway locally
        },
    });
};