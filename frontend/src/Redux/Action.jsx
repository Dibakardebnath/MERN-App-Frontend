import {
  GET_AUTH_DATA,
  GET_DELETED_DATA,
  GET_LOGIN,
  GET_PERSONAL_DATA,
  GET_PUBLIC_DATA,
  GET_UPDATED_DATA,
} from "./ActionType";

export const GetData = (payload) => {
  return { type: GET_PUBLIC_DATA, payload: payload };
};

export const personalData = (payload) => {
  return { type: GET_PERSONAL_DATA, payload: payload };
};

export const DeleteData = (payload) => {
  // console.log(payload)
  return { type: GET_DELETED_DATA, payload: payload };
};

export const UpdateData = (payload) => {
  return { type: GET_UPDATED_DATA, payload: payload };
};

export const AuthData = (payload) => {
  return { type: GET_AUTH_DATA, payload: payload };
};

export const LOGIN = (payload) => {
  return { type: GET_LOGIN, payload: payload };
};
