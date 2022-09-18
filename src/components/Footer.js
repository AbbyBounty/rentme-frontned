

const Footer = () => {
    return (
        <footer id="footer" className="footer pt-100 pb-70 mt-20 mb-0 bootom-0 ">
            <div className="footer-shape">
                <img src="assets/img/footer/footer-left.svg" alt="" className="shape shape-1" />
                <img src="assets/img/footer/footer-right.svg" alt="" className="shape shape-2" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                            <div className="logo">
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <h3 className="wow fadeInUp ml-2 mt-1 text-purple-500" >LeasePe.com</h3>
                            </div>
                            <div className="download-btns">
                                <a href="javascript:void(0)">
                                    <span className="icon"><i className="lni lni-apple"></i></span>
                                    <span className="text">Download on the <b>App Store</b> </span>
                                </a>
                                <a href="javascript:void(0)">
                                    <span className="icon"><i className="lni lni-play-store"></i></span>
                                    <span className="text">GET IT ON <b>Play Store</b> </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                            <h5 className="text-pink">About Us</h5>
                            <ul className="links pl-0">
                                <li>
                                    <a href="javascript:void(0)">Home</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Services</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">About Us</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".6s">
                            <h5 className="text-pink">About</h5>
                            <ul className="links pl-0">
                                <li>
                                    <a href="javascript:void(0)">Partners</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Terms of Service</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Refund Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget wow fadeInUp" data-wow-delay=".8s">
                            <h5 className="text-pink">Support</h5>
                            <ul className="links pl-0">
                                <li>
                                    <a href="javascript:void(0)">Open Ticket</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Community</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Return Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Accessibility</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer