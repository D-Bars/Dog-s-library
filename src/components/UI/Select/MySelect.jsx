import React from 'react';
import cl from './MySelect.module.scss'

const MySelect = ({ options, defaultVal, value, onChange }) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
            className={cl.select}
        >
            {defaultVal ? <option disabled value="">{defaultVal}</option> : null }
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};
export default MySelect;