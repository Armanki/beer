import React, {useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneBeerRequest} from "../../redux/action-creaters/oneBeerActionCreators";
import style from "./SingleBeerPage.module.scss";
import Preloader from "../../Preloader/loading.gif"
import Cards from "../Cards/Cards";
import {getRandomBeerRequest} from "../../redux/action-creaters/randomActionCreators";
import {useTranslation} from "react-i18next";

const SingleBeerPage = () => {
    const {t} = useTranslation()
    const history = useHistory()
    const routeChange = () => {
        history.goBack()
    };
    const params = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        if (params.id) {
            dispatch(getOneBeerRequest(params.id || 1))
        }
    }, [params?.id])

    const beer = useSelector((state) => state.beerReducer)
    const error = useSelector((state) => state.beerReducer)

    useEffect(() => {
        dispatch(getRandomBeerRequest())
        dispatch(getRandomBeerRequest())
        dispatch(getRandomBeerRequest())
    }, [params?.id]);

    if (error.error) {
        return (
            <div>
                <button type="button" onClick={routeChange} className={style.but}>GO BACK</button>
            </div>
        )
    } else if (!beer.beer) {
        return (
            <div>
                <img src={Preloader} alt="loading" className={style.img}/>
            </div>
        )
    }

    return (
        <>
            <button type="button" onClick={routeChange} className={style.but}>{t("GO_BACK")}</button>
            <div className={style.beerName}>
                <img className={style.beerImg} src={beer.beer.image_url}/>
                <div className={style.text}>
                    <h2 className={style.name}>{beer.beer.name}</h2>
                    <p className={style.pText}>{beer.beer.tagline}</p>
                    <div className={style.spa}>
                        <span>
                            <b>IBU:</b>
                            {beer.beer.ibu}
                        </span>
                        <span>
                            <b>ABV:</b>
                            {beer.beer.abv}
                        </span>
                        <span>
                            <b>EBC:</b>
                            {beer.beer.ebc}
                        </span>
                    </div>
                    <p className={style.description}>{beer.beer.description}</p>
                    <div>
                        <h3 className={style.h}>
                            <b>{t("Best_served_width")}:</b>
                        </h3>
                        <ul>
                            {beer.beer.food_pairing.map(ing => {
                                return <li key={ing}>{ing}</li>
                            })}
                        </ul>
                    </div>
                </div>

            </div>
            <div>
                <Cards list={beer.random} isRandom={true}/>
            </div>
        </>
    )
}

export default SingleBeerPage;