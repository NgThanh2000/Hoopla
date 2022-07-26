
import './App.css';
import './css/all_css.css';
// import Header from './component/header';
import Footer from './component/footer';
import Title from './component/title';
import TitleTwo from './component/title_two';
import TitleThree from './component/title_three';
import ImageBg from './component/image_bg';
import Describe from './component/describe';
import Brand from './component/brand';
import Gallery from './component/gallery';
import Arrow from './component/arrow_down';

// import '<pathToYourLoader>/loader.js'

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Title/>
        <Gallery/>
        <Describe/>
        <ImageBg/>
        <TitleTwo/>
        <Brand/>
        <TitleThree/>
        <Footer/>
        <Arrow />
    </div>
  );
}

export default App;
