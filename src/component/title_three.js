import Header from '../component/header';
import {useState,useEffect}  from 'react';

const value_query = `
{
    title4s {
      nodes {
        id
        text
        ttwo
        tthree
      }
    }
  }
`
function TitleThree(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.title4s.nodes))
      },[]);

    return(
        <div className="title-three title_section category-title'" id="sc-7">
        <Header/>

            {value.map((value,index) => (
                <div className="inside-title" key={value.id} >
                        <h2>{value.text} <b>{value.ttwo}</b> {value.tthree}</h2>
                        
                </div>
            ))}
          
        </div>
    )
}
export default TitleThree;