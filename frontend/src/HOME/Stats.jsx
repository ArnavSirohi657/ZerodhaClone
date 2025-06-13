export default function Stats(){
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col p-3">
                    <h1 className="mb-5 fs-3" >Trust with confidence</h1>


                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="mb-3 text-muted fs-6" style={{maxWidth:"400px",lineHeight:"1.8"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>


                    <h2 className="fs-4" style={{maxWidth:"250px",lineHeight:"1.8"}}>No spam or gimmicks</h2>
                    <p className="mb-3 text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>


                    <h2 className="fs-4">The universe</h2>
                    <p className="mb-3 text-muted"style={{maxWidth:"400px",lineHeight:"1.8"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>


                    <h2 className="fs-4">Do better with money</h2>
                    <p className="mb-3 text-muted" >With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col">
                    <img src="/ecosystem.png" style={{width:"93%"}}></img>
                    <div className="text center">
                        <a href="" className="rp:4 p-5" style={{textDecoration:"none"}}>Explores our products➟</a>
                        
                        <a href=""  style={{textDecoration:"none"}}>Try kite demo➟</a>
                    </div>
                </div>
            </div>
        </div>
    )
}