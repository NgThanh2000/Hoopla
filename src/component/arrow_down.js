import React from 'react';
import Vector from '../assets/image/Vector.png';


function Arrow(){


    return(
        <div className="arrow">
            <div className="in_arrow">
                <a href= '#tt' >
                    <img src={Vector} alt="Arrow"></img>
                </a>              
            </div>          
        </div>
     )
}
export default Arrow;


// const p = ('#sc-'.length);
// console.log(p)
//  const i = '';
//      for(i=0; i<=p; i++) {

//      }
//  const handleClickArrow = () => {
  
//      const ar = [
//          'sc-1',
//          'sc-2',
//          'sc-3',
//          'sc-4',
//          'sc-5',
//          'sc-6',
//          'sc-7',
//      ]
     
//      for(let i=0; i <= ar.length; i++){
//          console.log(ar[i])
//      }
//       const result = ar.map((val,index)=>{
//             return({val,index})
//      })
//          console.log(result);
//          return result;
//  }
//  const set = () =>{
//      setState(handleClickArrow)
//  }
//  const [state, setState] = useState(handleClickArrow)

//  window.addEventListener('scroll', function(){
//      document.querySelector('in_arrow').innerHTML = window.pageYOffset + 'px';
//  })