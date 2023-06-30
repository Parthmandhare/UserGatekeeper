import React, { useState } from 'react'
import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../firebase"
import ParticlesBg from "particles-bg";
import styles from "./Signup.module.css";
import Navbar from './Navbar';

const Register = () => {
  const navigate = useNavigate();
  const [values, setvalues] = useState({
    name: "",
    email: "",
    pass: ""
  });

  const[errorMsg, setErrorMsg] = useState("")

  const handleSumbission=()=>{
    if(!values.name || !values.email || !values.pass){
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("")
    createUserWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{
      // const user = userCrential.user;
      const user = res.user;
      await updateProfile(user, {
        displayName: values.name
      });
      navigate('/login')
      console.log(user);
    }).catch(err=>{
      setErrorMsg(err.message)
      console.log("err"- err.message);
    })
  }
  return (
    <>
    <Navbar/>
     <ParticlesBg type="lines" bg={true}/>
      <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Register</h1>

        <InputControl label="Name" placeholder="Enter your name" onChange ={(event)=> setvalues((prev) => ({...prev, name:event.target.value})) }/>

        <InputControl label="Email" placeholder="Enter your email" onChange ={(event)=> setvalues((prev) => ({...prev, email:event.target.value})) }/>

        <InputControl label="Password" placeholder="Enter your password" onChange ={(event)=> setvalues((prev) => ({...prev, pass:event.target.value})) }/>

        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSumbission}>Register</button>
          <p>Already have an account? 
              <span><Link to="/login">Login Here</Link></span>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Register

// import React from "react";
// import loginImg from "../images/login.svg";

// export class Register extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Register</div>
//         <div className="content">
//           <div className="image">
//             <img src={loginImg} />
//           </div>
//           <div className="form">
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input type="text" name="username" placeholder="username" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input type="text" name="email" placeholder="email" />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input type="text" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Register
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
