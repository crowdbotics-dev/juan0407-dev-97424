import axios from "axios";
const juandevAPI = axios.create({
  baseURL: "https://juan0407-dev-97424.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return juandevAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_chia_list(payload) {
  return juandevAPI.get(`/api/v1/chia/`);
}

function api_v1_chia_create(payload) {
  return juandevAPI.post(`/api/v1/chia/`, payload);
}

function api_v1_chia_retrieve(payload) {
  return juandevAPI.get(`/api/v1/chia/${payload.id}/`);
}

function api_v1_chia_update(payload) {
  return juandevAPI.put(`/api/v1/chia/${payload.id}/`, payload);
}

function api_v1_chia_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/chia/${payload.id}/`, payload);
}

function api_v1_chia_destroy(payload) {
  return juandevAPI.delete(`/api/v1/chia/${payload.id}/`);
}

function api_v1_frodo_list(payload) {
  return juandevAPI.get(`/api/v1/frodo/`);
}

function api_v1_frodo_create(payload) {
  return juandevAPI.post(`/api/v1/frodo/`, payload);
}

function api_v1_frodo_retrieve(payload) {
  return juandevAPI.get(`/api/v1/frodo/${payload.id}/`);
}

function api_v1_frodo_update(payload) {
  return juandevAPI.put(`/api/v1/frodo/${payload.id}/`, payload);
}

function api_v1_frodo_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/frodo/${payload.id}/`, payload);
}

function api_v1_frodo_destroy(payload) {
  return juandevAPI.delete(`/api/v1/frodo/${payload.id}/`);
}

function api_v1_login_create(payload) {
  return juandevAPI.post(`/api/v1/login/`, payload);
}

function api_v1_sam_list(payload) {
  return juandevAPI.get(`/api/v1/sam/`);
}

function api_v1_sam_create(payload) {
  return juandevAPI.post(`/api/v1/sam/`, payload);
}

function api_v1_sam_retrieve(payload) {
  return juandevAPI.get(`/api/v1/sam/${payload.id}/`);
}

function api_v1_sam_update(payload) {
  return juandevAPI.put(`/api/v1/sam/${payload.id}/`, payload);
}

function api_v1_sam_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/sam/${payload.id}/`, payload);
}

function api_v1_sam_destroy(payload) {
  return juandevAPI.delete(`/api/v1/sam/${payload.id}/`);
}

function api_v1_sauron_list(payload) {
  return juandevAPI.get(`/api/v1/sauron/`);
}

function api_v1_sauron_create(payload) {
  return juandevAPI.post(`/api/v1/sauron/`, payload);
}

function api_v1_sauron_retrieve(payload) {
  return juandevAPI.get(`/api/v1/sauron/${payload.id}/`);
}

function api_v1_sauron_update(payload) {
  return juandevAPI.put(`/api/v1/sauron/${payload.id}/`, payload);
}

function api_v1_sauron_partial_update(payload) {
  return juandevAPI.patch(`/api/v1/sauron/${payload.id}/`, payload);
}

function api_v1_sauron_destroy(payload) {
  return juandevAPI.delete(`/api/v1/sauron/${payload.id}/`);
}

function api_v1_signup_create(payload) {
  return juandevAPI.post(`/api/v1/signup/`, payload);
}

function rest_auth_login_create(payload) {
  return juandevAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/logout/`);
}

function rest_auth_logout_create(payload) {
  return juandevAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return juandevAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return juandevAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return juandevAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return juandevAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return juandevAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return juandevAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_chia_list,
  api_v1_chia_create,
  api_v1_chia_retrieve,
  api_v1_chia_update,
  api_v1_chia_partial_update,
  api_v1_chia_destroy,
  api_v1_frodo_list,
  api_v1_frodo_create,
  api_v1_frodo_retrieve,
  api_v1_frodo_update,
  api_v1_frodo_partial_update,
  api_v1_frodo_destroy,
  api_v1_login_create,
  api_v1_sam_list,
  api_v1_sam_create,
  api_v1_sam_retrieve,
  api_v1_sam_update,
  api_v1_sam_partial_update,
  api_v1_sam_destroy,
  api_v1_sauron_list,
  api_v1_sauron_create,
  api_v1_sauron_retrieve,
  api_v1_sauron_update,
  api_v1_sauron_partial_update,
  api_v1_sauron_destroy,
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
};