import "../../App.css";
import user4 from "../../assets/images/42.jpg"; 

const Secondseg = () => {
    const industries = ["Healthcare", "Automotive", "Banking", "Capital Markets", "Travel", "Digital Commerce"];

    return (
        <div className="second-segment-container">
            <div className="content-section">
                <h1>Scale your team with Talrn's <br /> immediately available resources</h1>
                <p>Find pre-vetted iOS developers that have previously worked in the same industry instantly.</p>
                <h3>What is your industry?</h3>
                <div className="industries-container">
                    {industries.map((industry, index) => (
                        <span key={index} className="industry-tag">{industry}</span>
                    ))}
                </div>
            </div>
            <div className="image-grid-section">
               <img src={user4}/>
            </div>
        </div>
    );
}

export default Secondseg;