import Header from "../components/Header";
import Footer from "../components/Footer";
import ShowRecettes from "../components/ShowRecettes";
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const AfficherRecettes = () => {

    const {nom} = useParams();
    const {category} = useParams();
    const [recetteData, setRecetteData] = useState([]);

    useEffect(() =>{
        (async () => {
            if(nom){
                const recetteResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${nom}`, {header: {'content-type': 'application/json'}});
                const recetteResponseData = await recetteResponse.json();
                console.log(recetteResponseData.meals);
                setRecetteData(recetteResponseData.meals);
            }
            else if(category){ 
                const recetteResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`, {header: {'content-type': 'application/json'}});
                const recetteResponseData = await recetteResponse.json();
                console.log(recetteResponseData.meals);
                setRecetteData(recetteResponseData.meals);
            }
            else{
                const recetteResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, {header: {'content-type': 'application/json'}});
                const recetteResponseData = await recetteResponse.json();
                console.log(recetteResponseData.meals);
                setRecetteData(recetteResponseData.meals);
            }
        })();
    },[nom])

    return(
        <>
            <Header/>
            {category && <h1 id="categoryName">{category}</h1>} 
            <ShowRecettes recettes={recetteData} />
            <Footer/>
        </>
    );
}

export default AfficherRecettes;

// if id !== null then if cat !== null et autrement on appelle api et affiche