import React,{useLayoutEffect} from "react";
import Header from "../Header/Header";
import {useTranslation} from "react-i18next";

const languageColor = {
    fr: "blue",
    am: "orange",
    ru: "red",
    us: "green"
}

const Layout = ({children}) => {
    const {i18n} = useTranslation()
    useLayoutEffect(()=>{
        const {style} = document.documentElement
        style.setProperty("--PROJECT_COLOR",languageColor[i18n.language] );
    },[i18n.language])

    return (
        <>
            <div>
                <Header/>
            </div>
            <main>{children}</main>
        </>
    )
}
export default Layout;