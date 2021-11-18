import React from 'react'

export default function Contact() {
    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{minHeight: '50vh', padding:"30px"}}>
        <div className="row">
        
        <form
            className="col m8 s12 offset-m2 card"
            style={{padding:"20px", backgroundColor: "rgba(255, 244, 230, 0.9)"}}
            onSubmit={submitHandler}
        >
        <div className="card-content">
            <h5 className="center-align">Contact Us</h5>
            <p className="center-align">You can give any feedback as well</p>
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
                <i className="material-icons prefix">phone</i>
                <input id="telephone1" type="tel" className="validate" />
                <label htmlFor="telephone1">Telephone</label>       
            </div>

            <div className="input-field col s12">
            <i className="material-icons prefix">comment</i>
            <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
            <label htmlFor="textarea1">Your Query</label>
            </div>


            <div className="right-align" style={{paddingRight:"10px"}}>

            <button type="submit" className="btn orange">Submit</button>
            </div>
            </div>
        </div>
        </form>
        </div>
        </div>
    )
}
