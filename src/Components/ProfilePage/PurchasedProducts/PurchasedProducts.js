import './PurchasedProducts.css'
import { BsPlusLg } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import ShowPurchasedProducts from './ShowPurchasedProducts/ShowPurchasedProducts';


const PurchasedProducts = (props) => {
    const [productsShow, setProductShow] = useState(false)
    // console.log(props.index)

    const {date, status, cartProducts} = props.products
    // console.log(props.products)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        let box = document.querySelector(`.purchased_products_show_${props.index}`);
        let h = box.offsetHeight;
        setHeight(h+'px')
        // console.log(h);
    })

    const styles = {
        height: {
            height: height
        }
    }



    return (
        <>
            <div className={`purchased_products`}>
                <span className="purchased_products_date">{date}</span>
                <span className={`${status === 'pending' ? 'purchased_products_status_pending' : 'purchased_products_status_success'}`}>{status}</span>
                <BsPlusLg className='purchased_products_plus' onClick={(e) => setProductShow(!productsShow)} />
            </div>
            <div style={styles.height} className={`purchased_products_show ${productsShow === true && 'purchased_product_show_active'}`}>
                {
                    cartProducts.map(product => <ShowPurchasedProducts key={product.id} product={product} />)
                }
            </div>
            <div className={`purchased_products_show purchased_products_show_hidden purchased_products_show_${props.index} ${productsShow === true && 'purchased_product_show_active'}`}>
                {
                    cartProducts.map(product => <ShowPurchasedProducts key={product.id} product={product} />)
                }
            </div>
        </>
    )
}

export default PurchasedProducts;