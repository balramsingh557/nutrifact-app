import React, {useState} from 'react';
import M from 'materialize-css';

export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = (e)=> {
        e.preventDefault();

        let loginData = {username, password};

        fetch("http://localhost:3001/auth/v1",{
            method:"POST",
            mode: 'cors',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then((response)=> {
            if(response.status === 201){
                return response.json();
            } else {
                M.toast({html: "<b>Invalid Credentials</b>", classes: 'red lighten-1'})
                return false
            }
        })
        .then((data) => {
            if(data){
                localStorage.setItem('token', data.token);
                localStorage.setItem('name', "David");
                lginSuccessfull();
            }
        })
        .catch((error) =>{
            M.toast({html: "<b>Server Error</b>", classes: 'white red-text'})
            console.log(error)
        });

    }

    const lginSuccessfull = () => {
        props.loginDone();
        props.modalClose();
        setUsername('');
        setPassword('');
    }

    return (
        <div style={{minHeight: '44vh'}}>
        <div className="card-content">
        
        <form
         onSubmit={loginHandler}
         style={{padding:"20px"}}>

            <h5 className="center-align">Login</h5>

            <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>

                <input id="icon_prefix" type="text" className="validate"
                value={username} required
                onChange={(e) => setUsername(e.target.value)}/>

                <label htmlFor="icon_prefix">Username</label>
            </div>
            <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>

                <input id="icon_telephone" type="password" className="validate"
                value={password} required
                onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor="icon_telephone">Password</label>
            </div>

            <div className="right-align" style={{paddingRight:"10px"}}>

            <button type="submit" className="btn orange waves-effect waves-light">Login</button>
            </div>
            </div>
        </form>
        </div>
        </div>

    )
}
