import iconMenu from '../assets/image/icon.png'
import iconGreen from '../assets/image/icon_green.png'
function Header(){
    return(
        <div className="header">
            <div className="inside_header">
                <div className="header_menu">
                    <ul>
                        <li><a href="#sc-5">About</a></li>
                        <li><a href="#sc-6">Work</a></li>
                        <li><a href="#sc-7">Contact</a></li>
                    </ul>
                </div>
                <div className="header_icon">
                    <img src ={iconMenu} alt="iconMenu" id="iconW"/>
                    <img src ={iconGreen} alt="iconGreen" id="iconG" />
                </div>
            </div>
        </div>
    )
}

export default Header;