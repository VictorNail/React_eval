import HeaderForm from "./HeaderForm";
import {Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";


const Header = () =>{   

    const navigate = useNavigate();

    const handleSumit = async (event) =>{
        event.preventDefault();
        const searchValue = event.target.search.value;
        navigate("/recettes/"+searchValue);
    }
    
    return(
        <header>
           <Link to={"/"} style={{ textDecoration: "none" }} ><h1> Mami-Thon</h1></Link>
            <HeaderForm formCallback={handleSumit}/>
        </header>
    )
}

export default Header;