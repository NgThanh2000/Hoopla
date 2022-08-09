import {useState,useEffect}  from 'react'

const value_query = `
{
    gallerys {
      nodes {
        id
        twos
        tttwos
        ttones
        one
        iones {
          sourceUrl
        }
        itwos {
          sourceUrl
        }
        ithrees {
          sourceUrl
        }
        ifours {
          sourceUrl
        }
        ifives {
          sourceUrl
        }
      }
    }
  }
`
function Gallery(){

    const [value,setValue] = useState([])
    useEffect(()=>{
        fetch('http://localhost/Hoopla/graphql/',{
          method :"POST",
          headers :{"Content-Type": "application/json"},
          body : JSON.stringify({query: value_query })
        }).then(response => response.json())
        .then(data => setValue(data.data.gallerys.nodes))
      },[]);

     return(
        <>
        {value.map((value,index) => (
        <div className="gallery category-title'" id="sc-2"key={value.id}>   
                    <div className="gallery_f gallery_hv">
                        <img src={value.iones.sourceUrl} alt="gallery_img"/>
                        <div className="gallery_show">
                            <div className="gallery_show-text">
                                <div className='show-text'>
                                    <h3>{value.ttones}</h3>
                                    <p>{value.one}</p>
                                </div>    
                            </div>
                        </div>
                    </div>

                    <div className="gp">
                        <img src={value.itwos.sourceUrl} alt="gallery_img"/>
                    </div>
                    
                    <div className="gp"><img src={value.ithrees.sourceUrl}alt="gallery_img"/></div>
                    
                    <div className="gp">
                        <img src={value.ifours.sourceUrl} alt="gallery_img"/>
                    </div>
                    
                    <div className="gallery_l gallery_hv gp">
                        <img src={value.ifives.sourceUrl} alt="gallery_img"/>
                        <div className="gallery_show">
                            <div className="gallery_show-text">
                                <div className='show-text'>
                                    <h3>{value.tttwos}</h3>
                                    <p>{value.twos}</p>
                                </div>                      
                            </div>
                        </div>
                    </div>
        </div>
        ))}  
        </>
     )
}
export default Gallery;