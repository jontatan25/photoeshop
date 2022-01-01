import React from 'react';
import './ItemDetailMobile.css';
import {MdOutlineArrowBackIosNew} from 'react-icons/md'
import {FaRegHeart} from 'react-icons/fa'
import ItemDetailProperties from './ItemDetailProperties/ItemDetailProperties';



const ItemDetailMobile = () => {
    return (
        <div>
            <div className="detailMobile-header">
                <MdOutlineArrowBackIosNew size='50px' color='white'/>
                <h2>Producto</h2>
                <FaRegHeart size='50px' color='white'/>
            </div>
            <div className="detailMobile-image"></div>
            <ItemDetailProperties/>
        </div>
    )
}

export default ItemDetailMobile
