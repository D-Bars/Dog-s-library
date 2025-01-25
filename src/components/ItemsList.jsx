import React from 'react';
import cl from './styles/ItemsList.module.scss';
import PostItemDog from './PostItemDog';

const ItemsList = ({ posts }) => {
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.h2}>Dog's Library</h2>
            <div className={cl.ItemsList}>
                {posts.map((post) =>
                    <PostItemDog key={post.id} post={post}></PostItemDog>
                )}
            </div>
        </div>
    );
};
export default ItemsList;