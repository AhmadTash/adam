import './LandingPage.css';
import firstPic from '../assets/firstPic.jpg'
import secondPic from '../assets/secondPic.jpg'
import thirdPic from '../assets/thirdPic.jpg'
import elipse from '../assets/Ellipse1.svg'
import aboutAdamPic from '../assets/aboutAdamsvg.svg'
import LandingPic from '../assets/Frame9.svg'

export default function LandingPage() {
    return (
        <>
         <section className="container-fluid row landingpageFirstSecContainer">
            <div className="col text-light landingFirstLeft d-flex flex-column justify-content-center gap-4">
                <h2>Achieve your fitness goals with <span className='highlight'>precision</span> and <span className='highlight'>passion</span></h2>
                <p>start your journey to a stronger, healthier you today with Adam Douqa</p>
                <a className="nav-link getStartedBtn" href="" >Get Started</a>
            </div>
            <div className="col landingFirstRight d-flex justify-content-end">
                <img src={LandingPic} alt="" />
            </div>
         </section>
         <section className='contianer-fluid mt-4 landingpageSecondSecContainer'>
            
            <h2 className='text-center mb-4'>What we provide</h2>
            <div className='d-flex gap-3'>
                <div className="card borderActive">
                    <img className='card-img-top' src={firstPic} alt="" />
                    <div className="card-body">
                        <div className="card-title">Meal Plans</div>
                        <div className="card-text">Fuel your fitness goals with our convenient and nutritious meal plans, designed to support your active lifestyle and optimize performance</div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-img-top' src={secondPic} alt="" />
                    <div className="card-body">
                        <div className="card-title">Workout Program</div>
                        <div className="card-text">Discover our results-driven workout programs tailored to your fitness level and goals, to maximize your strength, endurance, and overall wellness</div>
                    </div>
                </div>
                <div className="card">
                    <img className='card-img-top' src={thirdPic} alt="" />
                    <div className="card-body">
                        <div className="card-title">Free Consultation</div>
                        <div className="card-text">Book your free consultation with our experienced physiotherapists today. Let us help you regain mobility, relieve pain, and achieve optimal physical health</div>
                    </div>
                </div>
            </div>
            
         </section>
         <section className='contianer-fluid my-5 landingpageThirdSecContainer'>
            <div className='row'>
                <div className='col-7 d-flex flex-column justify-content-center gap-3'>
                    <h2 style={{fontSize: "40px"}}>About <span className='highlight'>Adam Douqa</span></h2>
                    <p style={{fontSize: "20px"}}>Adam Douqa, a physiotherapy graduate from Medipol University in Istanbul, is passionate about fitness and bodybuilding. Certified in Chinese needles therapy, he has honed his skills through training at various hospitals across Istanbul. Adam is recognized for his ability to achieve remarkable body transformation results, earning satisfaction from numerous client</p>
                </div>
                <div className='col-5'>
                    <img src={aboutAdamPic} alt="" />
                </div>
            </div>
         </section>
        </>
       
    )
}