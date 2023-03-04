
import {useState, useEffect} from 'react';
import Header from './Header';
import '../assets/styles/Home.scss';
import { PersonsInterface } from '../redux/Models';
import { useAppSelector, useAppDispatch } from '../redux/Store';
import { deletePerson } from '../redux/Slice';
import { handleDeleteAlert } from '../UX/Alerts';
import PaginationPage from './PaginationPage';
import PagesNumbers from './PagesNumbers';

const Home = ()=>{
    

    const person = useAppSelector(state=> state.form.persons);
    const dispatch = useAppDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(5);



    const handleDelete = (id:any, name : string):void =>{
        dispatch(deletePerson(id));
        handleDeleteAlert(name);
    }


    const lastPointIndex = currentPage * postPerPage;
    const firstPostIndex = lastPointIndex - postPerPage;
    const currentPost = person.slice(firstPostIndex, lastPointIndex)


    

    return (
        <div className='home'>
            <Header/>
            <div className='home_pagination-container'>
                <PaginationPage data={currentPost}/>
                <PagesNumbers totalPost={person.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage}/>
            </div>
        </div>
    )
}


export default Home;