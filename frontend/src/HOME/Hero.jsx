import '../Css/HeroHomePage.css';

export default function Hero(){
    return(
        <div className="container  ">
            <div className="row text-center ">
                <img src="/homeHero.png" className="mb-5"></img>
                <h1 className="mt-4"> Invest in everything</h1>
                <p className="fs-4 mb-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="button-1 p-2 btn btn-primary mb-5" >Sign up</button>
            </div>

        </div>
    )
}