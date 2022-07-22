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
                <div className='logoAndSlogan'>
                    <img className='logo' src={Logo} alt=""/>
                    <p className='slogan'>Brrrrrum your body!</p>
                </div>
            </Link>
            
            <form onSubmit={onHandleSubmit} className="topnav">
                <input onChange={onInputChange} value={searchValue ||''} type="text" placeholder="Search.."/>
                <button type='submit' className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            <div className='button_ctn'>
        
                <Link to={`/favorites/`}>
                    <button className={pathname.includes('/favorites')? "navbar_menu actived" : "navbar_menu"}>MY FAVORITES</button>
                    <button className={pathname.includes('/favorites')? "favList_btn mobile actived" : "favList_btn mobile"}><i className="fa-solid fa-star"></i></button>
                </Link>
                <Link to={`/login/`}>
                    <button className={pathname.includes('/login')? "navbar_menu actived" : "navbar_menu"}>LOG IN</button> 
                    <button className={pathname.includes('/login')? "log_btn mobile actived" : "log_btn mobile"}><i className="fa-solid fa-circle-user"></i></button> 
                </Link>
                
            </div>        
        </nav>
    )
}
