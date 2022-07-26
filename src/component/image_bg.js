import img_bg from '../assets/image/img_bg.png'
import Header from '../component/header';
function ImageBg(){

    return(
        <div className="image_bg category-title'" id="sc-4">
            <Header/>
            <img src={img_bg} alt="image_background"/>
        </div>
    )
}
export default ImageBg;