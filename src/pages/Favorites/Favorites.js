import React, {useEffect, useState} from 'react';
import styles from "./Favorites.module.scss";
import Layout from "../../components/Layout/Layout";

const Favorites = () => {
    const [favorites, setFavorites] = useState( []);

    useEffect(() => {
        const favoritesData = JSON.parse(localStorage.getItem('favorites'));
        if(favoritesData) {
            setFavorites(favoritesData);
        }
    }, [])

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__center}>
                        {
                            favorites.length ? (
                                favorites.map(({id, name, currentWeather }) => {
                                    return (
                                        <div key={id} className={styles.weather__section__center__card}>
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