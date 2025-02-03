import React, { useRef, useState } from 'react';
import useFetchPosts from '../components/hooks/useFetchPosts';
import cl from './style/Posts.module.scss';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/UI/Loader/Loader';
import SearchBox from '../components/SearchBox';
import PostsItemsList from '../components/PostsItemsList';
import Pagination from '../components/UI/Pagination/Pagination';
import { paginatePosts } from '../utils/paginate';

const Posts = () => {
    const { posts, error, postsLoading } = useFetchPosts();

    const [limitPosts, setLimitPosts] = useState(10);
    const [page, setPage] = useState(1);

    const postsBlockRef = useRef(null);


    const changePage = (newPage) => {
        setPage(newPage);
        postsBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const paginationPosts = paginatePosts(posts, limitPosts, page);

    return (
        <div
            ref={postsBlockRef}
            className={cl.posts_block}
        >
            <SearchBox></SearchBox>
            {postsLoading ? (
                <Loader></Loader>
            ) :
                error ? (
                    <ErrorMessage>There was an error loading data. Please try again later.</ErrorMessage>
                ) : (
                    <PostsItemsList posts={paginationPosts}></PostsItemsList>
                )
            }
            <Pagination
                totalCount={posts.length}
                page={page}
                limit={limitPosts}
                onClick={changePage}
            >
            </Pagination>
        </div>
    );
};
export default Posts;