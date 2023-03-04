import { useAppDispatch, useAppSelector } from "../redux/Store";
import { createPerson } from "../redux/Slice";
import { useState, useEffect } from "react";
import { PersonsInterface } from "../redux/Models";
import Header from "./Header";
import '../assets/styles/Form.scss';
import { handleSubmitError } from "../UX/Alerts";
import validator from 'validator';
import {v4 as uuid} from 'uuid';
import { handleUserCreated } from "../UX/Alerts";

const Form = ()=>{
    

    const [hombre, setHombre] = useState<boolean>(false);
    const [mujer, setMujer] = useState<boolean>(false);
    const [_hijos, setHijos] = useState<boolean>(false);
    const persons = useAppSelector(state=> state.form.persons);
    const dispatch = useAppDispatch();


    const handleHombe = ()=>{
        form.genera = "Hombre";
        setHombre(!hombre);
    }

    const handleMujer = ()=>{
        form.genera = "Mujer";
        setMujer(!mujer);

    }

    const handleYes = (e:any)=>{
        e.preventDefault();

        setHijos(true);
    }

    

    const [form, setForm] = useState({
        id : "",
        nombre: "",
        primerApellido : "",
        segundoAppelido : "",
        cedula:"",
        edad : 0,
        genera: hombre ? "Hombre" : mujer ? "Mujer" : "Hombre",
        direccion:"",
        telefono:"",
        correoElectronico: "",
        estadoCivil:"",
        hijos:_hijos,
        fechaDeNacimiento:""

    })
    const handleChange = (e:any):void=>{
        setForm({
            
            ...form,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e:any)=>{
        e.preventDefault();

       

        if(validator.isEmpty(form.nombre)){
            handleSubmitError("Debe de ingresar su nombre");
        }else{
            if(validator.isEmpty(form.primerApellido)){
                handleSubmitError("Debe de ingresar su primer apellido");
            }else{
                if(validator.isEmpty(form.cedula)){
                    handleSubmitError("Debe de ingresar su cedula");
                }else{
                    if(form.edad <= 0){
                        handleSubmitError("Debe de ingresar su edad");
                    }else{
                        if (!validator.isEmail(form.correoElectronico)){
                            handleSubmitError("Correo electronico no valido");
                        }else{
                            if( !validator.isDate(form.fechaDeNacimiento)){
                                handleSubmitError("Debe de ingresar su fecha de nacimiento");
                                                     
                              }else{
                                    dispatch(createPerson({
                                        ...form,
                                        id:uuid(),
                                        hijos : _hijos 
                                    }));
                                    handleUserCreated(form.nombre);
                              }
                        }
                    }
                }
            }
        }
 
    }

    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(persons));
    },[persons]);

    
    
    return(
        <div className="">
            <Header/>


            

            <div className="forn-container ">
                <form className="forn-container-form">


                    <div>
                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Nombre" aria-label="First name" name="nombre" onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Primer Apellido" aria-label="Last name" name="primerApellido" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Segundo Apellido" aria-label="Apellido " name="segundoAppelido" onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Cedula" aria-label="Cedula" name="cedula" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col">
                                <input type="number" className="form-control form-container-form_input" placeholder="Edad" aria-label="Edad" name="edad" onChange={handleChange}/>
                            </div>
                            <div className="col">
                                    <div className="form-femail-mail">
                                        <div className="">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" defaultChecked={hombre} onChange={() => handleHombe()}  disabled={mujer}/>
                                                <label className="form-check-label" >
                                                Hombre
                                                </label>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1" defaultChecked={mujer} onChange={() => handleMujer()} disabled={hombre}/>
                                                <label className="form-check-label" >
                                                Mujer
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>


                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Direccion" aria-label="Direccion" name="direccion" onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Telefono" aria-label="Telefono" name="telefono" onChange={handleChange}/>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Correo Electronico" aria-label="Corrego electronico" name="correoElectronico" onChange={handleChange}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control form-container-form_input" placeholder="Estado Civil" aria-label="Estado Civil" name="estadoCivil" onChange={handleChange}/>
                            </div>
                        </div>

                       <div className="row g-3">
                            <div className="form-input-hijos">
                                <div><b>Hijos?</b></div>
                                <div>
                                    <button className="btn btn-primary text-center shadow" onClick={(e)=> handleYes(e)}><div>Si</div></button>
                                    <button className="btn btn-danger text-center shadow">No</button>
                                </div>
                            </div>
                            <div>
                                <input type="date" className="form-control form-container-form_input" placeholder="Fecha De nacimiento" aria-label="Fecha Nacimiento" name="fechaDeNacimiento" onChange={handleChange}/>
                            </div>
                       </div>
                        
                    </div>


                    <div className="form-container-form_button">
                        <button onClick={(e)=> handleSubmit(e)}>Submite</button>
                    </div>
                </form>
            </div>
           
        </div>
    )
}


export default Form;
