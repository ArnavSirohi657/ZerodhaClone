export default function RightSection({
    ProductName,
    ProductDesc,
    LearnMore,
    imageUrl
}){
    return(
       <div className="container">
        <div className="row">
            <div className="col" style={{paddingTop:"160px"}}>
                <h1>{ProductName}</h1>
                <p>{ProductDesc}</p>
                <a href={LearnMore}>Learn More</a>
            </div>
            <div className="col">
            <img src={imageUrl}></img>
            </div>
        </div>
       </div>
    )
}