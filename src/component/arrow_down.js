import React, {useState} from 'react';
import Vector from '../assets/image/Vector.png';

// import $ from 'jquery';

// let $categoryTitles = $('.category-title');
// let $output = $('#output');

// $(window).scroll(function() {
//     let $topCat = $categoryTitles.filter((i, el) =>
  
//     $(el).offset().top > $(window).scrollTop() + 30).first();
//     $output.text();
//     $output.attr('href', '#'+ $topCat.prop('id'));
//     console.log($(window).scrollTop());
// }).scroll();

function Arrow(){

    
    const array = [
        {id:1 , name: '#sc-1'},
        {id:2 , name: '#sc-2'},
        {id:3 , name: '#sc-3'},
        {id:4 , name: '#sc-4'},
        {id:5 , name: '#sc-5'},
        {id:6 , name: '#sc-6'},
        {id:7 , name: '#sc-7'},
    ];
    // const get = array.forEach(function(array,index,ar){
    //     console.log(array[1])
    // })

    const handleClickArrow = () => {
        if(state === ''){
            setState(array[0].name);
        }
        if(state === '#sc-1'){
            setState(array[1].name);
        }
        if(state === '#sc-2'){
            setState(array[2].name);
        }
        if(state === '#sc-3'){
            setState(array[3].name);
        }
        if(state === '#sc-4'){
            setState(array[4].name);
        }
        if(state === '#sc-5'){
            setState(array[5].name);
        }
        if(state === '#sc-6'){
            setState(array[6].name);
        }
        if(state === '#sc-7'){
            setState(array[0].name);
        }
    }

    const [state, setState] = useState('')

    return(
        <div className="arrow" >
            <div className="in_arrow">
                <a href= {state} id="output" onClick={handleClickArrow}>
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