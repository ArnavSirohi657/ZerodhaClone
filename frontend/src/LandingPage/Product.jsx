import LeftSection from "../Products/LeftSection";
import RightSection from "../Products/RightSection";
import Hero from "../Products/Hero";
import Universe from "../Products/Universe";
export default function Product() {
    return (
        <div>
            <Hero />
            <br /><br /><br />
            <hr />
            <LeftSection
                imageUrl="/kite.png"
                ProductName="Kite"
                ProductDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                tryDemo="Try demo"
                learnMore="Learn more"
                googlePlay=""
                appleStore=""
            />

            <RightSection
                ProductName="Console"
                ProductDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                LearnMore="Learn More"
                imageUrl="/console.png"

            />


            <LeftSection
                imageUrl="/coin.png"
                ProductName="Coin"
                ProductDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                tryDemo="Coin"
                learnMore=""
                googlePlay=""
                appleStore=""
            />
            <br /> <br /> <br /> <br />
            <RightSection
                ProductName="Kite Connect API"
                ProductDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                LearnMore="Kite Connect"
                imageUrl="/Connect.png"
            />

            <br /> <br /> <br /> <br />
            <LeftSection
                imageUrl="/varsity.png"
                ProductName="Varsity mobile"
                ProductDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                tryDemo="Coin"
                learnMore=""
                googlePlay=""
                appleStore=""
            />
            <br /> <br /> <br />
            <Universe/>
        </div>
    )
}