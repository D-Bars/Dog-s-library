import React, { useEffect, useMemo, useRef, useState } from 'react';
import useFetchPosts from '../components/hooks/useFetchPosts';
import cl from './style/Posts.module.scss';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/UI/Loader/Loader';
import PostsItemsList from '../components/PostsItemsList';
import Pagination from '../components/UI/Pagination/Pagination';
import { paginatePosts } from '../utils/paginate';
import MyInput from '../components/UI/Input/MyInput';
import MySelect from '../components/UI/Select/MySelect';

const Posts = () => {
    const { posts, error, postsLoading } = useFetchPosts();

    const [limitPosts, setLimitPosts] = useState(10);
    const [page, setPage] = useState(1);
    const [selectedSort, setSelectedSort] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }
    
    const sortedPosts = useMemo(() => {
        if (!selectedSort) return posts;
    
        return [...posts].sort((a, b) => {
            const aValue = a.breeds?.[0]?.[selectedSort] ?? '';  
            const bValue = b.breeds?.[0]?.[selectedSort] ?? '';  
            return aValue.localeCompare(bValue);
        });
    }, [posts, selectedSort]);

    const postsBlockRef = useRef(null);

    const changePage = (newPage) => {
        setPage(newPage);
        postsBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const paginationPosts = paginatePosts(sortedPosts, limitPosts, page);

    return (
        <div
            ref={postsBlockRef}
            className={cl.posts_block}
        >
            <MyInput placeholder='search...' />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultVal='Sort by'
                options={[
                    { value: 'name', name: 'Sort by name' },
                    { value: 'breed_group', name: 'Sort by bred' }
                ]}
            ></MySelect>
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