export const paginatePosts = (posts, limitPosts, page) => {
    let startNumberPostPage = (page - 1) * limitPosts;
    let filteredPostsArray = posts.slice(startNumberPostPage, startNumberPostPage + limitPosts);
    return filteredPostsArray;
}