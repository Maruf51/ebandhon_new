import { useEffect, useState } from 'react';
import './FLSingle.css';
import { FaLinkedinIn, FaFacebookF, FaLink } from 'react-icons/fa';

const FLSingle = (props) => {
    const {name, title, description, facebook, linkedin, imageLink, website} = props.data

    const [newDesc, setNewDesc] = useState('')
    useEffect(() => {
        if(description.length > 120) {
            const newDescription = description.slice(0, 119)
            setNewDesc(newDescription + '...')
        }
        else {
            setNewDesc(description)
        }
    }, [description])
    return (
        <div className="FL_item">
            <img src={imageLink} alt="" />
            <h3>{name}</h3>
            <h4>{title}</h4>
            <span>{newDesc}</span>
            <div className="FL_item_links">
                <a target="_blank" href={linkedin} className='FA_item_LI' >
                    <FaLinkedinIn />
                </a>
                <a target="_blank" href={website} className="FA_item_portfolio">
                    <FaLink className='FA_item_PF' />
                    PORTFOLIO
                </a>
                <a target="_blank" href={facebook} className='FA_item_FB'>
                    <FaFacebookF />
                </a>
            </div>
        </div>
    )
}

export default FLSingle;