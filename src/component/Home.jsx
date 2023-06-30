import React from 'react'
import { Link } from 'react-router-dom'
import ParticlesBg from "particles-bg";
import styles from "./Home.module.css";
import Navbar from './Navbar';

const Home = (props) => {
  return (
    <>
        <ParticlesBg type="circle" bg={true}/>
        <Navbar/>
        <div className={styles.container}>
            <h className={styles.heading}>UserGatekeeper</h>
            <p className={styles.desc}>Secure gateway to seamless user login and authentication</p>
            <div className={styles.button_links}>
                <button className={styles.btn1}>
                    <Link className={styles.links} to="/login">Login</Link>
                </button>
                <button className={styles.btn2}>
                    <Link className={styles.links} to="/register">Register</Link>
                </button>
            </div>

            <div>
            </div>
        </div>
        
    </>

  )
}

export default Home

// import "./style.scss";

// export { Login } from "./Login";
// export { Register } from "./Register";
