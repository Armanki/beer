import React, {useCallback, useEffect, useState} from "react";
import styles from "./Search.module.scss"
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {getBeerRequest} from "../../../redux/action-creaters/beerActionCreators";
import {useTranslation} from "react-i18next";

const urlParams = (url) => {
    const params = {}
    if (url.indexOf("?") !== -1) {
        const arr = url.slice(1).split('&')
        for (let i = 0; i < arr.length; i++) {
            let el = arr[i].split("=")
            params[el[0]] = el[1]
        }
    }
    return params
}

const Search = () => {
    const {t} = useTranslation()
    const {search} = useLocation();
    const params = urlParams(search);
    const history = useHistory()
    const [inputValue, setInputValue] = useState(params?.value || "")
    const dispatch = useDispatch()

    useEffect(() => {
        if(params.value){
            dispatch(getBeerRequest(params.value, params.page || 1 ))
        }
    },[params?.value,params?.page])

    const handleKeyUp = useCallback((e)=> {
        if (e.key === 'Enter' ) {
            history.push(`/home?value=${e.target.value}&page=1`)
        }
    },[])

    return (
        <div>
            <input onKeyUp={handleKeyUp} type="text" className={styles.input}
                   placeholder={t("Search_for_beer_name")} value={inputValue}
                   onChange={(e) => setInputValue(e.target.value)}/>
        </div>
    )
}


export default Search;