import Header from "../components/Header";
import Footer from "../components/Footer";
import AleatoireRecette from "../components/AleatoireRecette";
import PresentationRecette from "../components/PresentationRecette";


import {Link} from "react-router-dom";


const Home = () => {

    return(
        <div>
            <Header/>
            <AleatoireRecette />
            <PresentationRecette />
            <Link to={"/recettes/"}>
                <button>Voir +</button>
            </Link>
            <Link to={"/categories/"}>
                <button>Catégories</button>
            </Link>
            <Footer/>
        </div>
    )
}

export default Home;