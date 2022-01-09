import {React,useState} from 'react'
import  Item  from '../Item/Item'
import "./ItemListContainer.css"


const ItemListContainer = ({data}) => {

    
    let [loading, setloading] = useState(true)

    const asyncSimulation = new Promise((resolve, reject) => {
        setTimeout(() =>{
            setloading(false)
           
        },1000)
    })
    return (

        <div className='item__container'>
            {loading ?
            <div className='item__container-loading'><h2>Cargando</h2></div>
            :
            <Item data={data}/>
            }
             
        </div>
    )
}

export default ItemListContainer
