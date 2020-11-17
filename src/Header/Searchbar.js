import React from 'react';
import './Header.css';
import Search from "../Pages/Search/Search";

const Searchbar = () =>{

    return (
        <div className="searching">
            <div className="icon">
                <i class="fas fa-search"></i>
            </div>
            <Search/>
        </div>
    )
}
export default Searchbar;

