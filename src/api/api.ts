import axios from "axios";


export const res = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "67dd4401-c897-43e6-a058-b14b4d86756b"
    }
})


export const usersAPI = {
    getUsers(currentPage: number) {
        return res.get(`users?page=${currentPage}`)
            .then(response => response.data)
    },
    follow(userId: string) {
        return res.post(`/follow/${userId}`)
            .then(response => response.data)
    },
    unfollow(userId: string) {
        return res.delete(`/follow/${userId}`)
            .then(response => response.data)
    }
}
export const headerAPI = {
    get() {
        return res.get(`auth/me`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return res.get(`profile/` + userId)
            .then(response => response.data)
    },
    getStatus (userId: string) {
        return res.get(`profile/status/` + userId)
            .then(response => response.data)
    },
    updateStatus (status: string) {
        return res.put(`profile/status/`, {status: status})
            .then(response => response.data)
    }
}