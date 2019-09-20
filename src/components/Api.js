import React from 'react'

const Api = (props) => {

    return(
        <div className="api">
            <h1>{props.api}</h1>
            <p className="desc">{props.description}</p>
            {props.auth === "" ? <span className="auth">NO-AUTH</span> : <span className="auth">{props.auth}</span>}
            {props.https ? <span className="https">HTTPS</span> : ""}
            {props.cors === "yes" ? <span className="cors">CORS</span> : <span className="cors">NO-CORS</span>}
            {props.link ? <a target="_blank" rel="noopener noreferrer"  href={props.link}>Visit page</a> : ""}
        </div>
    )
}

export default Api