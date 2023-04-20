import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AddNew from './AddNew/AddNew';
import FLSingle from './FLSingle/FLSingle';
import './Freelancer.css'

const Freelancer = () => {
  useEffect(() => {
    document.title = "Hire Freelancer | E-Bandhon"
  }, [])

  const [select, setSelect] = useState('all')
  const [developersData, setDevelopersData] = useState([])
  const [newDecData, setNewDevData] = useState([])


  const [added, setAdded] = useState(false)
  useEffect(() => {
    fetch('https://ebandhonnewserver-production-89c9.up.railway.app/get-developers-data')
    .then(res => res.json())
    .then(result => {
      setDevelopersData(result)
      setNewDevData(result)
    })
  }, [added])

  useEffect(() => {
    if(select === 'all') {
      setNewDevData(developersData)
    }
    else if(select === 'dev') {
      setNewDevData(developersData.filter(data => data.dev === true))
    }
    else if(select === 'designer') {
      setNewDevData(developersData.filter(data => data.designer === true))
    }
    else if(select === 'freelancer') {
      setNewDevData(developersData.filter(data => data.freelancer === true))
    }
    else if(select === 'seo') {
      setNewDevData(developersData.filter(data => data.seo === true))
    }
    else if(select === 'video') {
      setNewDevData(developersData.filter(data => data.video === true))
    }
  }, [select])

  return (
    <>
      <Header />
      <AddNew setAdded={setAdded} added={added} />
      <div className="freelancer container">
        <div className="freelancer_header">
          <h3 className={`FL_header_item ${select === 'all' && 'FL_header_item_active'}`} onClick={e => setSelect('all')}>ALL</h3>
          <h3 className={`FL_header_item ${select === 'dev' && 'FL_header_item_active'}`} onClick={e => setSelect('dev')}>Developer</h3>
          <h3 className={`FL_header_item ${select === 'designer' && 'FL_header_item_active'}`} onClick={e => setSelect('designer')}>Designer</h3>
          <h3 className={`FL_header_item ${select === 'freelancer' && 'FL_header_item_active'}`} onClick={e => setSelect('freelancer')}>Freelancer</h3>
          <h3 className={`FL_header_item ${select === 'seo' && 'FL_header_item_active'}`} onClick={e => setSelect('seo')}>SEO</h3>
          <h3 className={`FL_header_item ${select === 'video' && 'FL_header_item_active'}`} onClick={e => setSelect('video')}>Video</h3>
        </div>
        <div className="FL_items">
          {
            newDecData.map(developerData => <FLSingle data={developerData} />)
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Freelancer;