import axios from '.'
//* 쿠키의 access_token의 유저 정보 받아오는 api
export const test = () => axios.get('/api/oauth/test')

export const getUserInfo = () => axios.get('/api/oauth/userInfo')
