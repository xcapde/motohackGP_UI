import Logo from '../../images/logo1.png'
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { motoServices } from '../../data_API/motoServices';
import { SearchList } from '../searchList/SearchList';

export function Navbar(){

    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSerachValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const pathname = useLocation().pathname;


    const getSearchData = (value) => {
        motoServices.getMotosBySearch(value).then(res => {
            if(res) setSearchList(res)
        })
    }
    
    const onInputChange=(e)=>{
        const value = e.target.value;
        setSerachValue(value);
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        getSearchData(searchValue.toLowerCase().trim());
        setShowSearch(true);
    }


    return (
        <nav className='navbar_ctn'>
            {showSearch? <SearchList searchList={searchList} setShowSearch={setShowSearch}/> : ''}
            
            <Link to="/">
                <img className='logo' src={Logo} alt=""/>
            </Link>
            
            <form onSubmit={onHandleSubmit} className="topnav">
                <input onChange={onInputChange} value={searchValue ||''} type="text" placeholder="Search.."/>
                <button type='submit' className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            <div className='button_ctn'>
                <Link to={`/favorites/`}>
                    <button className={pathname.includes('/favorites')? "navbar_menu actived" : "navbar_menu"}>MY FAVORITES</button>
                </Link>
                <button className={pathname.includes('/register')? "navbar_menu actived" : "navbar_menu"}>LOG IN</button>                
            </div>        
        </nav>
    )
}
