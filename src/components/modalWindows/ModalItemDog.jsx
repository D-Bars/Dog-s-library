import React from 'react';
import cl from '../styles/ModalItemDog.module.scss';

const ModalItemDog = ({ post }) => {
    const dataArray = post.breeds[0];

    const dataValidationCheck = (keyStr) => {
        const keyName = keyStr.replace('_', ' ');
        const data = dataArray[keyStr];
        if (typeof dataArray[keyStr] === 'object') {
            return setNestedData(data, keyName);
        } else {
            if (dataArray[keyStr] && dataArray[keyStr].length) {
                return setObjData(data, keyName);
            }
        }
    };

    const setNestedData = (nestedData, keyName) => {
        return (
            <div className={cl.field_info}>
                <div className={cl.field_info_name}>{keyName}&nbsp;:</div>
                {Object.entries(nestedData).map(([key, value]) => (
                    <div key={key} className={cl.nested_field}>
                        <span className={cl.nested_key}>{key}&nbsp;:</span>
                        <span>&nbsp;{value}</span>
                    </div>
                ))}
            </div>
        );
    };

    const setObjData = (objData, keyName) => {
        return <div className={cl.field_info}>
            <div className={cl.field_info_name}>{keyName}&nbsp;:</div>
            <span>{objData}</span>
        </div>;
    }
    
    return (
        <div className={cl.modal_block}>
            <div className={cl.modal_box}>
                <div className={cl.closer}></div>
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