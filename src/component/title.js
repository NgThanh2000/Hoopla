import Header from '../component/header';
import {useState,useEffect}  from 'react'

const value_query = `
{
    title2s {
      nodes {
        id
        date
        title2
      }
    }
  }
`
function Title(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.title2s.nodes))
      },[]);

    return(
        <div className="title_section category-title'" id="sc-1">
        <Header/>

            <div className="inside-title">

                {value.map((value,index) => (
                    <h2 key={value.id}>{value.title2}</h2>
                ))}

                {/* <h2>We get it. You're done with explaining the nuances
                    <br></br>of your industry to design agencies. 
                    <br></br>That's why you'll love working with us. 
                    <br></br>We're a financial services creative agency that 
                    <br></br>partners with super funds, banks,investment firms,
                    <br></br> financial consultancies and more.
                </h2> */}
            </div>
        </div>
    )
}
export default Title;