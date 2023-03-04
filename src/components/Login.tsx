import '../assets/styles/Login.scss';
import _ImgLogin from '../assets/imgs/imglogin.svg';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useContext} from 'react';
import LoginContext from '../context/LoginContext';
import { User, UserContextType } from '../context/ContextModels';
import validator from 'validator';
import { handleLoginUser } from '../UX/Alerts';


const Login = ()=>{

    const [userName, setUserName] = useState<string>('');
    const [passWord, setPassWord] = useState<string>('');
    const navigate = useNavigate();
    const {UserContext, setUserContext} = useContext(LoginContext) as UserContextType;

    const handleUserName = (e:string):void =>{
        setUserName(e);
    }


    const handlePassWord = (e:string):void =>{
        setPassWord(e);
    }

    const handleSubmit = (e:any):void=>
    {
        e.preventDefault();

        if(validator.isEmpty(userName)){
            handleLoginUser("Campo username no puede estar vacio");
        }else if(validator.isEmpty(passWord)){
            handleLoginUser("Debe de ingresar una contraseña");
        }else{

            const newUser = {
                username : userName,
                password : passWord
            };
            setUserContext(newUser);
            //localStorage.setItem("username", UserContext.username)
            setUserName('');
            setPassWord('');
            navigate('home');

        }
    }

    useEffect(()=>{
        localStorage.setItem('username', userName);
    },[userName]);
    return(
        <div className='login'>
            <div className='login_container'>
                <div className='login_img'>
                    <img src={_ImgLogin} alt="img_login"/>
                </div>
                <form className='login_form'>
                    <div className='login_form-title'>
                        LOG IN
                    </div>
                    <div className='login-form_content-1'>
                        <div>
                            <label>Usernam</label>
                        </div>
                        <div>
                            <input type="text" className="form-control" name='username' value={userName} onChange={(e)=> handleUserName(e.target.value)}/>
                        </div>
                    </div>

                    <div className='login-form_content-2'>
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="password" className="form-control" name='password' value={passWord} onChange={(e)=> handlePassWord(e.target.value)}/>
                        </div>
                    </div>

                    <div className='login-form_content-3'>
                        <button onClick={handleSubmit}>LOG IN</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default Login;