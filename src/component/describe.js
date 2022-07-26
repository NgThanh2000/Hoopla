import Header from '../component/header';
import sh1 from '../assets/image/sh1.png';
import sh2 from '../assets/image/sh2.png';
import sh3 from '../assets/image/sh3.png';
import sh4 from '../assets/image/sh4.png';

function Describe(){
    return(
        <div className="describe category-title'" id="sc-3">
        <Header/>
            <div className="inside_describe">
                <div className="title_describe">
                    <h2>
                        We'll be invested in your brand beyond the brief. 
                        <br></br>We'll listen.Understand your audience and add 
                        <br></br>value. You can bank on it.
                    </h2>
                </div> 
                <div className="content_describe">
                    <div className="in_content">
                        <div className="in_content-img">
                            <img src={sh1} alt="sh1"/>
                        </div>
                        <div className="in_content-text">
                            <h3>Execution expertly handled</h3>
                            <p>Creative responses that rigorously answer your brief,
                            and are meticulously executed across all touchpoints — print, digital, 
                            campaign and motion.</p>
                        </div>                       
                    </div>
                    <div className="in_content">
                        <div className="in_content-img">
                            <img src={sh2} alt="sh2"/>
                        </div>
                        <div className="in_content-text">
                            <h3>Beautifully on-brand</h3>
                            <p>We breathe new life into brands by innovating elements that are working,
                            creating anything that's missing, and saying goodbye to what's holding it back.</p>
                        </div>
                    </div>
                    <div className="in_content">
                        <div className="in_content-img">
                            <img src={sh3} alt="sh3"/>
                        </div>
                        <div className="in_content-text">
                            <h3>Bang for your budget</h3>
                            <p>As an experienced, all-senior team, our streamlined approach means we can offer a lean rate card. 
                            Enjoy the big agency quality, without the big agency rates. </p>
                        </div>
                        
                    </div>
                    <div className="in_content">
                        <div className="in_content-img">
                            <img src={sh4} alt="sh4"/>
                        </div>
                        <div className="in_content-text">
                            <h3>Part of the team</h3>
                            <p>Collaborate with the same creative team day-in day-out.
                            A dedicated account manager will drive your projects,
                            leaving you with more time to focus on the big picture.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Describe;