export default function Team() {
    return (
        <div className="container mx-auto" style={{ maxWidth: "900px" }}>
            <div className="row">
                <h1 style={{ textAlign: "center" }}>People</h1>
                <div className="col-md-5 mt-5 text-center">
                    <img
                        src="/nithinKamath.jpg"
                        style={{ borderRadius: "50%", width: "70%" }}
                        alt="Nithin Kamath"
                    />
                    <p>Nithin Kamath</p>
                    <p className="text-muted mt-2">Founder, CEO</p>
                </div>
                <div className="col-md-7 mt-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
    );
}
