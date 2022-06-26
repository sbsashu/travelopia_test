import axios from "axios"

export const addTravllerDetail = (detail) => {
        return axios.post("/add/form/details", detail, (data) => data)
}

export const getTraveDetails = () => {
    return axios.get("/get/details").then(data => data).catch(err => err)
}

