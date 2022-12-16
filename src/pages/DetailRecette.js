import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from 'react-router-dom';
import { useState  } from 'react';
import "../styles/detail.css";


const DetailRecette = () => {

    const {id} = useParams();
    const [RecetteData, setRecetteData] = useState([]);

 
    (async () => {
        const recetteResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const recettesResponseData = await recetteResponse.json();
        setRecetteData(recettesResponseData.meals[0]);
    })();
    
    const getIngredient = () => {
        const ingredients =[];
        for (let i=1; i <= 15; i++){
            if(RecetteData[`strIngredient${i}`]){
                ingredients.push(RecetteData[`strIngredient${i}`]);
            }
        }
        return ingredients;
    }
    return(
        <>
            <Header />
            <div id="core">
                <h1 id="titre1">{RecetteData.strMeal}</h1>
                <h2 id="titre2">{RecetteData.strCategory}</h2>
                <p id="instr">{RecetteData.strInstructions}</p>
                {getIngredient().map((ingredient,index)=> {
                    return (
                        <div key={index}>
                            <p>{ingredient}</p>
                        </div>
                    )
                })}
                <img src={RecetteData.strMealThumb} alt={RecetteData.strMeal}></img>
            </div>
            <Footer/>
        </>
    );
}

export default DetailRecette;

