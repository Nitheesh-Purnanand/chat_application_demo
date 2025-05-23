import {create} from "zustand"

export const userauthstore = create((set) => ({
    authuser:null,
    ischecking:true,
}))