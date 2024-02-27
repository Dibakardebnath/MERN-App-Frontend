import {
  GET_AUTH_DATA,
  GET_DELETED_DATA,
  GET_LOGIN,
  GET_PERSONAL_DATA,
  GET_PUBLIC_DATA,
  GET_UPDATED_DATA,
} from "./ActionType";

const initialState = {
  isAuth: false,
  login: false,
  Data: [],
  total: 0,
  PersonalData: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_AUTH_DATA: {
      return { ...state, isAuth: payload };
    }
    case GET_PUBLIC_DATA: {
      return { ...state, Data: payload.users, total: payload.total };
    }
    case GET_PERSONAL_DATA: {
      return {
        ...state,
        isAuth: true,
        PersonalData: payload.users,
        total: payload.total,
      };
    }

    case GET_DELETED_DATA: {
      let filterData = state.PersonalData.filter(
        (item) => item._id !== payload
      );

      return {
        ...state,
        PersonalData: filterData,
      };
    }

    case GET_UPDATED_DATA: {
      return { ...state, PersonalData: payload };
    }
    case GET_LOGIN: {
      return {
        ...state,
        login: payload,
      };
    }

    default:
      return state;
  }
};
