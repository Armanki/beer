import React, {useMemo} from "react";
import style from "./Header.module.scss";
import Search from "../sherd/Search/Search";
import {Link, useLocation} from "react-router-dom";
import Globe from "../../Preloader/globe";
import i18next from "i18next";
import cookies from "js-cookie";
import {useTranslation} from "react-i18next";



const Header = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const {t} = useTranslation()
    const location = useLocation()
    const isSinglePage = useMemo(() =>  !location?.pathname?.includes("singleBeer"),[location]);
    const isFavoritePage = useMemo(() => !location?.pathname?.includes("favorites"), [location]);

    const languages = [
        {
            code: 'fr',
            name: 'Français',
            country_code: 'fr'
        },
        {
            code: 'us',
            name: 'English',
            country_code: 'gb'
        },
        {
            code: 'ru',
            name: 'Русский',
            country_code: 'ru'
        },
        {
            code: 'am',
            name: 'Հայաստան',
            country_code: 'am'
        },
    ]

    return (
        <div className={style.header}>
            <div className="d-flex justify-content-end">
                <div className="dropdown">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                        <Globe/>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <span className="dropdown-item-text">{t('language')}</span>
                        </li>
                        {languages.map(({code, name, country_code}) => (
                            <li key={country_code}>
                                <button className="dropdown-item"
                                        onClick={() => i18next.changeLanguage(code)}
                                        disabled={code === currentLanguageCode}
                                >
                                  <span className={`flag-icon flag-icon-${country_code} mx-3`}
                                        style={{opacity: code === currentLanguageCode ? 0.5 : 1}}
                                  > </span>
                                    {name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={style.homeFavorite}>
                <Link to={`/home`} className={style.link}>{t("home")}</Link>
                <Link to={`/favorites`} className={style.link}>{t("favorite")}</Link>
            </div>
            <div className={style.beerBank}>
                <h1 className={style.beer}>{t("The_Beer_Bank")}</h1>
                <p className={style.text}>{t("Find_your_favorite_beer_here")}</p>
                {isSinglePage &&  isFavoritePage && <Search/>}
            </div>
        </div>
    )
}

export default Header;