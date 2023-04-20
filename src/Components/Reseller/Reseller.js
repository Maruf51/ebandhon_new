import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './Reseller.css'
import resellerImage from '../../images/main slider/reseller.jpg'
import { useState } from 'react'

const Reseller = () => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [shop, setShop] = useState('')
    const [address, setAddress] = useState('')
    const [paymentNumber, setPaymentNumber] = useState('')

    const [bkash, setBkash] = useState(false)
    const [rocket, setRocket] = useState(false)
    const [nogod, setNogod] = useState(false)

    const requestReseller = (e) => {
        e.preventDefault()
        if(name && number && shop && address && paymentNumber) {
            if(bkash || rocket || nogod) {
                const newData = {name, number, shop, address, paymentNumber, paymentMethod: {bkash, rocket, nogod}}
                
                fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/reseller-request`, {
                    method:'POST',
                    headers: { 'content-type':'application/json'},
                    body:JSON.stringify(newData)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.insertedCount === 1){
                        alert('Your request has been sent. One of our Moderator will contact you soon.')
                        setName('')
                        setNumber('')
                        setShop('')
                        setAddress('')
                        setPaymentNumber('')
                        setBkash(false)
                        setRocket(false)
                        setNogod(false)
                    }
                })
            }
            else {
                alert("Please select a payment method!")
            }
        }
        else {
            alert("All field must be filled!")
        }
    }


    return (
        <>
            <Header />
            <div className="reseller_main">
                <div className="reseller container">
                    <img src={resellerImage} alt="" />
                    <div className="reseller_details">
                        <div className="reseller_detail">
                            <h2>Reseller Information</h2>
                            <p>Help us by providing your information to join us as a reseller.</p>
                        </div>
                        <form action="submit" className="reseller_details_form">
                            <label for="name">Name</label>
                            <input onChange={e => setName(e.target.value)} type="text" id="name" placeholder="Name" value={name}/>
                            <label for="number">Phone Number</label>
                            <input onChange={e => setNumber(e.target.value)} type="number" id="number" placeholder="Phone Number" value={number}/>
                            <label for="shop">Page/Shop Name</label>
                            <input onChange={e => setShop(e.target.value)} type="text" id="shop" placeholder="Page/Shop Name" value={shop}/>
                            <label for="address">Address</label>
                            <input onChange={e => setAddress(e.target.value)} type="text" id="address" placeholder="Address" value={address}/>
                            <label>Payment Method</label>
                            <div class="reseller_payment_option">
                                <input onChange={e => setBkash(e.target.checked)} type="checkbox" id="bkash" class="AN_category" checked={bkash}/>
                                <label for="bkash" class="AN_category_label">Bkash</label>
                                <input onChange={e => setRocket(e.target.checked)} type="checkbox" id="rocket" class="AN_category" checked={rocket}/>
                                <label for="rocket" class="AN_category_label">Rocket</label>
                                <input onChange={e => setNogod(e.target.checked)} type="checkbox" id="nogod" class="AN_category" checked={nogod}/>
                                <label for="nogod" class="AN_category_label">Nogod</label>
                            </div>
                            <label for="payment">Payment Number</label>
                            <input onChange={e => setPaymentNumber(e.target.value)} type="number" id="payment" placeholder="Payment Number" value={paymentNumber}/>
                            <button onClick={e => requestReseller(e)} class="btn reseller_submit_btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Reseller