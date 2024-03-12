import { createSlice } from "@reduxjs/toolkit";

//게시판
/**
 * posts = [
 *  id,
 *  title,
 *  content,
 * ]
 */

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            console.log(action);
            state.posts.push(action.payload);
        },
    },
});

//postSlice.actions: 액션 생성자들을 포함하는 객체
export const { addPost } = postSlice.actions;
//postSlice.reducer: 상태를 업데이트하기 위한것
export default postSlice.reducer;
