import './../../assets/css/Footer.css';
const Footer = () => {
    return (
        <div className="container footing">
            <div className="icon">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-google"></i>
                <i className="bi bi-youtube"></i>
            </div>
            <div className="NavFooter">
                <p className="Redirect">Home</p>
                <p className="Redirect">News</p>
                <p className="Redirect">About</p>
                <p className="Redirect">Contact Us</p>
                <p className="Redirect">Our Team</p>
            </div>
        </div>
    )
}
export default Footer;