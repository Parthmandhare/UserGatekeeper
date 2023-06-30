import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';
import { useEffect, useState } from 'react';
import {auth} from "./firebase"
import Profile from './component/Profile';
import About from './component/About';

function App() {
  const[userName, setUserName] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUserName(user.displayName);
      }else{
        setUserName("");
      }
      console.log(user);
    })
  }, [])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path='/profile' element={<Profile name={userName}/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from "react";
// import "./App.scss";
// import { Login, Register } from "./component/Home";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add("right");
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove("right");
//       this.rightSide.classList.add("left");
//     } else {
//       this.rightSide.classList.remove("left");
//       this.rightSide.classList.add("right");
//     }
//     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? "Register" : "Login";
//     const currentActive = isLogginActive ? "login" : "register";
//     return (
//       <div className="App">
//         <div className="login">
//           <div className="container" ref={ref => (this.container = ref)}>
//             {isLogginActive && (
//               <Login containerRef={ref => (this.current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Register containerRef={ref => (this.current = ref)} />
//             )}
//           </div>
//           <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={ref => (this.rightSide = ref)}
//             onClick={this.changeState.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

// export default App;

