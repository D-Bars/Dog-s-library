import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useFetchPosts } from '../components/hooks/useFetchPosts';
import cl from './style/Posts.module.scss';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/UI/Loader/Loader';
import PostsItemsList from '../components/PostsItemsList';
import Pagination from '../components/UI/Pagination/Pagination';
import { paginatePosts } from '../utils/paginate';
import MyInput from '../components/UI/Input/MyInput';
import MySelect from '../components/UI/Select/MySelect';

import PostService from '../API/PostService';

const Posts = () => {

    const limit = process.env.REACT_APP_LIMIT;

    const [posts, setPosts] = useState([]);
    const [limitPosts, setLimitPosts] = useState(10);
    const [page, setPage] = useState(1);
    const [selectedSort, setSelectedSort] = useState('');

    const [ fetchPosts, error, postsLoading ] = useFetchPosts(async () => {
        const response = await PostService.getByLimit(limit);
        setPosts([...posts, ...response.data]);
    });
    useEffect(()=>{
        fetchPosts(limit);
    }, [limit])

    // const sortPosts = (sort) => {
    //     setSelectedSort(sort);
    // }

    // const changeLimitPosts = (limit) => {
    //     setLimitPosts(limit);
    // }

    // const sortedPosts = useMemo(() => {
    //     if (!selectedSort) return  fetchPosts;

    //     return [...posts].sort((a, b) => {
    //         const aValue = a.breeds?.[0]?.[selectedSort] ?? '';  
    //         const bValue = b.breeds?.[0]?.[selectedSort] ?? '';  
    //         return aValue.localeCompare(bValue);
    //     });
    // }, [fetchPosts, selectedSort]);

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
            {/* <MyInput placeholder='search...' />
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultVal='Sort by'
                options={[
                    { value: 'name', name: 'Sort by name' },
                    { value: 'breed_group', name: 'Sort by bred' },
                    { value: '', name: 'Without sorting' }
                ]}
            ></MySelect>
            <MySelect
                value={limitPosts}
                onChange={changeLimitPosts}
                defaultVal={limitPosts}
                options={[
                    { value: '10', name: '10' },
                    { value: '15', name: '15' },
                    { value: '20', name: '20' },
                    { value: '25', name: '25' }
                ]}
            ></MySelect> */}
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