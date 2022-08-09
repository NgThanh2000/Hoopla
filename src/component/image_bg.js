// import img_bg from '../assets/image/img_bg.png'
import Header from '../component/header';
import {useState,useEffect}  from 'react';

const value_query = `
{
    imgBgs {
      nodes {
        bg {
          id
          sourceUrl
        }
      }
    }
  }
`
function ImageBg(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.imgBgs.nodes))
      },[]);

    return(
        <div className="image_bg category-title'" id="sc-4">
            <Header/>
            {value.map((value,index) => (
                <img key={index} src={value.bg.sourceUrl} alt="image_background"/>
            ))}
        </div>
        
    )
}
export default ImageBg;