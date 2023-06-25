import React, {useEffect} from 'react';
import Layout from "../../components/Layout/Layout";
import styles from "./Home.module.scss";
import Search from "../../components/Search/Search";
import axios from "../../utils/api/api";
import {useDispatch} from "react-redux";
import {useAppData} from "../../redux/selectors/selectors";
import {actions} from "../../redux/actions/actions";
import {weekDay} from "../../utils/common";
import {isEmpty} from "loadsh/lang";
import { toast } from 'react-toastify';

const Home = () => {
    const { currentLocationKey, currentLocationName, currentDailyForecast , currentConditions } = useAppData();
    const dispatch = useDispatch();

    useEffect(() => {
        const config = {
            params: {
                details: true,
                metric: true
            }
        }
        axios.get(`forecasts/v1/daily/5day/${currentLocationKey}`, config)
            .then(res => {
                dispatch({
                    type: actions.SetDailyForecast,
                    payload: res?.data?.DailyForecasts
                });
            })
            .catch(err => {
                toast(`Something wrong happend: ${err.message}`)
            });
    }, [currentLocationKey, dispatch]);

    useEffect(() => {
        const config = {
            params: {
                details: true,
            }
        }
        axios.get(`currentconditions/v1/${currentLocationKey}`, config)
            .then((res) => {
                dispatch({
                    type: actions.SetCurrentConditions,
                    payload: res.data[0],
                });
            })
            .catch(err => {
                toast(`Something wrong happend: ${err.message}`)
            });
    }, [currentLocationKey, dispatch]);

    const addOrRemoveFromFavorites = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const objWithIdIndex = favorites.findIndex((obj) => obj.id === currentLocationKey);

        if (objWithIdIndex > -1) {
            favorites.splice(objWithIdIndex, 1);
        }
        else {
            const favoriteData = {
                id: currentLocationKey,
                name: currentLocationName,
                currentWeather: !isEmpty(currentConditions) ?
                    currentConditions?.Temperature?.Metric?.Value + currentConditions?.Temperature?.Metric?.Unit :
                    "20C",
            };
            favorites.push(favoriteData);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

    return (
        <Layout>
            <div className={styles.container}>
                <Search />
                <div className={styles.weather__section}>
                    <div className={styles.weather__section__top}>
                        <div className={styles.weather__section__top__left}>
                            <div className={styles.weather__section_description}>
                                <div>{currentLocationName}</div>
                                <div>
                                    {!isEmpty(currentConditions) ?
                                        currentConditions?.Temperature?.Metric?.Value + currentConditions?.Temperature?.Metric?.Unit
                                        : "No current condition data"
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={styles.weather__section__top__right}>
                            <button onClick={addOrRemoveFromFavorites}>
                                Add / Remove
                            </button>
                        </div>
                    </div>
                    <div className={styles.weather__section__center}>
                        { currentDailyForecast.length ? (
                            currentDailyForecast?.map(({Date: dailyDate, Temperature}) => {
                                const selectedDay = weekDay[new Date(dailyDate).getDay()]
                                const minimumTemperature = `${Temperature.Minimum.Value + Temperature.Minimum.Unit}`;
                                const maximumTemperature = `${Temperature.Maximum.Value + Temperature.Maximum.Unit}`;
                                return (
                                    <div key={dailyDate} className={styles.weather__section__center__card}>
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
                        ) : (
                            <div>
                                No Daily forecasts
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Home;