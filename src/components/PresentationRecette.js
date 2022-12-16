import ShowRecettes from "../components/ShowRecettes";
import { useState ,useEffect } from 'react';

const PresentationRecette = () => {

    const [recetteData, setRecetteData] = useState([]);

    useEffect(() =>{
        (async () => {
                const recetteResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`, {header: {'content-type': 'application/json'}});
                let recetteResponseData = await recetteResponse.json();
                setRecetteData(recetteResponseData.meals.slice(0,3));
        })();
    },[])

    return(
       <div>
            {recetteData ? (
                <ShowRecettes recettes={recetteData} />
            ): (
                <h1>En Chargement</h1>
            )}
        </div>
    );
}

export default PresentationRecette;

