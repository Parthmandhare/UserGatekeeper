import React from 'react'
import styles from "./About.module.css";
import profile_img from "../images/profile.jpeg";
import resume from "../Resume/ParthMandhareResume_2023.pdf"
import Navbar from './Navbar';


const About = () => {
  return (
    <>
        <Navbar/>
        <div className={styles.container}>
            <h2 className={styles.heading}>About Me</h2>
            <div className={styles.box}>
            <div className={styles.leftside}>
                <img src={profile_img} alt="not found" />
                </div>
                <hr />
                <div className={styles.rightside}>
                    <p>Hello, Im Parth Mandhare Im final year IT student, I'm a self-starter and self-taught coder currently in my final year of IT studies. With a strong foundation in Java, React.js, and Node.js, I possess a deep understanding of data structures, problem-solving, and algorithmic skills. I'm passionate about utilizing my technical talents to benefit organizations and drive innovation.</p>
               
                
                    <button> <a href={resume}> Download Resume  </a></button>
                
                </div>
            </div>
            
        </div>
    </>
  )
}

export default About