"use client";

import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

function Layout({ children }) {

  return (
    <div className={styles.container}>
        <Header />
        <div className={styles.container}>{children}</div>
        <Footer />
    </div>
  );
}

export default Layout;
