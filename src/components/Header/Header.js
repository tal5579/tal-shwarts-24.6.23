import React from 'react';
import styles from './Header.module.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title__section}>
                This is Weather APP
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