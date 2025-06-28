export const paginatePosts = (posts, limitPosts, page) => {
    const limit = Number(limitPosts);
    const start = (page - 1) * limit;
    return posts.slice(start, start + limit);
};