import { ActionTypes } from "../action/actionTypes";
const initialState = {
  loading: false,
  tokenExpired: false,
  blogData: [],
  individualblogData: [],
  MYBlogs: [],
  userdetails: [],
};

export const blogReducer = (state = initialState, action) => {
  const { type, data } = action;
  // console.log(action, "nnn", type);
  switch (type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    // case actionTypes.STOP_LOADING:
    //   return { ...state, loading: stopLoading(load, state.loading) };

    case ActionTypes.BLOG_DATA:
      console.log(data, "GET_BALANCE_CONFORMATION_DATA");

      return {
        ...state,
        blogData: data,
        loading: false,
      };
    case ActionTypes.GET_MY_BLOGS:
      // console.log(data, "GET_BALANCE_CONFORMATION_DATA");

      return {
        ...state,
        MYBlogs: data,
        loading: false,
      };
    case ActionTypes.GET_USER_DETAILS:
      return {
        ...state,
        userdetails: data,
        loading: false,
      };

    default:
      return state;
  }
};
export const individualblogReducer = (state = initialState, action) => {
  const { type, data } = action;
  console.log(action, "nnn", type);
  switch (type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    // case actionTypes.STOP_LOADING:
    //   return { ...state, loading: stopLoading(load, state.loading) };

    case ActionTypes.INDIVIDUAL_BLOG_DATA:
      return {
        ...state,
        individualblogData: data,
        loading: false,
      };
    default:
      return state;
  }
};
