import { useState } from 'react';
import './RPShow.css';
import RPShowSingle from './RPShowSingle/RPShowSingle';

const RPShow = (props) => {
    const {name, email, phone, mainAddress, totalAmount, status} = props.product

    const [viewDetails, setViewDetails] = useState(false)
    return (
        <div className="RP_items">
            <h4 className="RP_item">{name}</h4>
            <h4 className="RP_item">{phone}</h4>
            <h4 className="RP_item">{mainAddress}</h4>
            <h4 className="RP_item">{totalAmount}</h4>
            <h4 className="RP_item RP_item_status">{status}</h4>
            <h4 onClick={() => setViewDetails(true)} className="RP_item RP_view_btn btn">VIEW</h4>
            {
                viewDetails && <RPShowSingle data={props.product} setViewDetails={setViewDetails} />
            }
        </div>
    )
}

export default RPShow;