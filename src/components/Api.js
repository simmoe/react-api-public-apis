import React from 'react'

const Api = (props) => {

    return(
        <div className="api">
            <h1>{props.api}</h1>
            <p>{props.description}</p>
            {props.link ? <a href={props.link}>Visit page</a> : ""}
        </div>
    )
}

export default Api