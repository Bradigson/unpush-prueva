
import '../assets/styles/PagesNumber.scss';

type Data = {
    data:{
        userId: number;
        id: number;
        title: string;
        body: string;
    }[]
}


interface Propss{
    totalPost : number,
    postPerPage : number,
    setCurrentPage : React.Dispatch<number>

}

const PagesNumbers = ({totalPost, postPerPage, setCurrentPage} : Propss)=>{
    let pages = [];

    for(let i = 1; i<= Math.ceil(totalPost/postPerPage );i++){
        pages.push(i);
    }
    return (
        <div className='numbers-container'>
            {
                pages.map((pages, index)=>{
                    return(
                        <button key={index} onClick={()=> setCurrentPage(pages) }>{pages}</button>
                    )
                })
            }

        </div>
    
    )
}


export default PagesNumbers;