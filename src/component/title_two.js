import Header from "../component/header";
import {useState,useEffect}  from 'react';

const value_query = `
{
    title3s {
      nodes {
        id
        text
        ttwo
        tthree
        submit
      }
    }
  }
`
function TitleTwo(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.title3s.nodes))
      },[]);

    // const handleClick = () =>{
    //     alert("What do you want to do?");
    // }
    return(
        <div className="title-two title_section category-title'" id="sc-5">
            <Header/>   
                {value.map((value,index) => (
                    <div className="inside-title" key={value.id}>
                        <h2>{value.text}</h2>
                        <h4>{value.ttwo}</h4>
                        <p>{value.tthree}</p>
                        <button type = "button">{value.submit}</button>
                    </div>
                ))}
                {/* <h2>
                    “In the first workshop, we quickly set the direction 
                    <br></br>for our values,creative style, and language. 
                    <br></br>This set a strong foundation for thework, and we're
                    <br></br> thrilled with our new identity.”
                </h2>
                <h4>Justin McCamish & John McKeever</h4>
                <p>Co-Founders & Directors at Data Migrators</p>
                <button type="button" onClick={handleClick}>See the case study</button> */}
            
        </div>
    )
}
export default TitleTwo;