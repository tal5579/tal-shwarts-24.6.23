import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useAppData} from "../../redux/selectors/selectors";
import {actions} from "../../redux/actions/actions";

const Header = (props) => {
    const dispatch = useDispatch();
    const { siteLightTheme } = useAppData();
    const toggleTheme = () => {
        dispatch(
            {
                type: actions.SetSiteLightTheme,
                payload: !siteLightTheme
            }
        );
    }
    return (
        <div className={styles.container}>
            <div className={styles.title__section}>
                <div>
                    Weather APP
                </div>
                <button onClick={toggleTheme}>
                    Toggle Theme
                </button>
            </div>
            <div className={styles.button__section}>
                <Link to="/">
                    <button>
                        Home
                    </button>
                </Link>
                <Link to="/favorites">
                    <button>
                        Favorites
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Header;