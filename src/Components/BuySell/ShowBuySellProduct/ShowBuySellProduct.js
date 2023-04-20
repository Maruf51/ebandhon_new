import { useState } from 'react'
import { FaTimes } from 'react-icons/fa';
import './ShowBuySellProduct.css'

const ShowBuySellProduct = (props) => {
    const {name, email, location, number, productName, facebook, productUsedTime, productPrice, productDetails, productImage} = props.product

    const [modalOpen, setModalOpen] = useState(false)
    return (
        <>
            <div className='show_used_product'>
                <img src={props.product.productImage[0]} alt="" />
                <h3 className='buy_sell_name'>{productName}</h3>
                <p className='buy_sell_price'>৳ {productPrice}</p>
                <button onClick={e => setModalOpen(true)} className="btn buy_sell_show_details_btn">Details</button>
            </div>
            {
                modalOpen === true && <div className="show_buy_sell">
                    <div className="show_buy_sell_in">
                        <FaTimes onClick={e => {
                            setModalOpen(false)
                            props.setSecondModal(true)
                        }} className='UUP_close SBS_close' />
                        <div className="SBS_left">
                            {
                                productImage.map(productImage => <img className='SBS_image' src={productImage} title={Image} />)
                            }
                        </div>
                        <div className="SBS_right">
                            <div className="SBS_right_item">
                                <p>Seller Name</p>
                                <span>{name}</span>
                            </div>
                            <div className="SBS_right_item">
                                <p>Contact Email</p>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                            <div className="SBS_right_item">
                                <p>Contact Number</p>
                                <a href={`tel:${number}`}>{number}</a>
                            </div>
                            <div className="SBS_right_item">
                                <p>Location</p>
                                <span>{location}</span>
                            </div>
                            <div className="SBS_right_item">
                                <p>Facebook Link</p>
                                <a href={facebook} target="_blank">{facebook}</a>
                            </div>
                            <div className="SBS_right_item">
                                <p>Product Name</p>
                                <span>{productName}</span>
                            </div>
                            <div className="SBS_right_item">
                                <p>Product Used Time</p>
                                <span>productUsedTime</span>
                            </div>
                            <div className="SBS_right_item">
                                <p>Product Price</p>
                                <span>{productPrice}</span>
                            </div>
                            <div className="SBS_right_item">
                                <p>Product Details</p>
                                <span>{productDetails}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ShowBuySellProduct;