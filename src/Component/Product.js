import React, { useState, useEffect } from 'react'
import Loading from './Loading';
import { Link } from 'react-router-dom'

export default function Product() {


    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loading, setloading] = useState(false)

    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            setloading(true);
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentMounted) {
                setdata(await response.clone().json());
                setfilter(await response.json());
                setloading(false);
            }

        }
        getProduct();
    }, [componentMounted])

    const FilterProduct = (cat) => {

        const updatedList = data.filter((x) => x.category === cat)
        setfilter(updatedList);
    }


    const ShowProducts = () => {
        return (
            <>
                <div>
                    <nav className="navbar navbar-expand-lg bg-white">
                        <div className="container">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="buttons mx-auto mb-2 mb-lg-0">
                                    <button className="btn btn-outline-dark me-2" type='submit' onClick={() => setfilter(data)}>All</button>
                                    <button className="btn btn-outline-dark me-2" type='submit' onClick={() => FilterProduct(`men's clothing`)}>Men's Clothing</button>
                                    <button className="btn btn-outline-dark me-2" type='submit' onClick={() => FilterProduct(`women's clothing`)}>Women's Clothing</button>
                                    <button className="btn btn-outline-dark me-2" type='submit' onClick={() => FilterProduct(`jewelery`)}>Jewelery Clothing</button>
                                    <button className="btn btn-outline-dark me-2" type='submit' onClick={() => FilterProduct(`electronics`)}>Electronic's Item </button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            
                {filter.map((product) => {
                    return (
                        <div className="col-md-3 mb-4 my-3" key={product.id}>
                            <div   >

                                <div className="card h-100 text-center p-4">
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text lead fw-bold"> ${product.price}</p>
                                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    return (
        <div>

            <div className="container my-3 py-5">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div >
    )
}
