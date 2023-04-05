import imgls from "../assets/images/f1.svg";
import imglss from "../assets/images/f2.svg";
import imglsss from "../assets/images/f3.svg";
import imglssss from "../assets/images/f4.svg";

const Footer = () => {
    return (
        <>
        <footer className="site_footer">

        <div className="container">
           
          <div className="footer_wrapper">
            <ul className="footer_item">
                <li><a href="#"><img src={imgls} alt="" /></a></li>
                <li><a href="#"><img src={imglss} alt="" /></a></li>
                <li><a href="#"><img src={imglsss} alt="" /></a></li>
                <li><a href="#"><img src={imglssss} alt="" /></a></li>
                
            </ul>
            <p>Copyright ©{new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
        </footer>


        </>
    )
}
export default Footer;