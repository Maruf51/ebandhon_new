import { useState } from 'react'
import AdminRoutePass from '../AdminRoutePass/AdminRoutePass'
import useLocalStorage from '../LocalStorage/LocalStorage'
import './AddResellerMail.css'

const AddResellerMail = () => {
    const [email, setEmail] = useState('')

    const [adminSecret, setAdminSecret] = useLocalStorage('admin_secret', {})
    const adminSecretFind = (data) => {
        if(data.status === 'success') {
            setAdminSecret({status: true})
        }
        else{
            setAdminSecret({status: false})
        }
    }

    const addReseller = (e) => {
        e.preventDefault()
        if(email) {
            fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/add-reseller-mail`, {
                method:'POST',
                headers: { 'content-type':'application/json'},
                body:JSON.stringify({email: email})
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedCount === 1){
                    alert('Email added')
                    setEmail('')
                }
            })
        }
    }

    return (
        <div className='container'>
            {
                !adminSecret.status && <AdminRoutePass data={adminSecretFind}/>
            }
            {
                adminSecret.status === true && (<>
                    <input type="text" value={email} className="add_new_mail" onChange={e => setEmail(e.target.value)} />
                    <button onClick={e => addReseller(e)} className="btn add_new_mail_btn">Submit</button>
                </>)
            }
        </div>
    )
}

export default AddResellerMail;