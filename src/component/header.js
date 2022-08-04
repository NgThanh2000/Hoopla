import React from 'react';
import { useState} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import iconMenu from '../assets/image/icon.png'
import iconGreen from '../assets/image/icon_green.png'
import Agency from './agency';

function Header(){

    // const [state, setState] = useState(false)
    const [hidden, setHidden] = useState(false)

    return(
        <div className="header">
            <div className="inside_header">
                <div className="header_menu">
                    <ul>
                        <li><a href="#sc-5">About</a></li>
                        <li><a className="a" href="#sc-6">Work</a></li>
                        <li><a className="a" href="#sc-7">Contact</a></li>
                    </ul>
                </div>

                <OutsideClickHandler onOutsideClick = {()=> { setHidden(false);}}>
                    <div className="header_icon" 
                        onClick={() => setHidden(!hidden)}
                        >
                        {/* {state && <Agency/>} */}

                        <img src ={iconMenu} alt="iconMenu" id="iconW"/>
                        <img src ={iconGreen} alt="iconGreen" id="iconG" />
                    </div>
                </OutsideClickHandler>
                {hidden &&(<Agency/>)}
            </div>
        </div>
    )
}

export default Header;

        // const [fal, setFal] = useState(false)
    // // const set = )
    // window.addEventListener('click', console.log("fhefhe"))
    // window.addEventListener('click', ()=>{
    //     setFal(true);
    //     console.log("true")
    // })
    // useEffect(() => {
        
    //     // const none = () =>{
    //         if(state(true)){
    //             setState(false);
    //         }
    //     // }
    //     // window.addEventListener('click',none)
    //     alert('click')

    //     // return ()=>{
    //     //     window.removeEventListener('click',none)
    //     // }
    // },[windowClick]);



    // const handleClick = () =>{
        // document.querySelector('.header').style.background= "#ffffff";
        // document.querySelector(".agency").style.display = "none"
        // document.querySelector("#iconW").style.display = "none"
        // document.querySelector("#iconG").style.display = "block"

    //     setState(!state)
    //     state && <Agency/>
    // }