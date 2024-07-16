import { Form, Select } from "antd";

const PhSelect = ({ label }) => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };


    return (
        <div>
            <Form.Item label={label}>
                <Select
                    defaultValue="lucy"
                    style={{ width: '100%' }}
                    onChange={handleChange}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' },
                        { value: 'Yiminghe', label: 'yiminghe' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
            </Form.Item>

        </div>
    );
};

export default PhSelect;