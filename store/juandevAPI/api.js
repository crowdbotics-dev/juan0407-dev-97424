import axios from "axios"
const juandevAPI = axios.create({
  baseURL: "https://juan0407-dev-97424.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_chia_list(payload) {
  return juandevAPI.get(`/api/v1/chia/`)
}
function api_v1_chia_create(payload) {
  return juandevAPI.post(`/api/v1/chia/`, payload)
}
function api_v1_chia_retrieve(payload) {
  return juandevAPI.get(`/api/v1/chia/${payload.id}/`)
}
function api_v1_chia_update(payload) {
  return juandevAPI.put(`/api/v1/chia/${payload.id}/`, payload)
}
function api_v1_chia_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/chia/${payload.id}/`, payload)
}
function api_v1_chia_destroy(payload) {
  return juandevAPI.delete(`/api/v1/chia/${payload.id}/`)
}
function api_v1_hummus_list(payload) {
  return juandevAPI.get(`/api/v1/hummus/`)
}
function api_v1_hummus_create(payload) {
  return juandevAPI.post(`/api/v1/hummus/`, payload)
}
function api_v1_hummus_retrieve(payload) {
  return juandevAPI.get(`/api/v1/hummus/${payload.id}/`)
}
function api_v1_hummus_update(payload) {
  return juandevAPI.put(`/api/v1/hummus/${payload.id}/`, payload)
}
function api_v1_hummus_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/hummus/${payload.id}/`, payload)
}
function api_v1_hummus_destroy(payload) {
  return juandevAPI.delete(`/api/v1/hummus/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_rojo_list(payload) {
  return juandevAPI.get(`/api/v1/rojo/`)
}
function api_v1_rojo_create(payload) {
  return juandevAPI.post(`/api/v1/rojo/`, payload)
}
function api_v1_rojo_retrieve(payload) {
  return juandevAPI.get(`/api/v1/rojo/${payload.id}/`)
}
function api_v1_rojo_update(payload) {
  return juandevAPI.put(`/api/v1/rojo/${payload.id}/`, payload)
}
function api_v1_rojo_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/rojo/${payload.id}/`, payload)
}
function api_v1_rojo_destroy(payload) {
  return juandevAPI.delete(`/api/v1/rojo/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_chia_list,
  api_v1_chia_create,
  api_v1_chia_retrieve,
  api_v1_chia_update,
  api_v1_chia_partial_update,
  api_v1_chia_destroy,
  api_v1_hummus_list,
  api_v1_hummus_create,
  api_v1_hummus_retrieve,
  api_v1_hummus_update,
  api_v1_hummus_partial_update,
  api_v1_hummus_destroy,
  api_v1_login_create,
  api_v1_rojo_list,
  api_v1_rojo_create,
  api_v1_rojo_retrieve,
  api_v1_rojo_update,
  api_v1_rojo_partial_update,
  api_v1_rojo_destroy,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
