import React from 'react';
import { useState,useEffect} from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

// import iconMenu from '../assets/image/icon.png'
// import iconGreen from '../assets/image/icon_green.png'

import Agency from './agency';

const value_query = `
{
  h {
    nodes {
      ttwo
      tone
      tthree
      id
      img1 {
        sourceUrl
      }
      img2 {
        sourceUrl
      }
    }
  }
}
`
function Header(){

    const [value,setValue] = useState([])
    const [hidden, setHidden] = useState(false)
    
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.h.nodes))
      },[]);

    return(
        <div className="header">
            {value.map((value,index) => (
                <div className="inside_header" key={value.id}>
                    <div className="header_menu">
                        <ul>
                            <li><a href="#sc-5">{value.tone}</a></li>
                            <li><a className="a" href="#sc-6">{value.ttwo}</a></li>
                            <li><a className="a" href="#sc-7">{value.tthree}</a></li>
                        </ul>
                    </div>
                    <OutsideClickHandler onOutsideClick = {()=> {setHidden(false);}}>
                        <div className="header_icon" onClick={() => setHidden(!hidden)}>
                            {/* {state && <Agency/>} */}
                            <img src ={value.img1.sourceUrl} alt="iconMenu" id="iconW"/>
                            <img src ={value.img2.sourceUrl} alt="iconGreen" id="iconG" />
                        </div>
                    </OutsideClickHandler>
                    {hidden &&(<Agency/>)}
                </div>
                ))}
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