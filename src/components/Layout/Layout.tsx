import classNames from "classnames";
import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface Props {
  children?: ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
  return (
    <>
      <header>header</header>
      <main className={styles.main}>
        <div className={classNames(styles.container, "container")}>
          {children}
        </div>
      </main>
      <footer>footer</footer>
    </>
  )
}
export default Layout;