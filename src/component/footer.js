import logo from '../assets/image/logo.png'
import instagram from '../assets/image/instagram.png'
import linkedIn from '../assets/image/linked-in.png'

function Footer(){
    return(
        <div className="footer" id='sc'>
            <div className="inside_footer">
                <div className="inside_footer-left">
                    <div className="footer_logo flex_for_footer">
                        <img src={logo} alt="logo" className="logo"/>
                        <div className="social-icons">
                            <img src={instagram} alt="instagram"/>
                            <img src={linkedIn} alt="linked-in"/>
                        </div>
                    </div>
                    <div className="footer_address flex_for_footer">
                        <div className="address">
                            <p><a href='#address'>Level 3, 162 Collins Street</a></p>
                            <p><a href='#address'>Melbourne VIC 3000</a></p>
                            <p><a href='#address'>+61 438 266 782</a></p>
                        </div>
                        <div className="copyright">
                            <span>© Studio Hoopla 2022</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
                <div className="inside_footer-right flex_for_footer">
                    <form id="ft-form">
                        <input type="text" placeholder="Stay in the Hoopla loop by entering your email"></input>                       
                    </form>
                    <button type="submit" from="ft-form" value="Submit" >Submit</button>                   
                </div>
            </div>
        </div>
    )
}

export default Footer;