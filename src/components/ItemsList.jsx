import React from 'react';
import cl from './styles/ItemsList.module.scss';

const ItemsList = () => {
    return (
        <div className={cl.wrapper}>
            <h2 className={cl.h2}>Dog's Library</h2>
            <div className={cl.ItemsList}>
                <div className={cl.item}>1</div>
                <div className={cl.item}>2</div>
                <div className={cl.item}>3</div>
                <div className={cl.item}>4</div>
            </div>
        </div>
    );
};
export default ItemsList;