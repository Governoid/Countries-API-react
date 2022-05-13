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

    return (   
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
    )
}

export default Countries