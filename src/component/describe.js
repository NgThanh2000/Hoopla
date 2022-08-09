import Header from '../component/header';
import {useState,useEffect}  from 'react'

const value_query = `
{
    describes {
      nodes {
        id
        tones
        ttwos
        three
        four
        five
        six
        seven
        eight
        nine
        ione {
          sourceUrl
        }
        itwo {
          sourceUrl
        }
        tthree {
          sourceUrl
        }
        ifour {
          sourceUrl
        }
      }
    }
  }
`
function Describe(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.describes.nodes))
      },[]);

    return(
        <div className="describe category-title'" id="sc-3">
            <Header/>
            {value.map((value,index) => (
                <div className="inside_describe" key={value.id}>
                    <div className="title_describe">
                        <h2>{value.tones}</h2>
                    </div> 
                    <div className="content_describe">
                        <div className="in_content">
                            <div className="in_content-img">
                                <img src={value.ione.sourceUrl} alt="sh1"/>
                            </div>
                            <div className="in_content-text">
                                <h3>{value.ttwos}</h3>
                                <p>{value.three}</p>
                            </div>                       
                        </div>
                        <div className="in_content">
                            <div className="in_content-img">
                                <img src={value.itwo.sourceUrl} alt="sh2"/>
                            </div>
                            <div className="in_content-text">
                                <h3>{value.four}</h3>
                                <p>{value.five}</p>
                            </div>
                        </div>
                        <div className="in_content">
                            <div className="in_content-img">
                                <img src={value.tthree.sourceUrl} alt="sh3"/>
                            </div>
                            <div className="in_content-text">
                                <h3>{value.six}</h3>
                                <p>{value.seven}</p>
                            </div>                      
                        </div>
                        <div className="in_content">
                            <div className="in_content-img">
                                <img src={value.ifour.sourceUrl} alt="sh4"/>
                            </div>
                            <div className="in_content-text">
                                <h3>{value.eight}</h3>
                                <p>{value.nine}</p>
                            </div>                          
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Describe;