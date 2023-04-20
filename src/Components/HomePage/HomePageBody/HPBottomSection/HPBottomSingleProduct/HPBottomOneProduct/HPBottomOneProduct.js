import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './HPBottomOneProduct.css';
import defaultImage from '../../../../../../images/Spin-1.6s-200px.gif'
import { ResellerMail } from '../../../../../../App';

const HPBottomOneProduct = (props) => {
    const [reseller, setReseller] = useContext(ResellerMail)

    const {productImage, productName, productCategory, productBrand, productPrice, productDiscount, id, resellerPrice} = props.data;
    const [imageLoad, setImageLoad] = useState(false)
    return (
        <>
            <Link className="drag_scroll_product" to={`/product/${productCategory}/${id}`}>
                {/* <p className="product_dis_home">-{productDiscount}%</p> */}
                <img className="d-none" onLoad={() => setImageLoad(true)} src={productImage} alt="" />
                {
                    imageLoad ? <img src={productImage} alt="" /> : <img src={defaultImage} alt="" />
                }
                <p className='drag_scroll_product_product_name'>{productName}</p>
                <p className='drag_scroll_product_brand'>Brand: {productBrand}</p>
                <div className="drag_scroll_product_price">
                    {
                        reseller && <span title={productPrice}>৳ <del>{productPrice}</del></span>
                    }
                    {
                        reseller ? <span>৳ {resellerPrice}</span> : <span>৳ {productPrice}</span>
                    }
                </div>
            </Link>
        </>
    );
};

export default HPBottomOneProduct;