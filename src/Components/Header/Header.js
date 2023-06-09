import React, { useContext, useState } from 'react';
import './Header.css';
import { Cart, Person } from 'react-bootstrap-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faAngleRight, faTimes, faCaretRight, faPhoneAlt, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png'
import { Link, useLocation } from 'react-router-dom';
import useLocalStorage from '../LocalStorage/LocalStorage'
import { CartProducts, CategoryOpen, UserData } from '../../App';
import OutsideClickHandler from 'react-outside-click-handler';
import AddNew from '../Freelancer/AddNew/AddNew';

const Header = () => {
    const location = useLocation()
    const [cartInfo, setCartInfo] = useContext(CartProducts)
    const [signedInUser, setSignedInUser] = useContext(UserData)
    const [loginData, setLoginData] = useLocalStorage('user_data', {})
    const [openHiddenCategory, setOpenHiddenCategory] = useState('')
    const [categoryOpen, setCategoryOpen] = useContext(CategoryOpen)
    const [profileClick, setProfileClick] = useState(false)
    const [paymentData, setPaymentData] = useLocalStorage('payment_data', {})
    const [campaignPaymentData, setCampaignPaymentData] = useLocalStorage('campaign_payment_data', {})

    const categoryToggler = () => {
        setCategoryOpen(false)
    }

    const logOutBtn = (e) => {
        e.preventDefault()
        setAdminSecret({status: false})
        setLoginData({isSignedIn: false})
        setPaymentData([])
        setCampaignPaymentData([])
        setProfileClick(!profileClick)
        window.location.reload()
    }

    const [adminSecret, setAdminSecret] = useLocalStorage('admin_secret', {})
    const clearSecretCode = () => {
        setAdminSecret({status: false})
    }
    return (
        <div className="header">
            {
                cartInfo?.admin && cartInfo.admin === true && <div className="admin_header container">
                    {/* <AddNew /> */}
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                    <Link to="/admin/upload/campaign">Upload Campaign</Link>
                    {
                        adminSecret.status && <button onClick={clearSecretCode} className="btn secret_code_btn">CLEAR SECRET CODE</button>
                    }
                </div>
            }
            <OutsideClickHandler onOutsideClick={() => {
                setCategoryOpen(false)
            }}>
                <div className={`category_left_hidden ${categoryOpen && 'category_open_active'}`}>
                    <div style={{position: 'relative'}}>
                        <FontAwesomeIcon onClick={() => setCategoryOpen(false)} className="cross_icon" icon={faTimes} />
                        <h1 className="category_left_h1">CATEGORIES</h1>
                        <div className="category_left_hidden_in">
                            {/* <Link onClick={categoryToggler} to="/category/Animal Food" className="categories_single_name_hidden">
                                <a href="#">Animal Food</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <div onClick={() => {
                                if (openHiddenCategory === 'driving') {
                                    setOpenHiddenCategory('')
                                }
                                else{
                                    setOpenHiddenCategory('driving')
                                }
                            }} className={`categories_single_name_hidden ${openHiddenCategory === 'driving' && 'categories_single_name_hovered'}`}>
                                <a href="#">Motor Bike/Car</a>
                                <FontAwesomeIcon className={`${openHiddenCategory === 'driving' && 'active_sub_category_arrow'}`} icon={faCaretRight} />
                            </div>
                            <div className={`hidden_sub_categories ${openHiddenCategory === "driving" && 'active_sub_category'}`}>
                                <Link onClick={categoryToggler} to="/category/Motor Bike" className="hidden_sub_category">
                                    <a href="#">Motor Bike</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link onClick={categoryToggler} to="/category/Car" className="hidden_sub_category">
                                    <a href="#">Car</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </div>
                            <div onClick={() => {
                                if (openHiddenCategory === 'electronics') {
                                    setOpenHiddenCategory('')
                                }
                                else{
                                    setOpenHiddenCategory('electronics')
                                }
                            }} className={`categories_single_name_hidden ${openHiddenCategory === 'electronics' && 'categories_single_name_hovered'}`}>
                                <a href="#">Electronics</a>
                                <FontAwesomeIcon className={`${openHiddenCategory === 'electronics' && 'active_sub_category_arrow'}`} icon={faCaretRight} />
                            </div>
                            <div className={`hidden_sub_categories ${openHiddenCategory === "electronics" && 'active_sub_category'}`}>
                                <Link onClick={categoryToggler} to="/category/Refrigerator" className="hidden_sub_category">
                                    <a href="#">Refrigerator</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link onClick={categoryToggler} to="/category/Air-Conditioner" className="hidden_sub_category">
                                    <a href="#">Air-Conditioner</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </div>
                            <Link onClick={categoryToggler} to="/category/Smart & Android TV" className="categories_single_name_hidden">
                                <a href="#">Smart & Android TV</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <div onClick={() => {
                                if (openHiddenCategory === 'computer') {
                                    setOpenHiddenCategory('')
                                }
                                else{
                                    setOpenHiddenCategory('computer')
                                }
                            }} className={`categories_single_name_hidden ${openHiddenCategory === 'computer' && 'categories_single_name_hovered'}`}>
                                <a href="#">Laptop/Desktop</a>
                                <FontAwesomeIcon className={`${openHiddenCategory === 'computer' && 'active_sub_category_arrow'}`} icon={faCaretRight} />
                            </div>
                            <div className={`hidden_sub_categories ${openHiddenCategory === "computer" && 'active_sub_category'}`}>
                                <Link onClick={categoryToggler} to="/category/Laptop" className="hidden_sub_category">
                                    <a href="#">Laptop</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                                <Link onClick={categoryToggler} to="/category/Desktop" className="hidden_sub_category">
                                    <a href="#">Desktop</a>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </Link>
                            </div>
                            <Link onClick={categoryToggler} to="/category/Grocery" className="categories_single_name_hidden">
                                <a href="#">Grocery</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Smart Phone" className="categories_single_name_hidden">
                                <a href="#">Smart Phone</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Men" className="categories_single_name_hidden">
                                <a href="#v">Men</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Women" className="categories_single_name_hidden">
                                <a href="#v">Women</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Cosmetics" className="categories_single_name_hidden">
                                <a href="#v">Cosmetics</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Accessories" className="categories_single_name_hidden">
                                <a href="#v">Accessories</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Tours & Travel" className="categories_single_name_hidden">
                                <a href="#v">Tours & Travel</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Bandhon Food" className="categories_single_name_hidden">
                                <a href="#v">Bandhon Food</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Beauty & Body Care" className="categories_single_name_hidden">
                                <a href="#v">Beauty & Body Care</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Home Appliance" className="categories_single_name_hidden">
                                <a href="#v">Home Appliance</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link> */}
                            <Link onClick={categoryToggler} to="/category/Men's wear" className="categories_single_name_hidden">
                                <a href="#v">Men's wear</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Women's wear" className="categories_single_name_hidden">
                                <a href="#v">Women's wear</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Accessories" className="categories_single_name_hidden">
                                <a href="#v">Accessories</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Grocery" className="categories_single_name_hidden">
                                <a href="#v">Grocery</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Electronics" className="categories_single_name_hidden">
                                <a href="#v">Electronics</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Cosmetics" className="categories_single_name_hidden">
                                <a href="#v">Cosmetics</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/Winter Collection" className="categories_single_name_hidden">
                                <a href="#v">Winter Collection</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                            <Link onClick={categoryToggler} to="/category/EID Collection" className="categories_single_name_hidden">
                                <a href="#v">EID Collection</a>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
            <div className="header_first">
                <div className="container">
                    <div className="header_top_dev_details">
                        <div className="contact_details">
                            {/* <a href="tel:01723892832"><FontAwesomeIcon className="header_contact_icon" icon={faPhoneAlt}/>+880 1723-892832</a> */}
                            <Link to={'/reseller'}>Make money with eBandhon</Link>
                            {/* <a className="email_ebandhon" href = "mailto:ebandhon@gmail.com"><FontAwesomeIcon className="header_contact_icon" icon={faUser}/>Regards Priom Mohanta || Managing Director Ebandhon</a> */}
                        </div>
                        <div className="header_login_btn">
                            {
                                signedInUser.isSignedIn === true && signedInUser.image ? <Link to={'/profile'}><span>{signedInUser.name}<img className="header_image" src={signedInUser.image} alt=""/></span></Link> : loginData.isSignedIn ? <Link to={'/profile'}><span>{loginData.name}<img className="header_image" src={loginData.image} alt=""/></span></Link> : <Link to={{ 
                                    pathname: `/signIn`,
                                    state: location.pathname
                                  }}><span>Login</span></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_second container">
                <div className="header_second_left">
                    <Link to="/"><img src={logo} alt="LOGO" className="logo" /></Link>
                    {/* <h1 className="logo_text">bandhon</h1> */}
                </div>
                <div className="header_second_right">
                    <div className="header_search_box">
                        <input id="search" type="text" placeholder="Search any brands or products..." name="search" />
                        <label htmlFor="search"><FontAwesomeIcon icon={faSearch} /></label>
                    </div>
                    <Link className="header_cart_icon header_right_svg" to="/page/cart"><Cart /><span className="cart_item_count_show">{cartInfo?.cartProducts ? `${cartInfo?.cartProducts.length}` : '0' }</span></Link>
                    <div className="profile_icon">
                    <OutsideClickHandler onOutsideClick={() => {
                        setProfileClick(false)
                    }}>
                        <Person onClick={() => setProfileClick(!profileClick)} className="header_profile_icon" />
                        <div className={`profile_dropdown ${profileClick === true && 'profile_dropdown_active'}`}>
                            <Link className="profile_drop_single" to="/profile">Profile</Link>
                                {
                                    loginData.uid ? <span onClick={(e) => logOutBtn(e)} className="profile_drop_single">Log Out</span> : <span className="profile_drop_single"><Link to="/signIn">Login</Link></span>
                                }
                        </div>
                    </OutsideClickHandler>
                    </div>
                </div>
            </div>
            <div className="header_third">
                <div className="container">
                    <div onClick={() => setCategoryOpen(!categoryOpen)}className="categories">
                        <FontAwesomeIcon icon={faBars} />
                        <h1>CATEGORIES</h1>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <div className="extra_nav">
                        <Link to="/reseller">Reseller</Link>
                        {/* <Link to="/job-circular">Job Circular</Link> */}
                        <Link to="/freelancer">Hire Freelancer</Link>
                        {/* <Link to="/hot-deal">Wait....</Link> */}
                        <Link to="/buy&sell">Buy & Sell</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;