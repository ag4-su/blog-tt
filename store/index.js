export const state = () => ({
    posts: {},
    currentPostData: {},
    currentCommentsData: {},
    currentUserData: {}
});

export const mutations = {
    setPosts(state, payload) {
        state.posts = payload;
    },
    setCurrentPostData(state, payload) {
        state.currentPostData = payload;
    },
    setCurrentCommentsData(state, payload) {
        state.currentCommentsData = payload;
    },
    setCurrentUserData(state, payload) {
        state.currentUserData = payload;
    }
};

export const getters = {
    getPosts: state => state.posts,
    getCurrentPostData: state => state.currentPostData,
    getCurrentCommentsData: state => state.currentCommentsData,
    getCurrentUserData: state => state.currentUserData,
};