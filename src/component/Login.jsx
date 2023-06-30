import React, { useState } from 'react'
import InputControl from './InputControl'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import styles from "./Login.module.css";
import ParticlesBg from "particles-bg";
import Navbar from './Navbar'


const Login = () => {

    const navigate = useNavigate();

    const [values , setvalues] = useState({
        email: "",
        pass: ""
    })

    const [errorMsg, setErrorMsg]= useState("");

    const handleSumbission=()=>{
        if(!values.email || !values.pass){
          setErrorMsg("Fill all fields");
          return;
        }
        signInWithEmailAndPassword(auth, values.email, values.pass).then((res)=>{
            navigate('/profile');
        }).catch((err)=>{
            setErrorMsg(err.message)
        })
    }    
  return (
    <>
      <ParticlesBg type="fountain" bg={true}/>
      <Navbar/>
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl label="Email" placeholder="Enter your email" onChange={(event)=>setvalues((prev)=>({...prev, email:event.target.value}))} />

        <InputControl label="Password" placeholder="Enter your password" onChange={(event)=>setvalues((prev)=>({...prev, pass:event.target.value}))}/>

        <div className={styles.footer}>
            
        <b className={styles.error}>{errorMsg}</b>
        <button onClick={handleSumbission}>Login</button>
        <p>Don't have an account? 
            <span><Link to="/register">Register Here</Link></span>
        </p>

        </div>

        </div>
    </div>
    </>
  )
}

export default Login

{/* <div id="loginform">
        <FormHeader title="Login Here" />
        <Form />
        <OtherMethods />
      </div> */}

// import React from "react";
// import loginImg from "../images/login.svg";

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="base-container" ref={this.props.containerRef}>
//         <div className="header">Login</div>
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
//               <label htmlFor="password">Password</label>
//               <input type="password" name="password" placeholder="password" />
//             </div>
//           </div>
//         </div>
//         <div className="footer">
//           <button type="button" className="btn">
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }
// }
