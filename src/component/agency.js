import React from "react";
import Header from "./header";
import {useState,useEffect}  from 'react'

const value_query = `
{
    agencys {
      nodes {
        tagencys
        a
        b
        c
        d
        e
        f
        g
        h
        q
        k
      }
    }
  }
`
function Agency(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.agencys.nodes))
      },[]);

    return(
        <div className="agency">
             {value.map((value,index) => (
                <div className="inside_agency" key={index}>                 
                    <div className="title_agency">
                        <Header/>
                        <h5>{value.tagencys}</h5>
                    </div>
                    <div className="brand_agency">
                        <ul className="ul_brand_agency">
                            <li><a href="#services">{value.a}</a></li>
                            <li><a href="#services">{value.b}</a></li>
                            <li><a href="#services">{value.c}</a></li>
                        </ul>
                        <ul className="ul_brand_agency">
                            <li><a href="#services">{value.d}</a></li>
                            <li><a href="#services">{value.e}</a></li>
                            <li><a href="#services">{value.f}</a></li> 
                            <li><a href="#services">{value.g}</a></li>                
                        </ul>
                        <ul className="ul_brand_agency">
                            <li><a href="#services">{value.h}</a></li>
                            <li><a href="#services">{value.q}</a></li>
                            <li><a href="#services">{value.k}</a></li>              
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Agency;