/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';

const Login = () => {

    const { register, handleSubmit } = useForm({
        defaultValues: {
            userId: 'A-0001',
            password: 'admin123'
        }
    });

    const [login, { data }] = useLoginMutation();
    console.log(data);

    const onSubmit = (data: { userId: string; password: string; }) => {
        const userInfo = {
            id: data.userId,
            password: data.password
        }
        login(userInfo);
        console.log('data---', data)
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