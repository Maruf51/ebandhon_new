import './RPShowSingle.css';
import RPShowSingleItem from './RPShowSingleItem/RPShowSingleItem';
import { FaTimes } from 'react-icons/fa';

const RPShowSingle = (props) => {
    const {imageProfile, name, email, phone, mainAddress, totalAmount, status, _id, uid, transactionId} = props.data

    const changeStatus = (e) => {
        e.preventDefault()

        fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/change-status`, {
            method:'POST',
            headers: { 'content-type':'application/json'},
            body:JSON.stringify({status: "success", id: _id, uid: uid, transactionId: transactionId})
        })
        .then(res => res.json())
        .then(result => {
            if(result.success === true) {
                window.location.reload(); 
            }
        })
    }

    // console.log(props.data)
    return (
        <div className='RP_show_single'>
            <div className='RPS_single'>
                <FaTimes className='RPS_cross' onClick={() => props.setViewDetails(false)} />
                <div className="RPS_left">
                    <img src={imageProfile} alt="" />
                    <h2 className='RPS_left_details'>Name: <span className='RPS_left_details'>{name}</span></h2>
                    <h2 className='RPS_left_details'>Email: <span className='RPS_left_details'>{email}</span></h2>
                    <h2 className='RPS_left_details'>Number: <span className='RPS_left_details'>{phone}</span></h2>
                    <h2 className='RPS_left_details'>Address: <span className='RPS_left_details'>{mainAddress}</span></h2>
                    <h2 className='RPS_left_details'>Total Price: <span className='RPS_left_details'>৳ {totalAmount}</span></h2>
                    <h2 className='RPS_left_details'>Status: <span className='RPS_left_details status'>{status} 
                        {
                            status === "pending" && <button className="btn status_change" onClick={(e) => changeStatus(e)}>SUCCESS</button>
                        }
                    </span></h2>
                </div>
                <div className="RPS_right">
                    {
                        props.data.cartProducts.map(product => <RPShowSingleItem product={product} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default RPShowSingle;