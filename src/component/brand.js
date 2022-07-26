import b1 from '../assets/image/b1.png';
import b2 from '../assets/image/b2.png';
import b3 from '../assets/image/b3.png';
import b4 from '../assets/image/b4.png';
import b5 from '../assets/image/b5.png';
import b6 from '../assets/image/b6.png';
import b7 from '../assets/image/b7.png';
import b8 from '../assets/image/b8.png';
import b9 from '../assets/image/b9.png';
import b10 from '../assets/image/b10.png';
import Header from '../component/header';

function Brand(){
    return(
        <div className="brand" id="sc-6">
            <Header />
            <div className="inside_brand">
                <div className="title_brand">
                    <h2>
                        As a specialist creative agency, our clients are predominantly, 
                        <br></br>but not exclusively, from the financial services industries. 
                        <br></br>We get them and they get us.
                    </h2>
                </div> 
                <div className="logo_brand">
                   <img src={b1} alt="brand-logo1"/>
                   <img src={b2} alt="brand-logo2"/>
                   <img src={b3} alt="brand-logo3"/>
                   <img src={b4} alt="brand-logo4"/>
                   <img src={b5} alt="brand-logo5"/>
                   <img src={b6} alt="brand-logo6"/>
                   <img src={b7} alt="brand-logo7"/>
                   <img src={b8} alt="brand-logo8"/>
                   <img src={b9} alt="brand-logo9"/>
                   <img src={b10} alt="brand-logo10"/>         
                </div>
                <div className="moretitle_brand">
                    <h2>
                        We're a full service design agency whose 
                        <br></br>currency is building brands.
                    </h2>
                </div> 
                <div className="services_page">
                    <div className="services_list-left">
                        <ul>
                            <li><a href="#services">Brand Identity & Development</a></li>
                            <li><a href="#services">Campaign & Copywriting</a></li>
                            <li><a href="#services">Internal Communications</a></li>
                            <li><a href="#services">Illustration & Infographic</a></li>
                            <li><a href="#services">Collateral</a></li>
                        </ul>
                    </div>
                    <div className="services_list-right">
                        <ul>
                            <li><a href="#services">Publication & Print Production</a></li>
                            <li><a href="#services">Website & Digital Assets</a></li>
                            <li><a href="#services">Photography</a></li>
                            <li><a href="#services">Event & Environmental</a></li>
                            <li><a href="#services">Motion</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Brand;