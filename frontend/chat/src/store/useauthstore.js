import {create} from "zustand"
import { axiosinstance } from "../lib/axios"

export const useAuthstore = create((set) => ({
    authuser:null,
    isSiginingup:false,
    isLoggingi:false,
    isUpdatingprofile:false,
    ischecking:true,
    checkAuth: async()=>{
        try {
            const res = await axiosinstance.get("/auth/check")
            set({authuser:res.data})
        } catch (error) {
            console.log("error in checkauth:",error)
            set({authuser:null})
        }finally{
            set({ischecking:false})
        }
    },
    signup:async(data) =>{
        
    }
}))