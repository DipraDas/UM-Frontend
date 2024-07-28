import { Button } from "antd";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { useAddAcademicDepartmentMutation, useGetAllFacultiesQuery } from "../../../redux/features/admin/academicManagement.api";
import { FieldValues } from "react-hook-form";
import PhSelect from "../../../components/form/PhSelect";

const CreateAcademicDepartment = () => {

    const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
    const { data: FacultiesData } = useGetAllFacultiesQuery(undefined);
    console.log('>>>>>-->>', FacultiesData?.data);

    const allFaculties = FacultiesData?.data?.map((faculty) => ({
        value: faculty.name,
        lable: faculty.name
    }))
    console.log('++', allFaculties)

    const onSubmit = async (data: FieldValues) => {
        const facultyId = FacultiesData?.data?.find(faculty => faculty.name === data.facultyName)?._id;
        const academicDepartmentData = {
            name: data.name,
            academicFaculty: facultyId
        }
        console.log('>>Data', academicDepartmentData)
        // const tosatId = toast.loading('Creating ....')
        // try {
        const res = await addAcademicDepartment(academicDepartmentData);
        console.log('>>ressssss', res)
        //     if (res.error) {
        //         toast.error(res.error.data.message, { id: tosatId });
        //     } else {
        //         toast.success('Academic Created', { id: tosatId })
        //     }
        // } catch {
        //     toast.error('Something went wrong.')
        // }
    }


    return (
        <div style={{ width: '350px', margin: '0 auto' }}>
            <PhForm onSubmit={onSubmit}>
                <PhInput type='text' name='name' label='Academic Department Name' />
                <PhSelect label="Academic Faculty" name="facultyName" options={allFaculties} />
                <Button htmlType='submit'>
                    Add
                </Button>
            </PhForm>
        </div>
    );
};

export default CreateAcademicDepartment;