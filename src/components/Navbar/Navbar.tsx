import classNames from "classnames";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import styles from "./Navbar.module.scss";

interface NavItem {
  label: string;
  link: string;
  subItems?: string[];
}

const Navbar = () => {
  const navItemRef = useRef<HTMLLIElement>(null);
  const [isSubNavOpen, setSubNavOpen] = useDetectOutsideClick(navItemRef, false);

  const toggleSubNav = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.stopPropagation();
    setSubNavOpen(!isSubNavOpen);
  };

  const navItems: NavItem[] = [
    {label: "News", link: "/"},
    {
      label: "Categories",
      link: "/#",
      subItems: ["Politics", "Technology", "Entertainment"],
    },
    {label: "About", link: "/about"},
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {
          navItems.map(({link, label, subItems}) => (
            <li ref={navItemRef} key={label} className={styles.navItem}>
              <NavLink to={link} onClick={subItems ? toggleSubNav : undefined}>
                {label}
                {subItems && <span className={classNames(styles.arrow, {[styles.arrowOpen]: isSubNavOpen})} />}
              </NavLink>
              {
                subItems && (
                  <ul className={
                    classNames(styles.subNavList, {[styles.subNavListOpen]: isSubNavOpen})
                  }>
                    {
                      subItems.map((item) => (
                        <li key={item} className={styles.subNavItem}>
                          <NavLink to={`/${item.toLowerCase()}`}>
                            {item}
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                )
              }
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar;