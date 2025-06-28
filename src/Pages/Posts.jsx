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
    const [searchQuery, setSearchQuery] = useState('');

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }

    const limitingPosts = (limit) => {
        setLimitPosts(Number(limit));
        setPage(1);
    };

    const sortedAndSearchedPosts = useMemo(() => {
        const filteredPosts = searchQuery
            ? posts.filter(item =>
                item.breeds[0].name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            : posts;

        if (!selectedSort) return filteredPosts;

        return [...filteredPosts].sort((a, b) => {
            const aValue = a.breeds?.[0]?.[selectedSort] ?? '';
            const bValue = b.breeds?.[0]?.[selectedSort] ?? '';
            return aValue.localeCompare(bValue);
        });
    }, [selectedSort, posts, searchQuery])

    const postsBlockRef = useRef(null);

    const changePage = (newPage) => {
        setPage(newPage);
        postsBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const paginationPosts = paginatePosts(sortedAndSearchedPosts, limitPosts, page);

    return (
        <div
            ref={postsBlockRef}
            className={cl.posts_block}
        >
            <div
                className={cl.control_box}
            >
                <MyInput
                    placeholder='search by name ...'
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value) }}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultVal='Sort by'
                    options={[
                        { value: 'name', name: 'Sort by name' },
                        { value: 'breed_group', name: 'Sort by breed' },
                        { value: '', name: 'Without sort' }
                    ]}
                ></MySelect>
                <div className={cl.select_container}>
                    <span className={cl.select_name}>Posts per page</span>
                    <MySelect
                        value={limitPosts}
                        onChange={limitingPosts}
                        options={[
                            { value: '10', name: '10' },
                            { value: '15', name: '15' },
                            { value: '20', name: '20' },
                            { value: '25', name: '25' }
                        ]}
                    ></MySelect>
                </div>
            </div>
            {postsLoading ? (
                <Loader></Loader>
            ) :
                error ? (
                    <ErrorMessage>There was an error loading data. Please try again later.</ErrorMessage>
                ) : (
                    <>
                        <PostsItemsList posts={paginationPosts}></PostsItemsList>
                        <Pagination
                            totalCount={sortedAndSearchedPosts.length}
                            page={page}
                            limit={limitPosts}
                            onClick={changePage}
                        >
                        </Pagination>
                    </>
                )
            }
        </div>
    );
};
export default Posts;