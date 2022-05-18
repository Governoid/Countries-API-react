import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'



const url = 'https://restcountries.com/v3.1/all'

const Countries = () => {
    
    const [countries, setCountries] = useState([])

       const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
        console.log(countries)
       }

    useEffect(() => {
        fetchCountryData()
    }, [])

    const allcontinents = countries
    const uniqueTags = [];

    allcontinents.forEach(img => {
        if (uniqueTags.indexOf(img.continents) === -1) {
            uniqueTags.push(img.continents)
        }
        });

    const arrays = []
    for (let i = 0; i < 249; i++){
        if (uniqueTags[i] !== undefined) {
            if (uniqueTags[i][0] === "Antarctica"){
                uniqueTags[i][0] = "Antarctic"
            }
            arrays.push(uniqueTags[i][0])
        }
    }


    const array = arrays.map(q => q);
    return (
        <>
        <div className='flex'>
            {array.filter((q, idx) => array.indexOf(q) === idx).map((item, index) => {return <Link to={"/region/"+item} className='btns btntop' key={index}>{item}</Link>})}
        </div> 
        <div className="grid">
            {countries.map((country) => {
                const { ccn3, name, population, region, capital, flags, } = country
                return <article key={ccn3}>
                    <div>
                        <img src={flags.png} alt={name.common} />
                        <div className='borders'>
                        <h3>{name.common}</h3>
                        <h4>Population: <span>{population}</span></h4>
                        <h4>Region: <span>{region}</span></h4>
                        <h4>Capital: <span>{capital}</span></h4>  
                        <Link to={`/countries/${name.common}`} className="btn" >Learn more</Link>
                        </div>
                    </div>
                </article>

            })}
        </div>
        </>
    )
}

export default Countries