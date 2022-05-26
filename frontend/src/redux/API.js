import { request } from "../utils/axiosInstance";
import { allAvailable } from "./slice/availableSlice";
import { allDogs } from "./slice/dogSlice";

export const getAllDogs = () => async (dispatch) => {
  try {
    const res = await request.get("/dogs");
    dispatch(allDogs(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const getAllAvailable = () => async (dispatch) => {
  try {
    const res = await request.get("/available");
    dispatch(allAvailable(res.data));
  } catch (error) {
    console.log(error);
  }
};
