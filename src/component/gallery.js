import g1 from '../assets/image/g1.png';
import g2 from '../assets/image/g2.png';
import g3 from '../assets/image/g3.png';
import g4 from '../assets/image/g4.png';
import g5 from '../assets/image/g5.png';

function Gallery(){

     return(
        <div className="gallery" id="sc-2">
            <div className="gallery_f gallery_hv">
                <img src={g1} alt="gallery_img"/>
                <div className="gallery_show">
                    <div className="gallery_show-text">
                        <div className='show-text'>
                            <h3>Vision Australia</h3>
                            <p>Re-imagined campaign for an iconic Melbourne event</p>
                        </div>    
                    </div>
                </div>
            </div>

            <div>
                <img src={g2} alt="gallery_img"/>
            </div>
            
            <div><img src={g3} alt="gallery_img"/></div>
            
            <div>
                <img src={g4} alt="gallery_img"/>
            </div>
            
            <div className="gallery_l gallery_hv">
                <img src={g5} alt="gallery_img"/>
                <div className="gallery_show">
                    <div className="gallery_show-text">
                        <div className='show-text'>
                            <h3>Data Migrators</h3>
                            <p>Rebrand of global specialists in data processing software</p>
                        </div>                      
                    </div>
                </div>
            </div>
        </div>
     )
}
export default Gallery;