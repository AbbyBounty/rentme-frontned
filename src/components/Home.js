import CategoryList from "./Categorylist";
import Search from "./Search";
import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Home() {


  const cartItems = useSelector((state) => {
    console.log("🚀 ~ file: Home.js ~ line 14 ~ cartItems ~ state", state)

    return state.cartItems
  })
  useEffect(() => {
    toast.success(`Welcome `)
  }, [])
  return (
    <div className="App">
      <div className="">
        <div className="">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <section id="home" className="hero-section pt-0">
        <div className="hero-shape">
          <img src="assets/img/hero/hero-shape.svg" alt="" className="shape" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">Rent it Out  </h1>
                <p className="wow fadeInUp font-medium	" data-wow-delay=".4s">
                  India’s leading rental platform brings the latest Furniture to Pune. High-quality Furniture at super affordable Monthly Rates. Choose your Delivery Slot. 24/7 Customer Support. Return Anytime. 72 - Hour Delivery. Easy Customer KYC. Free Relocation. 7 - Day Free Trial.
                </p>
              </div>
            </div>
            <div className="flex  col-lg-6  ">
              <img src="assets/img/common/home.png" alt="" />

            </div>

          </div>
        </div>
      </section>


      <section id="home" className="hero-section pt-0">
        <div className="container">
          <div className="row align-items-center">

            <div className="flex  col-lg-6  ">
              <img src="assets/img/common/buy.png" alt="" />


            </div>

            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp  text-pink" data-wow-delay=".2s">Why to buy when you can Rent it !!!   </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  <ol className="font-bold " >
                    <li>Finest-quality products ✅</li>
                    <li>Free relocation ✅</li>
                    <li>Free maintenance ✅</li>
                    <li>Cancel anytime ✅</li>
                    <li>Easy return on delivery ✅</li>


                  </ol>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* <section id="services" className="service-section pt-100 wow fadeInUp" data-wow-delay=".2s">
        <h1 className="wow fadeInUp text-pink " data-wow-delay=".2s">Why to buy when you can Rent it !!!  </h1>

        <div className="flex  col-lg-6  ">

            </div>
      </section> */}

      <section id="services" className="service-section pt-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-70">
                <span className="wow fadeInUp" data-wow-delay=".2s">Rental Services</span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">Explore all Essentials You Need from 1-6 months </h1>
              </div>
            </div>
          </div>
          <CategoryList />
        </div>
      </section>


      <section id="about" className="about-section pt-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/about/about-img.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div className="section-title">
                  <span className="wow fadeInUp" data-wow-delay=".2s">About Us</span>
                  <h1 className="wow fadeInUp" data-wow-delay=".4s">On-time Delivery and Customer Satisfaction</h1>
                  <p className="wow fadeInUp" data-wow-delay=".6s">We deliver any product everywhere in Pune, including all the major areas like Baner, Koregaon Park, Kalyani Nagar, and Kothrud. Delivery and installation is completely free and will be carried out as per your convenience. The rental process is transparent and you can choose to opt out at any time. The minimum furniture rental tenure is 3 months.</p>
                </div>
                <div className="rating-meta d-flex align-items-center wow fadeInUp" data-wow-delay=".65s">
                  <h5>Rating 4.8</h5>
                  <div className="rating">
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                    <i className="lni lni-star-filled"></i>
                  </div>
                </div>
                <div className="counter-up wow fadeInUp" data-wow-delay=".8s">
                  <div className="single-counter">
                    <h3 id="secondo1" className="countup" >1M</h3>
                    <h5>Download</h5>
                  </div>
                  <div className="single-counter position-relative">
                    <h3 id="secondo2" className="countup">234k </h3>
                    <h5>Happy User</h5>
                  </div>
                  <div className="single-counter">
                    <h3 id="secondo3" className="countup" >34k </h3>
                    <h5>Reviews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="how" className="delivery-section pt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="delivery-content">
                <div className="section-title">
                  <span className="wow fadeInUp" data-wow-delay=".2s">Fast Delivery</span>
                  <h1 className="mb-35 wow fadeInUp" data-wow-delay=".4s">Order Now, Recieve Within 1-2 Days</h1>
                  <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">Renting from <Link target={"_blank"}>LeasePe.com</Link> saves you a massive amount of time and money. We have furniture for every need. We can provide a bedside table for your bedroom as well as a desk for your study.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 order-first order-lg-last">
              <div className="delivery-img wow fadeInUp" data-wow-delay=".5s">
                <img src="assets/img/delivery/delivery2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id="testimonial" className="testimonial-section img-bg pt-50">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title mb-60 text-center">
                <span className="wow fadeInUp" data-wow-delay=".2s">Testimonials</span>
                <h1 className="wow fadeInUp" data-wow-delay=".4s">What Our Users Says</h1>
              </div>
            </div>
          </div>
          <div className="row testimonial-wrapper">
            <div className="col-lg-4 col-md-6 -mt-30">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-1.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Ena Shah</h5>
                    <p>Teacher at Abc School</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-60">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-2.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Mrs. Gosh</h5>
                    <p>Actor</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-3.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>John Doe</h5>
                    <p>Model</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-30">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".2s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-4.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Jonathan Smith</h5>
                    <p>Creative Designer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 -mt-60">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".4s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-5.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>Sara A. K.</h5>
                    <p>Heroine</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-testimonial wow fadeInUp" data-wow-delay=".6s">
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>Lorem ipsum dolor sit amet onsetetur sadipscing elitr, sed diam non eirmod tempor invidunt ut labore etdo magna aliquyam erat, sed diam vero eos et accusam et justo duo dolores et ea rebum clita kasd gubergren.</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src="assets/img/testimonial/testimonial-6.png" alt="" />
                  </div>
                  <div className="text">
                    <h5>David Smith</h5>
                    <p>Businessman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>










    </div>
  );
}

export default Home