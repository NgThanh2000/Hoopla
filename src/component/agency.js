import React from "react";
import Header from "./header";

function Agency(){

    return(
        <div className="agency">
            
            <div className="inside_agency">
                
                <div className="title_agency">
                    <Header/>
                    <h5>We're are full services design agency whose currency is building brands.</h5>
                </div>
                <div className="brand_agency">
                    <ul className="ul_brand_agency">
                        <li><a href="#services">Brand Identity & Development</a></li>
                        <li><a href="#services">Campaign & Copywriting</a></li>
                        <li><a href="#services">Internal Communications</a></li>
                    </ul>
                    <ul className="ul_brand_agency">
                        <li><a href="#services">Collateral</a></li>
                        <li><a href="#services">Illustration & Infographic</a></li>
                        <li><a href="#services">Photography</a></li> 
                        <li><a href="#services">Publication & Print Production</a></li>                
                    </ul>
                    <ul className="ul_brand_agency">
                        <li><a href="#services">Website & Digital Assets</a></li>
                        <li><a href="#services">Motion</a></li>
                        <li><a href="#services">Event & Environmental</a></li>              
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Agency;