import { Button } from "antd";
import PhForm from "../../../components/form/PhForm";
import PhInput from "../../../components/form/PhInput";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";

const CreateAcademicFaculty = () => {
    const [addAcademicFaculty] = useAddAcademicFacultyMutation();

    const onSubmit = async (data: FieldValues) => {
        const tosatId = toast.loading('Creating ....')
        try {
            const res = await addAcademicFaculty(data);
            if (res.error) {
                toast.error(res.error.data.message, { id: tosatId });
            } else {
                toast.success('Academic Created', { id: tosatId })
            }
        } catch {
            toast.error('Something went wrong.')
        }
    }

    return (
        <div style={{ width: '350px', margin: '0 auto' }}>
            <PhForm onSubmit={onSubmit}>
                <PhInput type='text' name='name' label='Academic Faculty Name' />
                <Button htmlType='submit'>
                    Add
                </Button>
            </PhForm>
        </div>
    );
};

export default CreateAcademicFaculty;