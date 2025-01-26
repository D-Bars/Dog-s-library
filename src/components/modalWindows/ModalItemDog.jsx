import React from 'react';
import cl from '../styles/ModalItemDog.module.scss';

const ModalItemDog = ({ post }) => {
    const dataArray = post.breeds[0];
    console.log(dataArray);
    const dataValidationCheck = (field) => {
        //need add "if" for height & weight obj in dataArray
        const fieldName = field.replace('_', ' ');
        if (dataArray[field] && dataArray[field].length) {
            return <div className={cl.field_info}>
                        <div className={cl.field_info_name}>{fieldName}&nbsp;:</div>
                        <span>{dataArray[field]}</span>
                    </div>;
        } else {
            return 
        }
    };
    return (
        <div className={cl.modal_block}>
            <div className={cl.modal_box}>
                <div className={cl.wrapper_img}><img src={post.url} /></div>
                <div className={cl.dog_info_box}>
                    {dataValidationCheck('name')}
                    {dataValidationCheck('bred_for')}
                    {dataValidationCheck('breed_group')}
                    {dataValidationCheck('life_span')}
                    {dataValidationCheck('temperament')}
                    {dataValidationCheck('weight')}
                    {dataValidationCheck('height')}
                </div>
            </div>
        </div>
    );
};
export default ModalItemDog;