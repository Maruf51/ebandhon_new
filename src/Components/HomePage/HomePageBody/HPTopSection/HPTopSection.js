import React, { useContext } from 'react';
import './HPTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
// import MSI1 from "../../../../images/main slider/Untitled.jpg"
// import MSI2 from "../../../../images/main slider/Untitled (1).jpg"
// import MSI3 from "../../../../images/main slider/Untitled (2).jpg"
// import MSI4 from "../../../../images/main slider/Untitled (3).jpg"
// import MSI5 from "../../../../images/main slider/Untitled (4).jpg"
// import ms from '../../../../images/main slider/Animel_slider.jpeg'
// import ms1 from '../../../../images/main slider/Body_Care_slider.jpeg'
import reseller from '../../../../images/main slider/reseller.jpg'
import buy_sell from '../../../../images/main slider/buy_sell.jpg'
import job from '../../../../images/main slider/job.jpg'
// import ms2 from '../../../../images/main slider/Bondon_food_slider.jpeg'
// import ms3 from '../../../../images/main slider/Electronics__slider.jpeg'
// import ms4 from '../../../../images/main slider/Grocery__slider.jpeg'
// import ms5 from '../../../../images/main slider/Home_Appliance_Slider.jpeg'
// import ms6 from '../../../../images/main slider/Laptop_Slider.jpeg'
// import ms7 from '../../../../images/main slider/Motorbike_Slider.jpeg'
// import ms8 from '../../../../images/main slider/Smart_Phone_Slider.jpeg'
// import ms9 from '../../../../images/main slider/Smart_Tv_Slider.jpeg'
// import ms10 from '../../../../images/main slider/Tours and Travels_Slider.jpeg'
// import ms11 from '../../../../images/main slider/Woman__slider.jpeg'
import newSlider1 from '../../../../images/main slider/ebandhon_slider.jpg'
import newSlider2 from '../../../../images/main slider/advisor_slider.jpg'
import SSI1 from "../../../../images/2nd Slider/2ndSlider (1).jpg"
import SSI2 from "../../../../images/2nd Slider/2ndSlider (2).jpg"
import SSI3 from "../../../../images/2nd Slider/2ndSlider (3).jpg"
import SSI4 from "../../../../images/2nd Slider/2ndSlider (4).jpg"
import SSI5 from "../../../../images/2nd Slider/2ndSlider (5).jpg"
import SSI6 from "../../../../images/2nd Slider/2ndSlider (6).jpg"
import { Link } from 'react-router-dom';


const HPTopSection = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // className: "center",
        // centerMode: true,
        // centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
      };
      const settings2 = {
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                speed: 1000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2500,
                pauseOnHover: true,
              }
            }
        ]
      };

    return (
        <div className="home_page_top_section">
            <div className="categories_side HP_top_section_categories ">
                {/* <Link to="/category/Animal Food" className="categories_single_name">
                    <a href="z#">Accessories</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <div className="categories_single_name">
                    <a>Motor Bike/Car</a>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <div className="sub_categories">
                        <Link to="/category/Motor Bike" className="sub_category">
                            <a href="#c">Motor Bike</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link to="/category/Car" className="sub_category">
                            <a href="#c">Car</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                </div>
                <div className="categories_single_name">
                    <a>Electronics</a>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <div className="sub_categories">
                        <Link to="/category/Refrigerator" className="sub_category">
                            <a href="#c">Refrigerator</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link to="/category/Air-Conditioner" className="sub_category">
                            <a href="z#">Air-Conditioner</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                </div>
                <Link to="/category/Smart & Android TV" className="categories_single_name">
                    <a href="#c">Smart & Android TV</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <div className="categories_single_name">
                    <a>Laptop/Desktop</a>
                    <FontAwesomeIcon icon={faCaretRight} />
                    <div className="sub_categories">
                        <Link to="/category/Laptop" className="sub_category">
                            <a href="#c">Laptop</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                        <Link to="/category/Desktop" className="sub_category">
                            <a href="z#">Desktop</a>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>
                </div>
                <Link to="/category/Grocery" className="categories_single_name">
                    <a href="#z">Grocery</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Smart Phone" className="categories_single_name">
                    <a href="#z">Smart Phone</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Men" className="categories_single_name">
                    <a href="#z">Men</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Women" className="categories_single_name">
                    <a href="#z">Women</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Cosmetics" className="categories_single_name">
                    <a href="#z">Cosmetics</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Accessories" className="categories_single_name">
                    <a href="#z">Accessories</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Tours & Travel" className="categories_single_name">
                    <a href="#z">Tours & Travel</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Bandhon Food" className="categories_single_name">
                    <a href="z#">Bandhon Food</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Beauty & Body Care" className="categories_single_name">
                    <a href="z#">Beauty & Body Care</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link> */}
                <Link to="/category/Men's wear" className="categories_single_name">
                    <a href="#">Men's wear</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Women's wear" className="categories_single_name">
                    <a href="#">Women's wear</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Accessories" className="categories_single_name">
                    <a href="#">Accessories</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Grocery" className="categories_single_name">
                    <a href="#">Grocery</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Electronics" className="categories_single_name">
                    <a href="#">Electronics</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Cosmetics" className="categories_single_name">
                    <a href="#">Cosmetics</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/Winter Collection" className="categories_single_name">
                    <a href="#">Winter Collection</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
                <Link to="/category/EID Collection" className="categories_single_name">
                    <a href="#">EID Collection</a>
                    <FontAwesomeIcon icon={faAngleRight} />
                </Link>
            </div>
            <div className="two_carousel">
                <div className="main_carousel_side">
                    <Slider {...settings}>
                        <div>
                            <Link to="/"><img src={newSlider1} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/"><img src={reseller} alt="" /></Link>
                        </div>
                        {/* <div>
                            <Link to="/used-products"><img src={buy_sell} alt="" /></Link>
                        </div> */}
                        {/* <div>
                            <Link to="/freelancer"><img src={job} alt="" /></Link>
                        </div> */}
                        {/* <div>
                            <Link to="/category/Animal Food"><img src={ms} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Beauty & Body Care"><img src={ms1} alt="" /></Link>
                        </div> */}
                        {/* <div>
                            <Link to="/category/Bandhon Food"><img src={ms2} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Refrigerator"><img src={ms3} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Grocery"><img src={ms4} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Home Appliance"><img src={ms5} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Laptop"><img src={ms6} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Motor Bike"><img src={ms7} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Smart Phone"><img src={ms8} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Smart & Android TV"><img src={ms9} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Tours & Travel"><img src={ms10} alt="" /></Link>
                        </div>
                        <div>
                            <Link to="/category/Woman"><img src={ms11} alt="" /></Link>
                        </div> */}
                    </Slider>
                </div>
                {/* <div className="second_carousel_side">
                    <Slider {...settings2}>
                        <div>
                            <img src={SSI1} alt="" />
                        </div>
                        <div>
                            <img src={SSI2} alt="" />
                        </div>
                        <div>
                            <img src={SSI3} alt="" />
                        </div>
                        <div>
                            <img src={SSI4} alt="" />
                        </div>
                        <div>
                            <img src={SSI5} alt="" />
                        </div>
                        <div>
                            <img src={SSI6} alt="" />
                        </div>
                    </Slider>
                </div> */}
            </div>
        </div>
    );
};

export default HPTopSection;