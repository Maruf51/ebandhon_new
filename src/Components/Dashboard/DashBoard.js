import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddResellerMail from '../AddResellerMail/AddResellerMail';
import BrandUploadPage from '../BrandUploadPage/BrandUploadPage';
import Header from '../Header/Header';
import HotDealAdmin from '../HotDealAdmin/HotDealAdmin';
// import PendingOrder from '../Order/PendingOrder';
import ProductUploadPage from '../ProductUploadPage/ProductUploadPage'
import RequestedProducts from '../RequestedProducts/RequestedProducts';

const DashBoard = () => {
    return (
        <div>
          <Header/>
             <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 container">
              <Tab eventKey="hot-deal" title="hot-deal">
                <HotDealAdmin />
              </Tab>
              <Tab eventKey="brand-upload" title="brand-upload">
                <BrandUploadPage />
              </Tab>
              <Tab eventKey="product-upload" title="product-upload" >
                <ProductUploadPage/>
              </Tab>
              <Tab eventKey="Final-order" title="Requested Products" >
                <RequestedProducts />
              </Tab>
              <Tab eventKey="Add-Reseller" title="Add Reseller" >
                <AddResellerMail />
              </Tab>
            </Tabs>
        </div>
    );
};    

export default DashBoard;