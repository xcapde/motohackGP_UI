import Logo from '../../images/logo1.png'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { motoServices } from '../../data_API/motoServices';
import { SearchList } from '../searchList/SearchList';

export function Navbar(){

    const [searchList, setSearchList] = useState([]);
    const [searchValue, setSerachValue] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const getSearchData = (value) => {
        motoServices.getMotosBySearch(value).then(res => {
            if(res) setSearchList(res)
        })
    }
    
    const onInputChange=(e)=>{
        const value = e.target.value;
        setSerachValue(value);

        if(value.lenght === 0){
            setSearchList([]);
        } else if(value.lenght > 2){
            getSearchData(searchValue.toLowerCase().trim());
        }
    }

    const onHandleSubmit=(e)=>{
        e.preventDefault();
        getSearchData(searchValue.toLowerCase().trim());
        setShowSearch(true);
    }


    return (
        <nav className='navbar_ctn'>
            {showSearch? <SearchList searchList={searchList} setShowSearch={setShowSearch}/> : ''}
            
            <img src={Logo} alt=""/>
            
            <form onSubmit={onHandleSubmit} className="topnav">
                <input onChange={onInputChange} value={searchValue ||''} type="text" placeholder="Search.."/>
                <button type='submit' className='search_btn'><i className="fa-solid fa-magnifying-glass"></i></button>
            </form>
            
            <div className='button_ctn'>
                <button className="navbar_register">Register</button>                
                <Link to={`/favorites/`}>
                    <button className='navbar_favlist_button'>FavList</button>
                </Link>
            </div>        
        </nav>
    )
}
