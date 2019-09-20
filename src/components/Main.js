import React, {useState} from 'react'
import Api from './Api'


const Main = (props) => {
    // state vars - check with the api docs:
    //Se https://api.publicapis.org/

    const [apis,setApis] = useState([])
    const [term,setTerm] = useState('')
    const [cats, setCats] = useState([])
    const [category, setCategory] = useState('Animals'); 


    //Fetch categoris and save in state
    fetch(`https://api.publicapis.org/categories`)
        .then(response => response.json())
        .then(data => {
            setCats(data)
        })
        .catch(e => console.log('error', e));
    
    const onChange = (event) => {
        setTerm(event.target.value)
    }

    const onSelect = (event) => {
        setCategory(event.target.value)
        setTerm('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const c = encodeURIComponent(category)
        const t = encodeURIComponent(term)
        const url = `https://api.publicapis.org/entries?title=${t}&category=${c}`;
        console.log(url)

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.entries !== null ? setApis(data.entries) : setApis ([{API:'no results'}])
            })
            .catch(e => console.log('error', e));
    }

    return (
        <div className="page">
            <form onSubmit={handleSubmit}>
                <select onChange={onSelect}>
                    {cats.map((name, index)=>{
                        return <option key={index} value={name}>{name}</option>
                    })}
                </select>
                <input placeholder="write an optional searchphrase" onChange={onChange} type="text" name="" value={term} />
                <button>Search!</button>
                </form>
                <section className="section">
                    {apis.map((row, rowindex) => {
                        return (<Api key={rowindex} auth={row.Auth} cors={row.Cors} https={row.HTTPS} api={row.API} description={row.Description} link={row.Link}/>)
                    })}
                </section>
            </div>
    )
}

export default Main 