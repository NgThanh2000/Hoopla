import React from 'react';
import Header from '../component/header';
import {useState,useEffect}  from 'react'

const value_query = `
{
    brands {
      nodes {
        tone
        ttwo
        pone
        ptwo
        pthree
        pfour
        pfive
        psix
        pseven
        peight
        pnine
        pten
        ione {
          sourceUrl
        }
        itwo {
          sourceUrl
        }
        ithree {
          sourceUrl
        }
        ifour {
          sourceUrl
        }
        ifive {
          sourceUrl
        }
        isix {
          sourceUrl
        }
        iseven {
          sourceUrl
        }
        ieight {
          sourceUrl
        }
        inine {
          sourceUrl
        }
        iten {
          sourceUrl
        }
      }
    }
  }
`
function Brand(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.brands.nodes))
      },[]);

    return(
        <div className="brand category-title'" id="sc-6">
            <Header />
            {value.map((value,index) => (
                <div className="inside_brand" key={index}>
                    <div className="title_brand">
                        <h2>{value.tone}</h2>
                    </div> 
                    <div className="logo_brand">
                    <img src={value.ione.sourceUrl} alt="brand-logo1"/>
                    <img src={value.itwo.sourceUrl}alt="brand-logo2"/>
                    <img src={value.ithree.sourceUrl} alt="brand-logo3"/>
                    <img src={value.ifour.sourceUrl} alt="brand-logo4"/>
                    <img src={value.ifive.sourceUrl} alt="brand-logo5"/>
                    <img src={value.isix.sourceUrl} alt="brand-logo6"/>
                    <img src={value.iseven.sourceUrl} alt="brand-logo7"/>
                    <img src={value.ieight.sourceUrl} alt="brand-logo8"/>
                    <img src={value.inine.sourceUrl} alt="brand-logo9"/>
                    <img src={value.iten.sourceUrl} alt="brand-logo10"/>         
                    </div>
                    <div className="moretitle_brand">
                        <h2>{value.ttwo}</h2>
                    </div> 
                    <div className="services_page">
                        <div className="services_list-left">
                            <ul>
                                <li><a href="#services">{value.pone}</a></li>
                                <li><a href="#services">{value.ptwo}</a></li>
                                <li><a href="#services">{value.pthree}</a></li>
                                <li><a href="#services">{value.pfour}</a></li>
                                <li><a href="#services">{value.pfive}</a></li>
                            </ul>
                        </div>
                        <div className="services_list-right">
                            <ul>
                                <li><a href="#services">{value.psix}</a></li>
                                <li><a href="#services">{value.pseven}</a></li>
                                <li><a href="#services">{value.peight}</a></li>
                                <li><a href="#services">{value.pnine}</a></li>
                                <li><a href="#services">{value.pten}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Brand;