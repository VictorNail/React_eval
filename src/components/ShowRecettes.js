import "../styles/showRecettes.css";
import {Link} from "react-router-dom";


const ShowRecettes= (props) => {

    return(
        <div id="listRecette">
            {props.recettes ? (props.recettes.map((recette) => {
                return (
                    <Link to={"/detail/"+recette.idMeal}>
                        <div id="miniRecette">
                            <h1>{recette.strMeal}</h1>
                            <h2> {recette.strCategory}</h2>
                            <img src={recette.strMealThumb} alt={recette.strMeal}></img>
                        </div>
                    </Link>
                )
            })
            ):(
                <p>Aucune recette trouver</p>
            )}
        </div>
    );
}

export default ShowRecettes;