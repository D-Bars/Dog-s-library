import React, { useState } from 'react';
import cl from './styles/PostsItemsList.module.scss';
import PostItemDog from './PostItemDog';
import ModalItemDog from './UI/modalWindows/ModalItemDog';


const PostsItemsList = ({ posts }) => {
    const [post, setPost] = useState(null)
    const [modal, setModal] = useState(false);

    const openModal = (selectedPost) => {
        setPost(selectedPost);
        setModal(true);
    }
    const closeModal = () => {
        setModal(false);
        setPost(null)
    }

    return (
    <div className={cl.wrapper}>
        <h2 className={cl.h2}>Dog's Library</h2>
        {posts.length ? (
            <>
                <div className={cl.ItemsList}>
                    {posts.map((post) => (
                        <PostItemDog key={post.id} post={post} openModal={openModal} />
                    ))}
                </div>
                {modal && post && <ModalItemDog post={post} onClose={closeModal} modal={modal} />}
            </>
        ) : (
            <div className={cl.not_found_box}><span>Posts not found</span></div>
        )}
    </div>
);
};
export default PostsItemsList;