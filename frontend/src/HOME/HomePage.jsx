import Footer from "../Footer"
import OpenAccount from "../OpenAccount"
import Award from "./Awards"
import Hero from "./Hero"
import NavBar from "../NavBar"
import Pricing from "./Pricing"
import Stats from "./Stats"
import Education from "./Education"
export default function HomePage(){
    return(
        <>
        
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
    )
}