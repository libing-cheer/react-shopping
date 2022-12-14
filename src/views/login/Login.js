import styled from 'styled-components';
import './index.scss';
import useMergeState from '../../utils/useMergeState';
import {useNavigate, Navigate} from 'react-router-dom';
import {post} from '../../utils/request';

const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`;

function Login() {
    const [data, setData] = useMergeState({
        userName: '',
        password: '',
        showMessage: false
    });
    const isLogin = localStorage.isLogin;
    const navigate = useNavigate();
    const handleInputChange = (e, type) => {
        if (type === 'userName') setData({userName: e.target.value});
        if (type === 'password') setData({password: e.target.value});
    };
    const handleInputBlur = () => {
        const {userName, password} = data;
        if (userName && password) {
            setData({showMessage: false});
        }
    };
    const handleLogin = async () => {
        const {userName, password} = data;
        if (!userName || !password) {
            setData({showMessage: true});
            return;
        }
        try {
            const params = {...data};
            const result = await post('/api/user/login', params);
            if (result?.status) {
                localStorage.isLogin = true;
                setData({
                    userName: '',
                    password: '',
                    confirmPassword: ''
                });
                navigate('/');
            }
        } catch (e) {
            console.log(e);
        }
    };
    const handleRegisterClick = () => {
        navigate('/register');
    };
    return (
        <div>
            {
                !isLogin &&
                <LoginWrapper>
                    <img className='wrapper__img'
                         src={'http://www.dell-lee.com/imgs/vue3/user.png'}
                    />
                    <div className="wrapper__input">
                        <input
                            value={data.userName}
                            className="wrapper__input__content"
                            placeholder="??????????????????"
                            onChange={e => handleInputChange(e, 'userName')}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="wrapper__input">
                        <input
                            value={data.password}
                            type="password"
                            className="wrapper__input__content"
                            placeholder="???????????????"
                            onChange={e => handleInputChange(e, 'password')}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    {
                        data.showMessage && <div className='wrapper__tips'>???????????????????????????</div>
                    }
                    <div className="wrapper__login-button" onClick={handleLogin}>??????</div>
                    <div className="wrapper__login-link" onClick={handleRegisterClick}>????????????</div>
                </LoginWrapper>
            }
            {
                isLogin && <Navigate to={'/'} replace />
            }

        </div>
    )
}

export default Login