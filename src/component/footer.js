import React from 'react';
import {useState,useEffect}  from 'react'

const value_query = `
{
    fffs {
      nodes {
        id
        one
        two
        three
        four
        five
        six
        seven
        ione {
          sourceUrl
        }
        itwo {
          sourceUrl
        }
        tthree {
          sourceUrl
        }
      }
    }
  }
`

function Footer(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.fffs.nodes))
      },[]);

    return(
        <div className="footer" id='sc'>
        {value.map((value,index) => (
            <div className="inside_footer" key={value.id}>
                <div className="inside_footer-left">
                    <div className="footer_logo flex_for_footer">
                        <a href="#sc-1"><img src={value.ione.sourceUrl} alt="logo" className="logo"/></a>                       
                        <div className="social-icons">
                            <a href="#instagram"><img src={value.itwo.sourceUrl}alt="instagram"/></a>
                            <a href="#linkedIn"><img src={value.tthree.sourceUrl} alt="linked-in"/></a>
                        </div>
                    </div>
                    <div className="footer_address flex_for_footer">
                        <div className="address">
                            <p><a href='#address'>{value.one}</a></p>
                            <p><a href='#address'>{value.two}</a></p>
                            <p><a href='#address'>{value.three}</a></p>
                        </div>
                        <div className="copyright">
                            <span>{value.four}</span>
                            <span><a href="#pp">{value.five}</a></span>
                        </div>
                    </div>
                </div>
                <div className="inside_footer-right flex_for_footer">
                    <form id="ft-form">
                        <input type="text" placeholder={value.six} list="browsers"></input>
                        <datalist id="browsers">
                            <option value="Hoopla"/>
                            <option value="Contact"/>
                            <option value="Assets"/>
                            <option value="Motion"/>
                            <option value="Collateral"/>
                        </datalist>                     
                    </form>
                    <button type="submit" from="ft-form" value="Submit">{value.seven}</button>                   
                </div>
            </div>
        ))}
        </div>
    )
}

export default Footer;