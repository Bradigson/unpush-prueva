import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import PersonType from "./Models";


export interface Persons{
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


interface PersonState{
    persons:Persons[];
}


const initialState : PersonState = {
    persons:[],
}




export const PersonsSlice = createSlice({
    name : 'form',
    initialState,
    reducers:{
        createPerson:(state, action:PayloadAction<PersonType>)=>{
            state.persons.push(action.payload);
            console.log(action.payload);
        },
        deletePerson:(state, action)=>{
            const personfound = state.persons.find(person=> person.id == action.payload);


            console.log(personfound)
            if(personfound){
                state.persons.splice(state.persons.indexOf(personfound), 1);
            }

        }
    }
});


export const {createPerson, deletePerson} = PersonsSlice.actions;
export default PersonsSlice.reducer;