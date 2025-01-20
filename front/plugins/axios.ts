import axios from 'axios'
import type { AxiosInstance } from 'axios' // 'type'을 사용하여 타입만 가져오기

export default defineNuxtPlugin((nuxtApp) => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: 'http://localhost:5001/api', // 백엔드 API의 기본 URL 설정
    })

    // Axios 인스턴스를 Nuxt 앱에 추가
    nuxtApp.provide('axios', axiosInstance)
})
