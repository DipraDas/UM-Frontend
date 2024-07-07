import { Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

const PhInput = ({ type, name, label }) => {
    return (
        <>
            {label ? label : null}
            <Controller name={name}
                render={({ field }) => <Input
                    {...field}
                    type={type}
                    id={name}
                />}
            />
        </>

    )
};

export default PhInput;