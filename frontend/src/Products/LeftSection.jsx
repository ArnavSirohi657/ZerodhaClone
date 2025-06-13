export default function LeftSection({
    imageUrl,
    ProductName,
    ProductDesc,
    tryDemo,
    learnMore,
    googlePlay,
    appleStore
}){
    return(
        <div className="container">
            <div className="row">

                <div className="col-4 p-3">
                <img src={imageUrl}></img>
                </div>

                <div className="col"></div>
                <div className="col-4 text-muted" style={{paddingTop:"89px"}}>
                    <h1>{ProductName}</h1>
                    <p className="bt-3"style={{paddingTop:"27px"}}>{ProductDesc}</p>
                    <a href={tryDemo}style={{paddingRight:"40px"}}>try Demo</a>
                    <a href={learnMore}>Learn More</a>
                    <hr style={{visibility:"hidden"}}/>
                    <a href={googlePlay}style={{paddingRight:"40px"}}><img src="/googlePlayBadge.svg"></img></a>
                    <a href={appleStore}><img src="/googlePlayBadge.svg"></img></a>
                </div>
            </div>
        </div>
    )
}