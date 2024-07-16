import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";

const CreateAcademicSemester = () => {

    const onSubmit: SubmitHandler<FieldValues> = data => {
        const semesterData = {
            name: "Some",
            code: "Some",
        }
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PhForm onSubmit={onSubmit}>
                    {/* <PhInput type="text" name="name" label="Name" /> */}
                    <PhSelect label="Name" name="name" />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;