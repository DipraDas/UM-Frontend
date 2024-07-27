import { FieldValues, SubmitHandler } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { monthOptions } from "../../../constants/semester";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schemas/academinManagement.schema";
import { toast } from "sonner";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types/global";

const nameOption = [
    {
        value: '01',
        label: 'Autumn'
    },
    {
        value: '02',
        label: 'Summar'
    },
    {
        value: '03',
        label: 'Fall'
    },
]

const currentYear = new Date().getFullYear();

const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
    value: String(currentYear + number),
    lable: String(currentYear + number)
}))

const CreateAcademicSemester = () => {

    const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit: SubmitHandler<FieldValues> = async data => {
        const tosatId = toast.loading('Creating ....')

        const name = nameOption[Number(data?.name) - 1]?.label;
        const semesterData = {
            name,
            code: data.name,
            year: data.year,
            startMonth: data.startMonth,
            endMonth: data.endMonth
        }
        try {
            console.log('helo');
            const res = await addAcademicSemester(semesterData) as TResponse;
            console.log('res', res)
            if (res.error) {
                toast.error(res.error.data.message, { id: tosatId });
            } else {
                toast.success('Semester Created', { id: tosatId })
            }
        } catch {
            toast.error('Something went wrong.')
        }
    }

    return (
        <Flex justify="center" align="center">
            <Col span={6}>
                <PhForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
                    {/* <PhInput type="text" name="name" label="Name" /> */}
                    <PhSelect label="Name" name="name" options={nameOption} />
                    <PhSelect label="Year" name="year" options={yearOptions} />
                    <PhSelect label="Start Month" name="startMonth" options={monthOptions} />
                    <PhSelect label="End Month" name="endMonth" options={monthOptions} />
                    <Button htmlType="submit">Submit</Button>
                </PhForm>
            </Col>
        </Flex>
    );
};

export default CreateAcademicSemester;