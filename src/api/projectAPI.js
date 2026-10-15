import axios from "axios"
import axiosInstance from "./axiosInstance"

export async function getAllProjects(){
    try{
        const res = await axiosInstance.get("/projects")
        console.log(res.data)
        const re = res.data
        return re
    }catch(error){
        throw error
    }
}
export function getProjectById(ID){}
export function updatedStatus(ID, status){
     try {
        const res = axiosInstance.patch(`/projects/${ID}`,data )
        if(res){
            return "Status Updated"
        }else{
        return "Error While Updating"
        }
    } catch (error) {
        throw error
        return "Error While Updating"
    }
}

export function updateProject(ID, data){}
export async function deleteProject(ID){
    try{
        const res = await axiosInstance.delete(`/projects/$(ID)`)
        if(res){
            return "Project Deleted Successfully"
        }else{
             return "project Deleted Successfully"
        }
       
    }catch(error){
        throw error
        return"Error while Deleting"
    }
}
export function createProject(Data){}