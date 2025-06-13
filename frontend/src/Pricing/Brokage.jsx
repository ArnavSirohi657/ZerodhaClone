export default function Brokage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mb-5 text-center" style={{ fontSize: "25px", color: "rgb(99, 99, 241)" }}>Brokerage calculator</h1>
                    <ul style={{ listStyleType: "disc" }}>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px" }} className="mb-2 text-muted">Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px"}} className="mb-2 text-muted">Digital contract notes will be sent via e-mail.</li>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px" }} className="mb-2 text-muted">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px" }} className="mb-2 text-muted">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity.</li>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px" }} className="mb-2 text-muted">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li style={{ whiteSpace: "nowrap", fontSize:"15px" }} className="mb-2 text-muted">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
                    </ul>
                </div>
                <div className="col" >
                    <h1 style={{ fontSize: "25px", color: "rgb(99, 99, 241)" }}>List of charges</h1>
                </div>
            </div>
        </div>
    );
}
