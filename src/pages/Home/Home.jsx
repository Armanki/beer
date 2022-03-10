import React, {useEffect} from "react";
import Cards from "../Cards/Cards";
import {useSelector} from "react-redux";

const Home = () => {


    const {beers} = useSelector((state) => state.beerReducer)

    return (
        <div >
            <Cards list={beers} />
        </div>
    )
}

export default Home;