import './UploadBuySellProducts.css';
import no_image from '../../../images/no-image.svg'
import ripple from '../../../images/ripple.svg'
import { FaPlus, FaTimes } from 'react-icons/fa';
import { IKContext, IKUpload } from 'imagekitio-react';
import { useState } from 'react';

const UploadBuySellProducts = (props) => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [location, setLocation] = useState('')
    const [facebook, setFacebook] = useState('')
    const [productName, setProductName] = useState('')
    const [productUsedTime, setProductUsedTime] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDetails, setProductDetails] = useState('')




    // uploading image and getting link
    const [imageLoading, setImageLoading] = useState(false)
    const [imageLink, setImageLink] = useState('')
    const onError = err => {
        setImageLoading(false)
        setImageLink('')
    };
        
    const onSuccess = res => {
        setImageLoading(false)
        setImageLink(res.url)
    };

    const imageUpload = (e) => {
        if(e.target.value){
            setImageLink('')
            setImageLoading(true)
        }
    }

    // uploading image and getting link
    const [imageLoading2, setImageLoading2] = useState(false)
    const [imageLink2, setImageLink2] = useState('')
    const onError2 = err => {
        setImageLoading2(false)
        setImageLink2('')
    };
        
    const onSuccess2 = res => {
        setImageLoading2(false)
        setImageLink2(res.url)
    };

    const imageUpload2 = (e) => {
        if(e.target.value){
            setImageLink2('')
            setImageLoading2(true)
        }
    }

    // uploading image and getting link
    const [imageLoading3, setImageLoading3] = useState(false)
    const [imageLink3, setImageLink3] = useState('')
    const onError3 = err => {
        setImageLoading3(false)
        setImageLink3('')
    };
        
    const onSuccess3 = res => {
        setImageLoading3(false)
        setImageLink3(res.url)
    };

    const imageUpload3 = (e) => {
        if(e.target.value){
            setImageLink3('')
            setImageLoading3(true)
        }
    }

    // uploading image and getting link
    const [imageLoading4, setImageLoading4] = useState(false)
    const [imageLink4, setImageLink4] = useState('')
    const onError4 = err => {
        setImageLoading4(false)
        setImageLink4('')
    };
        
    const onSuccess4 = res => {
        setImageLoading4(false)
        setImageLink4(res.url)
    };

    const imageUpload4 = (e) => {
        if(e.target.value){
            setImageLink4('')
            setImageLoading4(true)
        }
    }

    // uploading image and getting link
    const [imageLoading5, setImageLoading5] = useState(false)
    const [imageLink5, setImageLink5] = useState('')
    const onError5 = err => {
        setImageLoading5(false)
        setImageLink5('')
    };
        
    const onSuccess5 = res => {
        setImageLoading5(false)
        setImageLink5(res.url)
    };

    const imageUpload5 = (e) => {
        if(e.target.value){
            setImageLink5('')
            setImageLoading5(true)
        }
    }


    const productUpload = (e) => {
        e.preventDefault()
        if(imageLink || imageLink2 || imageLink3 || imageLink4 || imageLink5) {
            if(name && email && location && number && facebook && productName && productUsedTime && productPrice && productDetails) {
                const allData = {name, email, number, location, facebook, productName, productUsedTime, productPrice, productDetails, productImage: []}
                if(imageLink) {
                    allData.productImage.push(imageLink)
                }
                if(imageLink2) {
                    allData.productImage.push(imageLink2)
                }
                if(imageLink3) {
                    allData.productImage.push(imageLink3)
                }
                if(imageLink4) {
                    allData.productImage.push(imageLink4)
                }
                if(imageLink5) {
                    allData.productImage.push(imageLink5)
                }
                

                fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/add-used-product`, {
                    method:'POST',
                    headers: { 'content-type':'application/json'},
                    body:JSON.stringify(allData)
                })
                .then(res => res.json())
                .then(result => {
                    // console.log(result)
                    if(result.insertedCount === 1) {
                        window.location.reload(); 
                    }
                })
            }
            else {
                alert('All fields must be filled!')
            }
        }
        else {
            alert('You must select at least 1 picture!')
        }
    }
    return (
        <div className="upload_used_products">
            <div className="UUP">
                <FaTimes onClick={e => props.setModalOpen(false)} className='UUP_close' />
                <div className="UUP_left">
                    <h2>Product Images (Max - 5)</h2>
                    <div className="UUP_images">
                        <div className="UUP_image UUP_image1">
                            {
                                imageLink ? <img src={imageLink} alt="" /> : <img src={no_image} alt="" />
                            }
                            {
                                imageLoading ? <img className='UUP_edit' src={ripple} alt="" /> : <label htmlFor='image_upload_1' className="UUP_edit UUP_edit1">
                                    <FaPlus className='UUP_plus' />
                                </label>
                            }
                            <IKContext
                                publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                                urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                                transformationPosition="path"
                                authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">
                                    
                                <IKUpload className='UUP_image_upload' id="image_upload_1" onChange={(e) => imageUpload(e)} onError={onError} onSuccess={onSuccess} fileName="my-upload" />
                            </IKContext>
                        </div>
                        <div className="UUP_image UUP_image2">
                            {
                                imageLink2 ? <img src={imageLink2} alt="" /> : <img src={no_image} alt="" />
                            }
                            {
                                imageLoading2 ? <img className='UUP_edit' src={ripple} alt="" /> : <label htmlFor='image_upload_2' className="UUP_edit">
                                    <FaPlus className='UUP_plus' />
                                </label>
                            }
                            <IKContext
                                publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                                urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                                transformationPosition="path"
                                authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">
                                    
                                <IKUpload className='UUP_image_upload' id="image_upload_2" onChange={(e) => imageUpload2(e)} onError={onError2} onSuccess={onSuccess2} fileName="my-upload" />
                            </IKContext>
                        </div>
                        <div className="UUP_image UUP_image3">
                            {
                                imageLink3 ? <img src={imageLink3} alt="" /> : <img src={no_image} alt="" />
                            }
                            {
                                imageLoading3 ? <img className='UUP_edit' src={ripple} alt="" /> : <label htmlFor='image_upload_3' className="UUP_edit">
                                    <FaPlus className='UUP_plus' />
                                </label>
                            }
                            <IKContext
                                publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                                urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                                transformationPosition="path"
                                authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">
                                    
                                <IKUpload className='UUP_image_upload' id="image_upload_3" onChange={(e) => imageUpload3(e)} onError={onError3} onSuccess={onSuccess3} fileName="my-upload" />
                            </IKContext>
                        </div>
                        <div className="UUP_image UUP_image4">
                            {
                                imageLink4 ? <img src={imageLink4} alt="" /> : <img src={no_image} alt="" />
                            }
                            {
                                imageLoading4 ? <img className='UUP_edit' src={ripple} alt="" /> : <label htmlFor='image_upload_4' className="UUP_edit">
                                    <FaPlus className='UUP_plus' />
                                </label>
                            }
                            <IKContext
                                publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                                urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                                transformationPosition="path"
                                authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">
                                    
                                <IKUpload className='UUP_image_upload' id="image_upload_4" onChange={(e) => imageUpload4(e)} onError={onError4} onSuccess={onSuccess4} fileName="my-upload" />
                            </IKContext>
                        </div>
                        <div className="UUP_image UUP_image5">
                            {
                                imageLink5 ? <img src={imageLink5} alt="" /> : <img src={no_image} alt="" />
                            }
                            {
                                imageLoading5 ? <img className='UUP_edit' src={ripple} alt="" /> : <label htmlFor='image_upload_5' className="UUP_edit">
                                    <FaPlus className='UUP_plus' />
                                </label>
                            }
                            <IKContext
                                publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                                urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                                transformationPosition="path"
                                authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">
                                    
                                <IKUpload className='UUP_image_upload' id="image_upload_5" onChange={(e) => imageUpload5(e)} onError={onError5} onSuccess={onSuccess5} fileName="my-upload" />
                            </IKContext>
                        </div>
                    </div>
                </div>
                <div className="UUP_right">
                    <h2 className="UUP_right_header">Seller and Product Details</h2>
                    <div className="UUPR_field">
                        <label htmlFor="name">Full Name</label>
                        <input onChange={e => setName(e.target.value)} type="text" placeholder='Full Name..' id='name' />
                    </div>
                    <div className="UUPR_field">   
                        <label htmlFor="email">Email</label>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Email..' id='email' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="number">Phone Number</label>
                        <input onChange={e => setNumber(e.target.value)} type="number" placeholder='Phone Number..' id='number' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="location">Location</label>
                        <input onChange={e => setLocation(e.target.value)} type="text" placeholder='Location..' id='location' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="facebook">Facebook ID Link</label>
                        <input onChange={e => setFacebook(e.target.value)} type="text" placeholder='Facebook ID Link..' id='facebook' />
                    </div>
                    <div className="UUPR_field">   
                        <label htmlFor="productName">Product Name</label>
                        <input onChange={e => setProductName(e.target.value)} type="text" placeholder='Product Name..' id='productName' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="productUsedTime">Product Used Time</label>
                        <input onChange={e => setProductUsedTime(e.target.value)} type="text" placeholder='Product Used Time..' id='productUsedTime' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="productPrice">Product Price</label>
                        <input onChange={e => setProductPrice(e.target.value)} type="number" placeholder='Product Price..' id='productPrice' />
                    </div>
                    <div className="UUPR_field">
                        <label htmlFor="productDetails">Product Details</label>
                        <textarea onChange={e => setProductDetails(e.target.value)} type="text" placeholder='Product Details..' id='productDetails' />
                    </div>
                    <button onClick={e => productUpload(e)} className="btn UURP_btn">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default UploadBuySellProducts;