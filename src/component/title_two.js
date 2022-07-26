import Header from "../component/header";
function TitleTwo(){

    const handleClick = () =>{

    }
    return(
        <div className="title-two title_section category-title'" id="sc-5">
            <Header/>
            <div className="inside-title">
                <h2>
                    “In the first workshop, we quickly set the direction 
                    <br></br>for our values,creative style, and language. 
                    <br></br>This set a strong foundation for thework, and we're
                    <br></br> thrilled with our new identity.”
                </h2>
                <h4>Justin McCamish & John McKeever</h4>
                <p>Co-Founders & Directors at Data Migrators</p>
                <button type="button" onClick={handleClick}>See the case study</button>
            </div>
        </div>
    )
}
export default TitleTwo;