import './AddNew.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { IKContext, IKUpload } from 'imagekitio-react';

const AddNew = (props) => {
  const [addnew, setAddnew] = useState(false)
  const [error, setError] = useState(false)

  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [facebook, setFacebook] = useState('')
  const [linkedin, setLinkedin] =  useState('')
  const [website, setWebsite] =  useState('')
  const [description, setDescription] = useState('')
  const [dev, setDev] = useState(false)
  const [designer, setDesigner] = useState(false)
  const [freelancer, setFreelancer] = useState(false)
  const [seo, setSeo] = useState(false)
  const [video, setVideo] = useState(false)

  // uploading image and getting link
  const [imageLoading, setImageLoading] = useState(false)
  const [imageLink, setImageLink] = useState('')
  const [imageTitle, setImageTitle] = useState('')
  const onError = err => {
      setImageLoading(false)
      setImageLink('')
  };
      
  const onSuccess = res => {
      setImageLoading(false)
      setImageLink(res.url)
  };

  const imageTitleFunction = (e) => {
    const newTitle = e.replace('C:\\fakepath\\', "")
    setImageTitle(newTitle)
    setImageLoading(true)
    setImageLink('')
  }



  const submitDetails = (e) => {
    e.preventDefault()
    if(name && title && facebook && linkedin && imageLink && description && website) {
      setError(false)
      if(dev || designer || freelancer || seo || video) {
        setError(false)
        const data = {name, title, facebook, linkedin, imageLink, website, description, dev, designer, freelancer, seo, video}

        fetch(`https://ebandhonnewserver-production-89c9.up.railway.app/add-developer`, {
            method:'POST',
            headers: { 'content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedCount === 1) {
              setName('')
              setTitle('')
              setFacebook('')
              setLinkedin('')
              setImageLink('')
              setImageTitle('')
              setDescription('')
              setImageLoading(false)
              setError(false)
              setAddnew(false)
              props.setAdded(!props.added)
            }
        })
      }
      else {
        setError(true)
      }
    }
    else {
      setError(true)
    }
  }
  return (
    <>
      {/* <Button variant="primary" onClick={e => setAddnew(true)}>
        ADD New Frelancer
      </Button> */}
      <FaPlus onClick={e => setAddnew(true)} title='Add Your Used Product' className='used_products_add' />
      {
        addnew === true && <div className="addnew">
          <div className="addnew_in">
            <FaTimes onClick={e => setAddnew(false)} className='AN_close' />
            <div className="AN_head">
              <h2>Add new Dev</h2>
            </div>
            <form className="AN_details">
              <h4 className="AN_detail_head">Fullname</h4>
              <input onChange={e => setName(e.target.value)} type="text" className='AN_detail_field' placeholder='Your Name...' />
              <h4 className="AN_detail_head">Title</h4>
              <input onChange={e => setTitle(e.target.value)} type="text" className='AN_detail_field' placeholder='Senior dev, Junior dev etc...' />
              <h4 className="AN_detail_head">Facebook Link</h4>
              <input onChange={e => setFacebook(e.target.value)} type="text" className='AN_detail_field' placeholder='Facebook Acc Link...' />
              <h4 className="AN_detail_head">Linked In Link</h4>
              <input onChange={e => setLinkedin(e.target.value)} type="text" className='AN_detail_field' placeholder='LinkedIn Acc Link...' />
              <h4 className="AN_detail_head">Website</h4>
              <input onChange={e => setWebsite(e.target.value)} type="text" className='AN_detail_field' placeholder='Portfolio Link...' />
              <h4 className="AN_detail_head">Category</h4>
              <div className="AN_category_list">
                <input onChange={e => setDev(e.target.checked)} type="checkbox" id='dev' className="AN_category" />
                <label htmlFor="dev" className="AN_category_label">Developer</label>
                <input onChange={e => setDesigner(e.target.checked)} type="checkbox" id='designer' className="AN_category" />
                <label htmlFor="designer" className="AN_category_label">Designer</label>
                <input onChange={e => setFreelancer(e.target.checked)} type="checkbox" id='freelancer' className="AN_category" />
                <label htmlFor="freelancer" className="AN_category_label">Freelancer</label>
                <br />
                <input onChange={e => setSeo(e.target.checked)} type="checkbox" id='seo' className="AN_category" />
                <label htmlFor="seo" className="AN_category_label">SEO</label>
                <input onChange={e => setVideo(e.target.checked)} type="checkbox" id='video' className="AN_category" />
                <label htmlFor="video" className="AN_category_label">Video</label>
              </div>
              <div>
                <label htmlFor="profile_image_upload_label" className='AN_image_upload'>{imageLink ? imageTitle : (imageLoading ? 'Uploading Image...' : 'Upload Image')}</label>
                <IKContext
                    publicKey="public_5rRmOCN1vK/MI28l98iNzt8jNhQ="
                    urlEndpoint="https://ik.imagekit.io/ebnirpt9i8agxu"
                    transformationPosition="path"
                    authenticationEndpoint="https://ebandhonnewserver-production-89c9.up.railway.app/auth">

                    <IKUpload className='profile_image_upload_input' id="profile_image_upload_label" onChange={(e) => imageTitleFunction(e.target.value)} onError={onError} onSuccess={onSuccess} fileName="my-upload" />
                </IKContext>
              </div>
              <h4 className="AN_detail_head">Description</h4>
              <textarea onChange={e => setDescription(e.target.value)} type="text" className='AN_detail_field' placeholder='About Yourself...' />
              {
                error === true && <span className="AN_error">All fields must be filled.</span>
              }
              <button onClick={e => submitDetails(e)} className="btn AN_submit">SUBMIT</button>
            </form>
          </div>
        </div>
      }
    </>
  );
};

export default AddNew;