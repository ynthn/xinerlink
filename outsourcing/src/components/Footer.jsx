import logoWhite from "../assets/logo-white.png";
import icoPhone from "../assets/ico-phone.png";
import icoInstagram from "../assets/ico-instagram.png";
import icoFacebook from "../assets/ico-facebook.png";
import icoLinkedin from "../assets/ico-linkedin.png";

function Footer() {

    return (
        <>
            <div className="box-footer grid grid-cols-11 gap-4 mt-20">
                <div className="col-span-1"></div>
                <div className="col-span-12 lg:col-span-3 m-auto lg:m-0">
                    <img src={logoWhite} className="w-fit max-w-52"></img>

                    <div className="mt-6">
                        <a className="footer-btn">CONTÁCTANOS</a>
                    </div>

                    <div className="footer-phone mt-6">
                        <img src={icoPhone} className="max-w-12 footer-phone-ico"></img> <span className="footer-phone-number">600 588 6000</span>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-3">
                    <div className="footer-rrss-title mt-10 mb-4">Síguenos</div>
                    <ul className="footer-rrss">
                        <li>
                            <a>
                                <img src={icoInstagram}></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={icoFacebook}></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={icoLinkedin}></img>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-span-12 lg:col-span-3 m-auto lg:m-0">
                    <a className="footer-rrss-link mt-10">Servicios Transitorios</a>
                    <a className="footer-rrss-link mt-4">Outsourcing</a>
                    <a className="footer-rrss-link mt-4">BPO</a>
                </div>
                <div className="col-span-1"></div>
            </div>
        </>
    )
}

export default Footer
