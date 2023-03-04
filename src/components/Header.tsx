import { Link } from "react-router-dom";
import '../assets/styles/Header.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Header = ()=>{

    const [menu, setMenu] = useState(false);
    const [user, setUser] = useState(localStorage.getItem("username"))
    const navigate = useNavigate();
    const handleMenu = ()=>{
        setMenu(!menu);
    }

    const  handleHome = ()=>{
        navigate("/home");
    }
    

    const handleForm = ()=>{
        navigate("/form-add-user");

    }

    const handleLogout = ()=>{
        navigate("/");

    }
   
    return (

      
        <div className="header-contaioner">
            <div className="header-contaioner_title">
                <i className='bx bxs-user-circle'></i>
                <span className="header-contaioner-title_name">{user}</span>
            </div>
            <header>
                <nav className={`${menu ? 'change' : ''}${' navbar'}`}>
                    <div className="hamburger-menu" onClick={handleMenu}>
                        <div className="line line-1"></div>
                        <div className="line line-2"></div>
                        <div className="line line-3"></div>
                    </div>

                    <div className="list">
                        <button onClick={handleHome}>
                            <div></div>
                            <div>Listar Usuarios</div>
                        </button>
                        <button>
                            <div></div>
                            <div onClick={handleForm}>Agregar Usuarios</div>
                        </button>
                        <button onClick={handleLogout}>
                            <div></div>
                            <div>LogOut</div>
                        </button>
                    </div>
                </nav>
            </header>

        </div>
        
    )
}



export default Header;