import alertsubmit from 'sweetalert2';


const handleSubmitError = (error:any)=>{
    alertsubmit.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error}`,
        confirmButtonColor:'#655DBB'
      })
}



const handleDeleteAlert = (id:string)=>{

    alertsubmit.fire({
        icon: 'success',
        text: `Has eliminado el usuario ${id}`,
        showConfirmButton: false,
        timer: 1500
      })
    

}




const handleUserCreated = (name:string)=>{
    alertsubmit.fire({
        icon: 'success',
        text: `Has agregado el usuario ${name}`,
        showConfirmButton: false,
        timer: 1500
      })
}



const handleLoginUser = (message:string)=>{
    alertsubmit.fire({
        icon: 'error',
        text: ` ${message}`,
        showConfirmButton: true
      })
}

export{
    handleSubmitError,
    handleDeleteAlert,
    handleUserCreated,
    handleLoginUser
}