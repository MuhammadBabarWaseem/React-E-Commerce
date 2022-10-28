import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function ProductThing() {

    const { id } = useParams();
    const [ProductThing, setProductThing] = useState([]);
    const [loading, setLoading] = useState(false);

    // loading(false)
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setProductThing(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={300} />
                </div>
                <div className="col-md-6 " style={{ lineHeight: 2 }}>
                    <Skeleton animation={"wave"} height={50} width={300} />
                    <Skeleton animation={"wave"} height={200} />
                    <Skeleton animation={"wave"} height={50} width={135} />
                    <Skeleton animation={"wave"} height={50} width={120} />
                    <Skeleton animation={"wave"} height={180} width={550} />
                    <div className="col-md-6 d-inline-flex">
                        <Skeleton animation={"wave"} height={50} width={100} />
                        <Skeleton animation={"wave"} height={50} width={100} style={{ marginLeft: 9 }} />
                    </div>
                </div>
            </>
        )
    }


    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6 my-5 py-5">
                    <img src={ProductThing.image} alt={ProductThing.title} height='300px' width='300px' />
                </div>
                <div className="col-md-6 my-4 py-4">
                    <h4 className="text-uppercase text-black-50">{ProductThing.category}</h4>
                    <h1 className='display-5'>{ProductThing.title}</h1>
                    <p className="lead fw-bolder">Rating {ProductThing.rating && ProductThing.rating.rate}
                        <i className="fa fa-star mx-2"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4"> $ {ProductThing.price}</h3>
                    <p className="lead">{ProductThing.description}</p>
                    <Link to='/AddToCart' className="btn btn-outline-dark px-4 py-2">Add To Cart</Link>
                    <Link to="/NA" className="btn btn-dark ms-2 px-3 py-2">View Cart</Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-2">
                <div className="row py-2">
                    {loading ? <Loading /> : <ShowProduct />}
                    {/* <ShowProduct/> */}
                </div>
            </div>
        </div>
    )
}

