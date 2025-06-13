export default function Hero() {
    return (
        <div
            style={{
                backgroundColor: "rgb(54, 114, 202)",
                width: "100%",
                minHeight: "420px",
                padding: "50px 0",
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 style={{ fontSize: "30px", color: "white", marginBottom: "30px" }}>
                            Support Portal
                        </h1>
                        <h1 style={{ fontSize: "20px", color: "white" }}>
                            Search for an answer or browse help topics to create a <br /> ticket
                        </h1>
                        <input type="text" className="form-control " placeholder="Eg: how do i activate F&O, why is my order getting rejected..." style={{ marginTop: "50px", width: "100%", height: "26%" }} />
                        
                        <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                            <a href="#" style={{ color: "white", textDecoration: "underline", whiteSpace: "nowrap" }}>
                                Track account opening
                            </a>
                            <a href="#" style={{ color: "white", textDecoration: "underline", whiteSpace: "nowrap" }}>
                                Track segment activation
                            </a>
                            <a href="#" style={{ color: "white", textDecoration: "underline", whiteSpace: "nowrap" }}>
                                Intraday margins
                            </a>
                        </div>

                        
                        <div style={{ marginTop: "5px" }}>
                            <a href="#" style={{ color: "white", textDecoration: "underline" }}>
                                Kite user manual
                            </a>
                        </div>

                    </div>

                    <div className="col">
                        <h1 style={{ fontSize: "20px", color: "white", marginBottom: "30px", marginLeft: "300px" }} ><a href="" style={{ color: "white" }}>Track tickets</a></h1>
                        <br />  <br />  <br />
                        <h2 style={{ fontSize: "20px", color: "white" }}>Featured</h2>
                        <ol>
                            <li>
                                <a href="#" style={{ color: "white", }}>
                                    Latest Intraday leverages and Square-off timings
                                </a>
                            </li>
                            <br />
                            <li>
                                <a href="#" style={{ color: "white", }}>
                                    Offer for sale (OFS) – May 2025
                                </a>
                            </li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    );
}