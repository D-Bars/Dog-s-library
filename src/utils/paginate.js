export const paginatePosts = (posts, limitPosts, page) => {
    console.log(`page:${page}`);
    console.log(`limit:${limitPosts}`);
    let startNumberPostPage = (page - 1) * limitPosts;
    console.log(startNumberPostPage);
    let filteredPostsArray = posts.slice(startNumberPostPage, startNumberPostPage + limitPosts);
    return filteredPostsArray;
}