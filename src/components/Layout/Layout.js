import React from 'react';
import styles from './Layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import clsx from "clsx";
import {useAppData} from "../../redux/selectors/selectors";

const Layout = (props) => {
    const {children} = props;
    const { siteLightTheme } = useAppData();

    return (
        <div className={clsx(styles.container, siteLightTheme ? styles.light : styles.dark)}>
            <Header/>
            {children}
            <Footer />
        </div>
    )
}

export default Layout;