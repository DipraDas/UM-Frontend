import { Input } from 'antd';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

type TInputProps = {
    type: string;
    name: string;
    label?: string
}

const PhInput = ({ type, name, label }: TInputProps) => {
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