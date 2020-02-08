const postReducer = (state, action) => {
  switch (action.type) {
    case "GET_POST":
      return {
        ...state,
        posts: action.payload
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post._id === action.payload._id ? action.payload : post
        )
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post._id !== action.payload)
      };
    case "CLEAR_POSTS":
      return {
        ...state,
        posts: null
      };
    case "SET_CURRENT":
      return {
        ...state,
        current: action.payload
      };
    case "SET_COMMENT":
      return {
        ...state,
        comment: action.payload
      };
    case "CLEAR_CURRENT":
      return {
        ...state,
        current: null
      };
    default:
      return state;
  }
};
export default postReducer;
