import React from 'react';
import styles from './Layout.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
    const {children} = props;

    return (
        <div className={styles.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;