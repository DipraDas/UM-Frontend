import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = data => {
        console.log(data);
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PhForm onSubmit={onSubmit}>
                    <PhInput type="text" name="name" label="Name" />
                    <PhInput type="text" name="year" label="Year" />
                    <PhSelect label="Hello" />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;