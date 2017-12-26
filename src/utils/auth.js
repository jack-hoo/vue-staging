import Cookies from 'js-cookie'

const TokenPrefix = 'Bearer '
const TokenKey = 'PC-Token'
export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, TokenPrefix + token)
}
export function setUserInfo(userInfo) {
  return Cookies.set("user-info", JSON.stringify(userInfo))
}
export function getUserInfo() {
  return JSON.parse(Cookies.get("user-info"))
}
