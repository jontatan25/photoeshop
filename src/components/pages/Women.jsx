import axios from 'axios'
import {React, useState, useEffect} from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'



const Women = () => {

    const [womenProducts, setWomenProducts] = useState([])
    let [loading, setLoading] = useState(true)

    const getWomenProducts = async () => {
        try {
            let products = await axios.get('https://fakestoreapi.com/products')
            let filteredProducts = products.data.filter(product => product.category === "women's clothing")
            setWomenProducts(filteredProducts)
            setLoading(false)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getWomenProducts()
    }, [])

    return (
        <>
        { loading ? 
        <div>
            <h2>Cargando</h2>
        </div>
        : 
        <ItemListContainer data={womenProducts}/>
    }
            </>
    )
}

export default Women
