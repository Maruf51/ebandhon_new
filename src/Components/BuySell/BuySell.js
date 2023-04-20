import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './BuySell.css';
import { FaPlus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../LocalStorage/LocalStorage';
import ShowBuySellProduct from './ShowBuySellProduct/ShowBuySellProduct';
import UploadBuySellProducts from './UploadBuySellProducts/UploadBuySellProducts';
import buy_sell from '../../images/main slider/buy_sell.jpg'

const BuySell = () => {
    useEffect(() => {
        document.title = "Buy & Sell | E-Bandhon"
      }, [])

    const [loginData, setLoginData] = useLocalStorage('user_data', {})
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory();
    const [usedProducts, setUsedProducts] = useState([])

    const modal = () => {
        if(loginData.isSignedIn === true ) {
            setModalOpen(true)
        }
        else {
            history.push("/signIn");
        }
        // history.push("/signIn");
    }



    // getting used products data
    useEffect(() => {
        fetch('https://ebandhonnewserver-production-89c9.up.railway.app/get-used-products')
        .then(res => res.json())
        .then(data => {
            setUsedProducts(data)
        })
    }, [])


    const [secondModal, setSecondModal] = useState(false)
    return (
        <div className={`${secondModal === true && 'overflow_hidden'}`}>
            <Header />
            <div className={`used_products container ${secondModal === true && 'overflow_hidden'}`}>
                <FaPlus onClick={modal} title='Add Your Used Product' className='used_products_add' />
                <img className='mt-4 used_products_image' src={buy_sell} alt="" />
                {
                    modalOpen === true && <UploadBuySellProducts setModalOpen={setModalOpen} />
                }
                {
                    usedProducts?.map(product => <ShowBuySellProduct setSecondModal={setSecondModal} key={product._id} product={product} />)
                }
            </div>
            <Footer />
        </div>
    )
}

export default BuySell;