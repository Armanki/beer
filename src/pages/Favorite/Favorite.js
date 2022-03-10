import Cards from "../Cards/Cards";
import {useEffect} from "react";


const Favorite=()=>{

    useEffect(()=> {
        let favorites = JSON.parse(localStorage.getItem('favorites'));
        localStorage.setItem('favorites', JSON.stringify(favorites || []));
    },[])

    return (
        <div >

            <Cards list={JSON.parse(localStorage.getItem('favorites'))} type="beers"/>

        </div>
    )
}
export default Favorite;