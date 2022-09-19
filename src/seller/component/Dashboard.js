import React from 'react'

export const Dashboard = () => {
    return (
        <div className="container">
            <div className="row ">
                <div className="col-lg-6">
                    <div className="hero-content">
                        <h3>Welcome to LeasePe <h3 className="text-pink">{JSON.parse(sessionStorage.getItem("seller"))?.companyName}</h3></h3>
                    </div>
                </div>
                <div className="col-sm-14">
                    <img src="assets/img/common/sell.png" alt="" />
                </div>
            </div>
        </div>
    )
}
