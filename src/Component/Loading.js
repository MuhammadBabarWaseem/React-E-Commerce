import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    return (
        <>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
        <Skeleton height={350}/>
        </div>
        </>
    )
}
