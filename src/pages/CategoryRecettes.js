import Header from "../components/Header";
import Footer from "../components/Footer";
import AfficherCategory from "../components/AfficherCategory";
import { useParams } from 'react-router-dom';
import { useState ,useEffect } from 'react';

const CategoryRecettes = () => {

    const [categoryData, setCategoryData] = useState(null);

    useEffect(() =>{
        (async () => {
            const categorieResponse = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list", {header: {'content-type': 'application/json'}});
            const categorieRandomData = await categorieResponse.json();
            setCategoryData(categorieRandomData.meals);
        })();
    },[]);

    return(
        <>
            <Header/>
            <AfficherCategory categories={categoryData}/>
            <Footer/>
        </>
    );
}

export default CategoryRecettes;

