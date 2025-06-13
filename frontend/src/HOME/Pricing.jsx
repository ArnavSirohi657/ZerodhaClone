export default function Pricing(){
    return(
        <div className="container" style={{marginTop:"130px"}}>
            <div className="row">
                <div className="col">
                    <h1 className="fs-3">Unbeatable pricing</h1>
                    <p className="mt-4">
                        We pioneered the concept of discount broking and price <br />
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="">See pricing➟</a>
                </div>

                <div className="col ">
                    <div className="row text-center">
                        <div className="col border p-4" style={{ minHeight: "150px" }}>
                            <h2>₹0</h2>
                            <p className="mb-0">Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border p-5" style={{ minHeight: "200px" }}>
                            <h2>₹20</h2>
                            <p className="mb-0">Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
