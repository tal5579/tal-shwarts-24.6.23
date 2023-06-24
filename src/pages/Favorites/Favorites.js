import React from 'react';
import styles from "./Favorites.module.scss";
import Layout from "../../components/Layout/Layout";

const Favorites = () => {
    const mockDate = [
        {
            id: 0,
            city: "Tel Aviv",
            degree: "30C",
            situation: "Cloudy",
        },
        {
            id: 1,
            city: "London",
            degree: "20C",
            situation: "Sunny",
        },
        {
            id: 2,
            city: "Berlin",
            degree: "10C",
            situation: "Hoze",
        },
        {
            id: 3,
            city: "Los Angeles",
            degree: "35C",
            situation: "Sunny",
        },
        {
            id: 4,
            city: "Madrid",
            degree: "23C",
            situation: "Cloudy",
        },
    ];
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__center}>
                        {
                            mockDate.map(({id, city, degree, situation }) => {
                                return (
                                    <div key={id} className={styles.weather__section__center__card}>
                                        <div className={styles.weather__section__center__card_top}>
                                            <div>{city}</div>
                                            <div>{degree}</div>
                                        </div>
                                        <div className={styles.weather__section__center__card_center}>
                                            {situation}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Favorites;