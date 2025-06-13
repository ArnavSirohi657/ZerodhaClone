export default function Award(){
    return(
        <div className="container  mt-5" >
            <div className="row">
                <div className="col-6 p-5 ">
                    <img src="/largestBroker.svg" className="img-fluid float-start "></img>
                </div>
                <div className="col-6 p-5 mt-3">
                <h1>Largest stock broker in India</h1>
                <p>2+ millon clients contribute to over 15% of all retail order volumes in India daily by trading and investing in :</p>
                <div className="row">
                    <div className="col mt-5">
                        <ul>
                            <li>
                                Futures and Options
                            </li>
                            <li>
                                Commodity derivates
                            </li>
                            <li>
                                Currency derivates
                            </li>
                        </ul>
                    </div>
                    <div className="col mt-5">
                    <ul>
                            <li>
                                Stocks & IPOs
                            </li>
                            <li>
                                Direct mutual funds
                            </li>
                            <li>
                                Bonds and controls
                            </li>
                        </ul>
                    </div>
                    <img src="/pressLogos.png"></img>
                </div>
                </div>
            </div>
        </div>
    )  
}