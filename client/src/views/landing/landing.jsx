import { NavLink } from "react-router-dom";
import styles from './landing.module.css'

const Landing = () => {
  return (
    <div className={styles.landingContainer}>
      <div class="landing">
        <img className={styles.landingImg} src="logo.svg" alt="" />
          <div>
          <NavLink to="/home" ><button className={styles.active}>Ingresar al sitio</button></NavLink>
          </div>
      </div>
      
      <div className={styles.footerContainer}>
        <footer>Creado por <span>
              <img src="github.svg" className={styles.githubLogo} alt="" />
            </span>
          <b> Elián Rehbani </b>para <b>Henry </b>
            <span>
              <img src="henry.png" alt="" className={styles.henryLogo}/>
            </span></footer>
      </div>
    </div>
  );
};

export default Landing;
