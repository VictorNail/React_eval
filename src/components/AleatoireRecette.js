import { useState ,useEffect } from 'react';
import ShowRecettes from "../components/ShowRecettes";


const AleatoireRecette = () => {
 
    const [recetteData, setRecetteData] = useState(null);

    useEffect(() =>{
        (async () => {
            const recetteResponse = await fetch("https://www.themealdb.com/api/json/v1/1/random.php", {header: {'content-type': 'application/json'}});
            const recetteRandomData = await recetteResponse.json();
            setRecetteData(recetteRandomData.meals);
        })();
    },[]);

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

export default AleatoireRecette;
