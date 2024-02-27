import axios from "axios";
import { DeleteData, GetData, UpdateData, personalData } from "./Action";

export const getPublicData = (page) => async (dispatch) => {
  try {
    await axios
      .get(`https://lazy-jade-barracuda-tux.cyclic.cloud/?page=${page}&limit=4`)
      .then((res) => {
        dispatch(GetData(res.data));
      });
  } catch (error) {
    console.log(error);
  }
};

// page,value,order
export const getPersonalData = (page, value, order) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://lazy-jade-barracuda-tux.cyclic.cloud/dashboard?category=${value}&page=${page}&limit=3&sortby=createdAt&order=${order}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")
          )}`,
        },
      }
    );
    dispatch(personalData(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const postData = (blog) => async (dispatch) => {
  console.log(blog);
  let token = JSON.parse(sessionStorage.getItem("token"));
  console.log(token);
  try {
    await axios.post(
      "https://lazy-jade-barracuda-tux.cyclic.cloud/create",
      blog,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
  } catch (error) {
    console.log("Error creating blog", error);
  }
};

export const deleteData = (_id) => async (dispatch) => {
  try {
    console.log(_id);
    const res = await axios.delete(
      `https://lazy-jade-barracuda-tux.cyclic.cloud/delete/${_id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")
          )}`,
        },
      }
    );
    console.log("Delete response:", res);
    dispatch(DeleteData(_id));
  } catch (error) {
    console.log("Error:", error);
  }
};

export const updateValue = (id, value) => async (dispatch) => {
  try {
    const res = await axios.put(
      `https://lazy-jade-barracuda-tux.cyclic.cloud/update/${id}`,
      value,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(
            sessionStorage.getItem("token")
          )}`,
        },
      }
    );

    dispatch(UpdateData(res.data.users));
  } catch (error) {
    console.log("Error:", error);
  }
};
