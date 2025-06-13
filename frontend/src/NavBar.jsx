import { Link } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import AboutPage from "./About/AboutPage";
import ProductPage from "./Products/ProductPage";
import PricingPage from "./Pricing/PricingPage";
import SupportPage from "./Support/SupportPage";
export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/logo.svg" style={{ width: "50%" }} />
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse pe-5" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto me-3 gap-5">
                        <Link className="nav-link text-dark" to="/signUp">Signup</Link>
                        <Link className="nav-link text-dark" to="/about">About</Link>
                        <Link className="nav-link text-dark" to="/product">Products</Link>
                        <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
                        <Link className="nav-link text-dark" to="/support">Support</Link>
                        <Link className="nav-link text-dark" to="#">☰</Link>
                        
                    </div>
                </div>
            </div>
        </nav>
    );
}
