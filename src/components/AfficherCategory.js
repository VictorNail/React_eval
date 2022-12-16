import {Link} from "react-router-dom";
import "../styles/showCategory.css";


const AfficherCategory = (props) => {

    return(
        <div id="principal">
            {props.categories && props.categories.map((category) => {
                return (
                    <div>
                        <Link to={"/recettes/c/"+category.strCategory}>
                            <button>{category.strCategory}</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default AfficherCategory;

