type PersonType = {
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
}

export interface PersonsInterface{
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
}




export default PersonType;