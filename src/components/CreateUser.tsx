import { useState, useEffect } from "react";


const CreateUser = ()=>{


    interface users {
        name : string,
        edad : string
    }

    const [add, setAdd] = useState<Array<users>>([]);
    const [state, setState] = useState<users>({
        name : "jose",
        edad : "23"
    });


    const handleSubmit = ()=>{

        setAdd([...add, state]);
    }


    useEffect(()=>{
        localStorage.setItem('list', JSON.stringify(add));
    },[add])
    return (
        <div>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}


export default CreateUser;