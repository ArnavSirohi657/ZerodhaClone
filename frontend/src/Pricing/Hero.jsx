export default function Hero() {
    return (
        <div className="container">
            <h1 className="text-center mt-5 mb-3" >Charges</h1>    
            <h2 className="text-center text-muted fs-4">List of charges and taxes</h2>
            <div className="row" style={{ paddingTop: "150px", paddingLeft:"100px"}}>
                <div className="col">
                    <img src="/pricing0.svg" style={{width:"50%"}} className="mb-4" alt="Free equity delivery" />
                    <h1 style={{ fontSize: "30px" }} className="mb-5">Free equity deliver</h1>
                    <p>
                        All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
                    </p>
                </div>
                <div className="col">
                    <img src="/20Rs.svg" className="mb-4"style={{width:"50%"}} alt="Intraday and F&O" />
                    <h1 style={{ fontSize: "30px" }} className="mb-3">Intraday and F&O trades</h1>
                    <p >
                        Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,
                        currency, and commodity trades. Flat ₹20 on all option trades.
                    </p>
                </div>
                <div className="col">
                    <img src="/pricing0.svg" className="w-50 mb-4" alt="Free direct MF" />
                    <h1 style={{ fontSize: "30px" }} className="mb-5">Free direct MF</h1>
                    <p>
                        All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}
