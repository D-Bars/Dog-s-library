import React, { useState } from 'react';
import cl from './styles/ItemsList.module.scss';
import PostItemDog from './PostItemDog';
import ModalItemDog from './modalWindows/ModalItemDog';

const ItemsList = ({ posts }) => {
    const [modal, setModal] = useState(false);
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.h2}>Dog's Library</h2>
            <div className={cl.ItemsList}>
                {posts.map((post) =>
                    <PostItemDog key={post.id} post={post}></PostItemDog>
                )}
            </div>
            {modal &&
                <ModalItemDog></ModalItemDog>
            }
        </div>
    );
};
export default ItemsList;