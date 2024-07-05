/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifyToken';

const Login = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123'
        }
    });

    const [login] = useLoginMutation();

    const onSubmit = async (data: { userId: string; password: string; }) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken);
        dispatch(setUser({
            user: user,
            token: res.data.accessToken
        }))
        console.log('data---', res)
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            </form>
        </div>
    );
};

export default Login;