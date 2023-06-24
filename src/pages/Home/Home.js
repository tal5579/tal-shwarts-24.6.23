import React from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";
import Search from "../../components/Search/Search";

const Home = () => {
    const mockDate = [
        {
            id: 0,
            day: "Sun",
            degree: "30C"
        },
        {
            id: 1,
            day: "Mon",
            degree: "31C"
        },
        {
            id: 2,
            day: "Tue",
            degree: "32C"
        },
        {
            id: 3,
            day: "Wed",
            degree: "33C"
        },
        {
            id: 4,
            day: "Thu",
            degree: "34C"
        },
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <Search />
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__top}>
                        <div className={styles.weather__section__top__left}>
                            <img src={"/images/rain.png"} alt={"Weather"}/>
                            <div className={styles.weather__section_description}>
                                <div>Tel Aviv</div>
                                <div>30</div>
                            </div>
                        </div>
                        <div className={styles.weather__section__top__right}>
                            <button>
                                Add to favourites
                            </button>
                        </div>
                    </div>
                    <div className={styles.weather__section__center}>
                        {
                            mockDate.map(({id, day, degree }) => {
                                return (
                                    <div key={id} className={styles.weather__section__center__card}>
                                        <div>
                                            {day}
                                        </div>
                                        <div>
                                            {degree}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;