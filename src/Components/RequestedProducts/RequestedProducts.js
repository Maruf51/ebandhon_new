import { useEffect, useState } from 'react';
import AdminRoutePass from '../AdminRoutePass/AdminRoutePass';
import useLocalStorage from '../LocalStorage/LocalStorage';
import './RequestedProducts.css';
import RPShow from './RPShow/RPShow';
import loading from '../../images/Spin-1.6s-200px.gif'

const RequestedProducts = () => {
    const [loginData, setLoginData] = useLocalStorage('user_data', {})
    const [purchasedProducts, setPurchasedProducts] = useState({}) 


    const [adminSecret, setAdminSecret] = useLocalStorage('admin_secret', {})
    const adminSecretFind = (data) => {
        if(data.status === 'success') {
            setAdminSecret({status: true})
        }
        else{
            setAdminSecret({status: false})
        }
    }

    useEffect(() => {
        fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/get-requested-products`)
        .then(res => res.json())
        .then(data => {
            setPurchasedProducts(data.reverse())
        })
    }, [loginData])
    // console.log(purchasedProducts)
    return (
        <>
            {
                !adminSecret.status && <AdminRoutePass data={adminSecretFind}/>
            }
            {
                adminSecret.status === true && (
                    purchasedProducts[0] ? <div className='RP'>
                        <div className="RP_items">
                            <h4 className="RP_item">Name</h4>
                            <h4 className="RP_item">Mobile</h4>
                            <h4 className="RP_item">Address</h4>
                            <h4 className="RP_item">Price</h4>
                            <h4 className="RP_item">Status</h4>
                            <h4 className="RP_item">VIEW</h4>
                        </div>
                        {
                            purchasedProducts && purchasedProducts.map(product => <RPShow product={product} />)
                        }
                    </div> : 
                    <div  className='RP_loading'> 
                        <img src={loading} alt="" />
                    </div>
                )
            }
        </>
    )
}

export default RequestedProducts