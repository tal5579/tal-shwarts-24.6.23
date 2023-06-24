import React, {useEffect} from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";
import Search from "../../components/Search/Search";
import axios from "../../utils/api/api";
import {useDispatch} from "react-redux";
import {useAppData} from "../../redux/selectors/selectors";
import {actions} from "../../redux/actions/actions";
import {weekDay} from "../../utils/common";

const Home = () => {
    const { currentLocationKey, currentDailyForecast , currentConditions } = useAppData();
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentLocationKey) {
            const config = {
                params: {
                    details: false,
                    metric: false
                }
            }
            axios.get(`forecasts/v1/daily/5day/${currentLocationKey}`, config)
                .then(res => {
                    dispatch({
                        type: actions.SetDailyForecast,
                        payload: res.data?.DailyForecasts
                    });
                })
        }
    }, [currentLocationKey]);

    useEffect(() => {
        if (currentLocationKey) {
            const config = {
                params: {
                    details: true,
                }
            }
            axios.get(`currentconditions/v1/${currentLocationKey}`, config)
                .then((res) => {
                    dispatch({
                            type: actions.SetCurrentConditions,
                            payload: res.data[0]
                        });
                })
        }
    }, [currentLocationKey]);

    return (
        <Layout>
            <div className={styles.container}>
                <Search />
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__top}>
                        <div className={styles.weather__section__top__left}>
                            <img src={"/images/rain.png"} alt={"Weather"}/>
                            <div className={styles.weather__section_description}>
                                <div>{currentConditions?.Temperature?.Metric?.Value + currentConditions?.Temperature?.Metric?.Unit}</div>
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
                            currentDailyForecast?.map(({Date: dailyDate, Temperature}) => {
                                const selectedDay = weekDay[new Date(dailyDate).getDay()]
                                const minimumTemperature = `${Temperature.Minimum.Value + Temperature.Minimum.Unit}`;
                                const maximumTemperature = `${Temperature.Maximum.Value + Temperature.Maximum.Unit}`;
                                return (
                                    <div key={213123} className={styles.weather__section__center__card}>
                                        <div>
                                            {selectedDay}
                                        </div>
                                        <div>
                                            Min: {minimumTemperature}
                                        </div>
                                        <div>
                                            Max: {maximumTemperature}
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