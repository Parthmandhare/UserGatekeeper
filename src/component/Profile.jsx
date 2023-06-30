import { signOut } from 'firebase/auth'
import React from 'react'
import {useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import mygif from "../images/cute-dog.gif";
import styles from "./Profile.module.css";
import ParticlesBg from "particles-bg";

const Profile = (props) => {

    const navigate = useNavigate();

    const signout=()=>{
        signOut(auth).then(()=>{
            navigate('/')
        })
    }
  return (
    <>
    <ParticlesBg type="lines" bg={true}/>
      <div className={styles.box}>

      <img src={mygif} alt="not" />

      <div className={styles.container}>
      <h2>
        {props.name ? `Welcome ${props.name}  you logged in successfully`: "Login Please"} &#129321;
      </h2>

      <button className={styles.button53} role={styles.button53} onClick={signout}>Want to SignOut?</button>
    </div>



</div>
    </>
    
  )
}

export default Profile