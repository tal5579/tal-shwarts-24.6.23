import React, {useEffect, useState} from 'react';
import styles from "./Favorites.module.scss";
import Layout from "../../components/Layout/Layout";
import {actions} from "../../redux/actions/actions";
import {useDispatch} from "react-redux";

const Favorites = () => {
    const [favorites, setFavorites] = useState( []);
    const dispatch = useDispatch();

    useEffect(() => {
        const favoritesData = JSON.parse(localStorage.getItem('favorites'));
        if(favoritesData) {
            setFavorites(favoritesData);
        }
    }, []);

    const handleClickOnFavorite = (locationId, locationName) => {
        dispatch({type: actions.SetLocationKey, payload: locationId});
        dispatch({type: actions.SetLocationName, payload: locationName});
        window.location.href = "/tal-shwarts-24.6.23";
    }

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__center}>
                        {
                            favorites.length ? (
                                favorites.map(({id, name, currentWeather }) => {
                                    return (
                                        <div key={id} className={styles.weather__section__center__card} onClick={() => handleClickOnFavorite(id, name)}>
                                            <div className={styles.weather__section__center__card_top}>
                                                <div>{name}</div>
                                                <div>{currentWeather}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div>
                                    No Favorites at this moment
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Favorites;