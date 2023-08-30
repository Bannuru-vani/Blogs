import { ActionTypes } from "./actionTypes";
import {
  blogData,
  individualblogData,
  getMyblogs,
  getUser,
} from "../service/blogservice";
// export const getProductsFromTheCart = () => {
//     return async (dispatch) => {
//       try {
//         const res = await loginservice();
//         console.log(res, "response");
//         const resData = res.data;
//         console.log(resData, "response");
//         if (res.status === 200) {
//           dispatch({
//             type: ActionTypes.BLOG_DATA,
//             // getProductsdata: resData || [],
//           });
//         }
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//   };
export function getBlogData() {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOADING,
      load: ActionTypes.BLOG_DATA,
    });
    try {
      const res = await blogData();
      console.log(res, "data");
      if (res.status === 200) {
        return dispatch({
          type: ActionTypes.BLOG_DATA,
          data: res.data.blogs,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}
export function getIndividualBlogData(id) {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOADING,
      load: ActionTypes.INDIVIDUAL_BLOG_DATA,
    });
    try {
      const res = await individualblogData(id);
      console.log(res, "data");
      if (res.status === 200) {
        return dispatch({
          type: ActionTypes.INDIVIDUAL_BLOG_DATA,
          data: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}
export function getMyBlogs() {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOADING,
      load: ActionTypes.GET_MY_BLOGS,
    });
    try {
      const res = await getMyblogs();
      console.log(res, "data");
      if (res.status === 200) {
        return dispatch({
          type: ActionTypes.GET_MY_BLOGS,
          data: res.data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}
export function getuser() {
  return async (dispatch) => {
    dispatch({
      type: ActionTypes.LOADING,
      load: ActionTypes.GET_USER_DETAILS,
    });
    try {
      const res = await getUser();
      console.log(res, "data");
      if (res.status === 200) {
        return dispatch({
          type: ActionTypes.GET_USER_DETAILS,
          data: res.data.user,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
}
