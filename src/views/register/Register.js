import styled from 'styled-components';
import './index.scss';
import useMergeState from '../../utils/useMergeState';
import {useNavigate} from 'react-router-dom';
import {post} from '../../utils/request';

const RegisterWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`;

function Register() {
    const [data, setData] = useMergeState({
        userName: '',
        password: '',
        confirmPassword: '',
        showError: false
    });
    const navigate = useNavigate();
    const handleInputChange = (e, type) => {
        if (type === 'userName') setData({userName: e.target.value});
        if (type === 'password') setData({password: e.target.value});
        if (type === 'confirmPassword') setData({confirmPassword: e.target.value});

    };
    const handleInputBlur = () => {
        if (data.password === data.confirmPassword) {
            setData({showError: false});
        }
    };
    const handleRegister = async () => {
        try {
            const params = {...data};
            if (params.password !== params.confirmPassword) {
                setData({showError: true});
                return;
            }
            const result = await post('/api/user/register', params);
            if (result?.status) {
                setData({
                    userName: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate('/login');
            }
        } catch (e) {
            console.log(e);
        }
    };
    const handleToLogin = () => {
        navigate('/login');
    };
    return (
        <RegisterWrapper>
            <img
                className="wrapper__img"
                src={'http://www.dell-lee.com/imgs/vue3/user.png'}
                alt=""
            />
            <div className="wrapper__input">
                <input
                    value={data.userName}
                    className="wrapper__input__content"
                    placeholder="请输入"
                    onChange={e => {
                        handleInputChange(e, 'userName')
                    }}
                />
            </div>
            <div className="wrapper__input">
                <input
                    value={data.password}
                    type="password"
                    className="wrapper__input__content"
                    placeholder="请输入密码"
                    onChange={e => {
                        handleInputChange(e, 'password')
                    }}
                    onBlur={handleInputBlur}
                />
            </div>
            <div className="wrapper__input">
                <input
                    value={data.confirmPassword}
                    type="password"
                    className="wrapper__input__content"
                    placeholder="确认密码"
                    onChange={e => {
                        handleInputChange(e, 'confirmPassword')
                    }}
                    onBlur={handleInputBlur}
                />
            </div>
            {
                data.showError && <div className='wrapper__password'>密码输入不一致</div>
            }
            <div className="wrapper__register-button" onClick={handleRegister}>注册</div>
            <div className="wrapper__register-link" onClick={handleToLogin}>
                已有账号去登录
            </div>
        </RegisterWrapper>
    )
}

export default Register