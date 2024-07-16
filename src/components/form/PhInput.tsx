import { Form, Input } from 'antd';
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
            <Controller name={name}
                render={({ field }) =>
                    <Form.Item label={label}>
                        <Input
                            {...field}
                            type={type}
                            id={name}
                        />
                    </Form.Item>
                }
            />
        </>

    )
};

export default PhInput;