/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import PhForm from '../components/form/PhForm';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123'
        }
    });

    const [login] = useLoginMutation();

    const onSubmit = async (data: FieldValues) => {
        console.log('Data--', data);
        // const toastId = toast.loading('Logging in');
        // try {
        //     const userInfo = {
        //         id: data.userId,
        //         password: data.password
        //     }
        //     const res = await login(userInfo).unwrap();
        //     const user = verifyToken(res.data.accessToken) as TUser;
        //     dispatch(setUser({
        //         user: user,
        //         token: res.data.accessToken
        //     }))
        //     toast.success('Logged in', { id: toastId, duration: 2000 });
        //     navigate(`/${user.role}/dashboard`);
        //     console.log('data---', res)
        // } catch (err) {
        //     toast.error('Something went wrong.', { id: toastId, duration: 2000 })
        // }
    }

    return (
        <div>
            <h1>Login</h1>
            <PhForm onSubmit={onSubmit}>
                <div>
                    <label
                        htmlFor="id">
                        ID :
                    </label>
                    <input
                        type="text"
                        id="id"
                        {...register('userId')}
                    />
                </div>
                <div>
                    <label
                        htmlFor="password">
                        PASSWORD :
                    </label>
                    <input
                        type="text"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <Button htmlType='submit'>
                    Login
                </Button>
            </PhForm>
        </div>
    );
};

export default Login;