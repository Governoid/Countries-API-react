import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
const Region = () => {
    
    const [country, setCountry] = useState([])
    const {regionname} = useParams()
    const [input] = useState('');
    useEffect(()=> {
        const fethcountrydata = async() => {

            const response = await fetch(`https://restcountries.com/v3.1/region/${regionname}`)
            const country = await response.json()
            setCountry(country)
        }
        fethcountrydata()

        
    }, [regionname])

    return (
        <>
        <h1 className='currentregion'>{regionname}</h1>
        <Link to="/" className='btn back'>Back to All</Link>
        <section className="grid">
            
        {country.filter(country =>{
            if (input === ""){
                return country;
            }else if (country.name.common.toLowerCase().includes(input.toLowerCase())){
                return country;
            }
        }).map((country, index)=> {
            const { name, flags, population, region, capital } = country
            
            return(
                <article key={index}>
                    <div>
                        <img src={flags.png} alt={name.common} />
                        <div className='grids'>
                        <h3>{name.common}</h3>
                        <h4>Population: <span>{population}</span></h4>
                        <h4>Region: <span>{region}</span></h4>
                        <h4>Capital: <span>{capital}</span></h4>  
                        <Link to={`/countries/${name.common}`} className="btn" >Learn more</Link>
                        </div>
                    </div>
                </article>
            )
        })}
        </section>
        
        </>
    )
}


export default Region