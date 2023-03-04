import { useState, useEffect, ReactNode } from "react";
import '../assets/styles/Home.scss';
import { useAppSelector, useAppDispatch } from '../redux/Store';
import { deletePerson } from '../redux/Slice';
import { handleDeleteAlert } from '../UX/Alerts';

type Data = {
    data:{
        id : string,
        nombre: string
        primerApellido : string,
        segundoAppelido : string,
        cedula:string,
        edad : number,
        genera:string,
        direccion:string,
        telefono:string,
        correoElectronico: string,
        estadoCivil:string,
        hijos:Boolean,
        fechaDeNacimiento:string
    }[]
}




const PaginationPage = (props : Data)=>{

const dispatch = useAppDispatch();

const handleDelete = (id:any, name : string):void =>{
    dispatch(deletePerson(id));
    handleDeleteAlert(name);
}

    return(
        <div>
            <div className="pagination-header">
                <div><b>ID</b></div>
                <div><b>Nombre</b></div>
                <div><b>Correo Electonico</b></div>
                <div><b>Genro</b></div>
                <div><b></b></div>
            </div>
            {
               props.data.map(data=>{
                return(
                    <div className='home_pagination-container-tr' key={data.id}>
                        <div>{data.id}</div>
                        <div>{data.nombre} {data.primerApellido} {data.segundoAppelido}</div>
                        <div>{data.correoElectronico}</div>
                        <div>{data.genera}</div>
                        <div><button onClick={()=> handleDelete(data.id, data.nombre)}><i className='bx bxs-trash-alt'></i></button></div>
                    </div>

                )
               })
                
            }

        </div>
    )
}

export default PaginationPage ;