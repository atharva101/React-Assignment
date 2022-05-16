import axios from "axios";
import { useState,useContext } from "react";
import './Login.styles.css'
import { UserContext } from "../../Contexts/UserContext";
import { decode as base64_decode, encode as base64_encode } from "base-64";
function Login (){

    const[ username, setUsername] = useState('')
    const [ password, setPassword] = useState("");
    const {accessToken, setAccessToken} = useContext(UserContext);



    function handleUsername(e){
       // console.log(e.target.value)
        setUsername(e.target.value);
    }
    function handlePassword(e) {
      //console.log(e.target.value);
      setPassword(e.target.value);
    }
    function handleClick(){
        const url = "https://indian-railway.vercel.app/api/login";
        //console.log(username)
        //console.log(password)
        let usernamePass = username + ':' + password
        let auth = btoa(usernamePass)
      // console.log(auth)
        
        axios
          .post(
            url,
            {},
            {
              headers: { Authorization: `Basic ${auth}` },
            }
          )
          .then((res) =>{ 
              setAccessToken(res.data.access_token)
             // console.log(res.data.access_token)
            });
    }
    return (
      <div className="login-container">
        <h1 id = "login">Login</h1>
        <label htmlFor="username"> Username</label>
        <input id="username" type="text" placeholder="Enter Username" onChange={e => handleUsername(e)} required />
        <label htmlFor="password"> Password </label>
        <input id="password" type="password" placeholder="Enter Password" onChange={e => handlePassword(e)} required/>
        <button id = "button" onClick={handleClick}> Login  </button>
      </div>
    );
}


export default Login;