import React, {useState} from 'react'
import Api from './Api'

const Main = (props) => {
    // state vars - check with the api docs:
    //Se https://api.publicapis.org/

    const [apis,setApis] = useState([])
    const [term,setTerm] = useState('')

    const onChange = (event) => {
        setTerm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = `https://api.publicapis.org/entries?title=${term}`;
        console.log(url)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data.entries!== null)
                data.entries !== null ? setApis(data.entries) : setApis ([{API:'no results'}])
            })
            .catch(e => console.log('error', e));
    }
    return (
        <div className="page">
            <form onSubmit={handleSubmit}>
                <input onChange={onChange} type="text" name="" placeholder="" />
                <button>Search!</button>
                </form>
                <section className="section">
                    {apis.map((row, rowindex) => {
                        return (<Api key={rowindex} api={row.API} description={row.Description} link={row.Link}/>)
                    })}
                </section>
            </div>
    )
}

export default Main 