import React, {useState} from "react";
import styles from "./Cards.module.scss";
import {Link} from "react-router-dom";
import Star from "../../Preloader/Star";


const Cards = ({list, isRandom = false}) => {

  const [isLocaleChanged, setIsLocaleChanged] = useState(false)
    const favorites = JSON.parse(localStorage.getItem('favorites'));
    const onStarClick = item => {
        let newFavoritesList;
        const isHaveItem = favorites.some(el => el?.id === item.id)
        if(isHaveItem) {
            newFavoritesList = favorites.filter(el => el.id !== item.id)
        }else{
            newFavoritesList = [item,...favorites]
        }
        localStorage.setItem('favorites', JSON.stringify(newFavoritesList));
        setIsLocaleChanged(!isLocaleChanged)
    }

    return (
        <div className={styles.beer}>
            {list.map(item => (
            <div className={styles.cards} key={item.id}>
                <Star onStarClick={onStarClick}
                      className={`${styles.star} ${favorites.some(el => el.id === item.id) && styles.active}`}
                      item={item}

                />
                <Link to={`/singleBeer/${item.id}`}>
                    <img src={item.image_url} className={styles.img} alt="noPicture"/>
                </Link>
                <p className={styles.name}>{item.name}</p>
                {!isRandom && <p className={styles.tagline}>{item.tagline}</p>}

            </div>
        ))}
        </div>
    )
}

export default Cards;