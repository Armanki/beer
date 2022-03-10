import './App.css';
import React, {useEffect} from "react";
import Layout from "./containers/Leyout/Leyout";
import {Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import SingleBeerPage from "./pages/SingleBeerPage/SingleBeerPage";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useSelector} from "react-redux";
import Favorite from "./pages/Favorite/Favorite";


function App() {

    const {error} = useSelector((state) => state.beerReducer);

    useEffect(() => {
        if (error) {
            toast.error(error, {position: toast.POSITION.BOTTOM_LEFT, autoClose: false})
        }
    }, [error])



    return (
        <div>
            <Layout>
                <Route path="/home" component={Home} exact/>
                <Route path="/singleBeer/:id" component={SingleBeerPage} exact/>
                <Route path="/favorites" component={Favorite} exact/>
            </Layout>
            <ToastContainer position="bottom-center"/>
        </div>
    );
}

export default App;
