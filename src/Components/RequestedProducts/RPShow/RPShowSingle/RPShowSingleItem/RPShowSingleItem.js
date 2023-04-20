import { useContext, useEffect, useState } from 'react'
import { CategoryData } from '../../../../../App'
import './RPShowSingleItem.css'

const RPShowSingleItem = (props) => {
    const [categories, setCategories] = useContext(CategoryData)
    const [data, setData] = useState({})
    
    const {id, mainPrice, productCategory, quantity} = props.product

    useEffect(() => {
        if(categories) {
            setData(categories.find(category => category.name === productCategory).products.find(product => product.id === id))
        }
    }, [id, categories])
    return (
        <div className="RPSSI">
            <div className='RPSSI_in'>
                <img src={data.productImage} alt="" />
                <div className="RPSSI_name_quantity">
                    <h3 className='RPSSI_name'>{data.productName}</h3>
                    <span className='RPSSI_quantity'>Quantity: {quantity}</span>
                </div>
            </div>
            <span className='RPSSI_price'>৳ {mainPrice}</span>
        </div>
    )
}

export default RPShowSingleItem;