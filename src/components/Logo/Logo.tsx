import { NavLink } from "react-router-dom";
import styles from "./Logo.module.scss"

const Logo = () => {
  return (
    <NavLink className={styles.logo} to={"/"}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587 310" width={60} height={40}><title id="brand-title">GQ</title>
        <path
          d="M544.4,245.7c0,0,28.7-37.4,28.8-86.2c0.2-95.8-66.9-158-160.4-158.1c-54.2-0.1-100.2,26.3-128.1,65c0,0,0,0,0,0 c-1-1.4-2-2.7-3-4.1C258.4,31.4,218.1,0.1,155.6,0C82.1-0.1,25.3,49.1,6.6,109.2c-0.2,0.7-0.4,1.5-0.6,2.2c0,0,0,0.1,0,0.1 C2.1,125,0,139.2,0,153.9c0.1,14,2,27.5,5.3,40.2c11.8,43.9,42.5,80.1,83,99.6c0.3,0.1,0.6,0.3,1,0.5c0.2,0.1,0.4,0.2,0.6,0.3 c20.4,9.3,43.3,14.5,67.7,14.6c51.6-0.4,97.3-25.7,125.5-64.4c0.6-0.8,1.1-1.6,1.7-2.4c0,0,0,0,0,0C312,281.5,357.2,310,413.3,310 c37.2,0,63.5-15.9,68.3-18.4l9.9,13h95.3L544.4,245.7z M156.7,224.1c-33.3,0-71.1-26.3-71.8-68.5c-0.8-43.7,37-72.3,71.8-71.1 c28.3,1,39.1,9.1,54.8,24.6c0,0,22.8,0,46,0c1.8,0,3.5,0,5.3,0c0,0,0,0,0,0.1c-2.2,6.8-3.9,13.7-5.1,20.7h-89.9v72.7h39.4 C207.2,204.5,187,224.1,156.7,224.1z M486.4,175.9l-8.1-11h-96.7l39.3,56.8c-40.9,8-79.6-26.2-79-66c0.6-40.7,33.4-71.1,72.7-70.9 C457.7,85.1,500.6,131.5,486.4,175.9z"/>
      </svg>
    </NavLink>
  )
}

export default Logo