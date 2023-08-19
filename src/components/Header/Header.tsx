import classNames from "classnames";
import React from 'react';
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={classNames(styles.container, "container")}>
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;