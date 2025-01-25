import React from 'react';
import cl from './styles/PostItemDog.module.scss';

const PostItemDog = ({ children }) => {
    const dataArray = children.breeds[0];
    const dataNotFound = '--';
    return (
        <div className={cl.item}>
            <div className={cl.wrapper_img}><div className={cl.img_mask}></div><img src={children.url} /></div>
            <div className={cl.dog_info_box}>
                <div className={`${cl.dog_name} ${cl.dog_info}`}>NAME :
                    <span>{dataArray.name}</span>
                </div>
                <div className={`${cl.dog_bred_for} ${cl.dog_info}`}>BRED FOR :
                    {dataArray?.bred_for?.length
                        ? <span>{dataArray.bred_for}</span>
                        : <span className={cl.info_not_found}>{dataNotFound}</span>
                    }
                </div>
                <div className={`${cl.dog_breed_group} ${cl.dog_info}`}>BREED GROUP :
                    {dataArray?.breed_group?.length
                        ? <span>{dataArray.breed_group}</span>
                        : <span className={cl.info_not_found}>{dataNotFound}</span>
                    }
                </div>
            </div>
        </div>
    );
};
export default PostItemDog;