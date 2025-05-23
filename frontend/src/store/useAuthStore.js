import {create} from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
    user: null,
    // setUser: (user) => set({user})
    isCheckingAuth: true,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set ({authUser:res.data})
            
        } catch (error) {
            console.log("Error checking auth", error)
            set({authUser:null})
        } finally {
            set({isCheckingAuth:false})
        }
    },

    signup : async(data) => {
        set({isSigningUp:true})
        try {
            const res = await axiosInstance.post("/auth/signup", data)
            toast.success("Account created successfully")
            set({user:res.data})
        } catch (error) {
            toast.error(error.response.data.message)       
            console.log("Error signing up", error)
        } finally {
            set({isSigningUp:false})
        }
    }
}))

