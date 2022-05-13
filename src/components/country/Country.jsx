import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './country.css'

const Country = () => {
    const [country, setCountry] = useState([])
    const {name} = useParams();
    useEffect(()=> {
        const fethcountrydata = async() => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const country = await response.json()
            setCountry(country)
        }
        fethcountrydata()
    }, [name])
    return (
        <div className='country'>
        

        {country.filter(country =>{
            if (name === ""){
                return country;
            }else if (country.name.common.toLowerCase()===(name.toLowerCase())){
                return country;
            }
        }).map((c, index) => {
                const {name, population, area, flags, region} = c

                return(
                    <article key={index}>
                     <div className="country-inner">
                        <div className='flags'>
                            <img src={flags.png} alt={name.common} />
                        </div>
                        <div className='country-details'>
                        <div>
                            <h2>{name.common}</h2>
                            <h5>Population: <span>{population}</span></h5>

                            <h5>Area: <span>{area} km<sup>2</sup></span></h5>

                            <h5>Currencie(s): <span>{country[index].currencies ? Object.keys(country[0].currencies).map((key)=>{
                                return (
                                    <span>{country[0].currencies[key].name} </span>
                                )
                            }): "no data" }</span></h5>

                            <h5>Languege(s): <span>{
                            country[0].languages ? Object.keys(country[0].languages).map((key)=>{
                                return(
                                    country[0].languages[key]+" "
                                )
                            }): "no data"}</span></h5>

                            <h5>Borders: <span>{country[0].borders ? Object.keys(c.borders).map((key)=>{
                                    return(
                                        c.borders[key]+" "
                                    )
                                }): "no data"}</span></h5>

                            <h5>Region : <span>{region}</span></h5>
                            </div>          
                        </div>
                     </div>
                     <Link to={"/"} className='btn backbtn'>Back</Link>
                    </article>
                )
            })}
        </div>
    )
}
export default Country