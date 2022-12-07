import {useState} from 'react';

function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (event) => {
        event.preventDefault();
        // call firebase
        const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDcQcgWpz2aP4mRZdmyTX23YRUAz71Bm5Y",
        { 
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true,
            })
        }); 
        const result = await response.json();
        console.log(result);

        props.setToken(result.idToken);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
      <form>
        <input type="text" name="email" placeholder="email" 
            value={email} onChange={handleEmail}/>
        <input type="password" name="password" placeholder="password" 
            value={password} onChange={handlePassword}/>

        <button type="submit" onClick={handleSignup}>Sign up</button>
      </form>
    );
  }

  export default Signup;