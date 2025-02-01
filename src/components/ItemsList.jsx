import React, { useRef, useState } from 'react';
import cl from './styles/ItemsList.module.scss';
import PostItemDog from './PostItemDog';
import ModalItemDog from './UI/modalWindows/ModalItemDog';
import Pagination from './UI/Pagination/Pagination';
import { paginatePosts } from '../utils/paginate';

const ItemsList = ({ posts }) => {
    const [post, setPost] = useState(null)
    const [modal, setModal] = useState(false);
    const [limitPosts, setLimitPosts] = useState(10);
    const [page, setPage] = useState(1);
    const postsBlockRef = useRef(null);

    const changePage = (newPage) => {
        setPage(newPage);
        postsBlockRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const currentPosts = paginatePosts(posts, limitPosts, page);

    
    const openModal = (selectedPost) => {
        setPost(selectedPost);
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
        setPost(null)
    }

    return (
        <div 
        ref={postsBlockRef}
        className={cl.wrapper}
        >
            <h2 className={cl.h2}>Dog's Library</h2>
            <div className={cl.ItemsList}>
                {currentPosts.map((post) =>
                    <PostItemDog
                        key={post.id}
                        post={post}
                        openModal={openModal}
                    >
                    </PostItemDog>
                )}
            </div>
            {modal && post &&
                <ModalItemDog post={post} onClose={closeModal} modal={modal}></ModalItemDog>
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
export default ItemsList;