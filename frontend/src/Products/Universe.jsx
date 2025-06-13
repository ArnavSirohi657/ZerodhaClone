export default function Universe() {
    return (
        <div className="container py-5">
            <div className="row mb-5" style={{paddingBottom:"15px"}}>
                <div className="col text-center">
                    <h1 style={{ fontSize: "22px" }}>
                        Want to know more about our technology stack? Check out the{" "}
                        <a href="#" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog.
                    </h1>
                    <br/> <br/>
                    <h1 className="mt-5" style={{ fontSize: "30px" }}>
                        The Zerodha Universe
                    </h1>
                    <br/>  
                    <h2 className="text-muted" style={{ fontSize: "15px", paddingBottom:"50px" }}>
                        Extend your trading and investment experience even further with our partner platforms
                    </h2>
                </div>
            </div>

            {/* First Row of Images */}
            <div className="row text-center g-4 mb-4">
                <div className="col-md-4 col-sm-6">
                    <img src="/Fund.png" className="img-fluid" style={{ maxWidth: "60%" }} alt="Fund" />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="/Bull.svg" className="img-fluid" style={{ maxWidth: "60%" }} alt="Bull" />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="/tijori.svg" className="img-fluid" style={{ maxWidth: "30%" }} alt="Tijori" />
                </div>
            </div>

            {/* Second Row of Images */}
            <div className="row text-center g-4">
                <div className="col-md-4 col-sm-6">
                    <img src="/streak.png" className="img-fluid" style={{ maxWidth: "60%" }} alt="Streak" />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="/smallCase.png" className="img-fluid" style={{ maxWidth: "60%" }} alt="SmallCase" />
                </div>
                <div className="col-md-4 col-sm-6">
                    <img src="/ditto.png" className="img-fluid" style={{ maxWidth: "30%" }} alt="Ditto" />
                </div>
            </div>
            <div className="row " style={{paddingTop:"10%"}}>
                <div className="col text-center">
                    <button className="p-3" style={{backgroundColor:"#0096FF", width:"20%", fontSize:"20px", color:"#ffffff"}}>Sign Up for free</button>
                </div>
            </div>
        </div>
    );
}
