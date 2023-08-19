import classNames from "classnames";
import React, {ReactNode} from 'react';
import Header from "../Header/Header";
import styles from './Layout.module.scss';

interface Props {
  children?: ReactNode
}

const Layout:React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={classNames(styles.container, "container")}>
          {children}
        </div>
      </main>
    </>
  )
}
export default Layout;