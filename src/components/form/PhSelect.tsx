import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string; disabled?: boolean }[]
}

const PhSelect = ({ label, name, options }: TPHSelectProps) => {

    return (
        <div>
            <Controller
                name={name}
                render={({ field }) => (
                    <Form.Item label={label}>
                        <Select
                            style={{ width: '100%' }}
                            {...field}
                            options={options}
                        />
                    </Form.Item>
                )}
            />
        </div>
    );
};

export default PhSelect;