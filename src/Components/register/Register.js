import React from 'react';
import M from 'materialize-css';

export default function Register() {

    const submitHandler = (e) => {
        e.preventDefault();
        M.toast({html: "<b>Register Disabled Currently</b>",classes: 'grey'});
    } 
    return (
       <div style={{minHeight: '50vh', padding:"30px"}}>
        <div className="row">
        
        <form
            className="col m8 s12 offset-m2 card"
            style={{padding:"20px",backgroundColor: "rgba(255, 244, 230, 0.9)"}}
            onSubmit={submitHandler}
        >
        <div className="card-content">
            <h5 className="center-align">Register</h5>
            <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate"
                />
                <label htmlFor="name">Full Name</label>
                </div>
            <div className="input-field col s12">
                <i className="material-icons prefix">mail</i>
                <input id="email" type="text" className="validate"
                />
                <label htmlFor="email">Email ID</label>
            </div>
            <div className="input-field col s12">
                <i className="material-icons prefix">lock</i>
                <input id="pswd" type="password" className="validate"
                />
                <label htmlFor="pswd">Password</label>
            </div>

            <div className="file-field input-field col s12">
            <div className="btn-small grey lighten-2 grey-text text-darken-3">
                <span>Upload Image</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>


            <div className="right-align" style={{paddingRight:"10px"}}>

            <button type="submit" className="btn orange">Sign up</button>
            </div>
            </div>
        </div>
        </form>
        </div>
        </div>
    )
}
