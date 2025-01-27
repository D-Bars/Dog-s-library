import React, { useEffect, useState } from 'react';
import cl from './styles/ItemsList.module.scss';
import PostItemDog from './PostItemDog';
import ModalItemDog from './modalWindows/ModalItemDog';

const ItemsList = ({ posts }) => {
    const [post, setPost] = useState({})
    const [modal, setModal] = useState(false);
    const getPost = (selectedPost) => {
        setPost(selectedPost);
        setModal(true);
    } 
    const closeModal = () => {
        setPost({});
        setModal(false);
    }
    console.log(post);
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.h2}>Dog's Library</h2>
            <div className={cl.ItemsList}>
                {posts.map((post) =>
                    <PostItemDog 
                    key={post.id} 
                    post={post} 
                    getPost={getPost}
                    >
                    </PostItemDog>
                )}
            </div>
            {modal &&
                <ModalItemDog post={post} onClose={closeModal}></ModalItemDog>
            }
        </div>
    );
};
export default ItemsList;