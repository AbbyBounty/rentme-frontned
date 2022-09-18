import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { url } from '../common/constants';

function SearchList({ filteredcategory }) {
    const [category, setCategory] = useState([])

    // const location = useLocation()
    const history = useHistory()

    const getCategory = () => {
        axios.get(url + '/category/').then((response) => {
            const result = response.data

            setCategory(result)
        })
    }

    return (

        <div className="grid grid-cols-5 gap-3 p-3">
            {
                filteredcategory.length !== 0 ? filteredcategory.map((cat) => {
                    return (


                        <div
                            onClick={() => {
                                history.push(`/category/${cat.categoryName}`, { cat: cat })

                            }}
                            className=" cursor-pointer"
                        >



                            <div className=" single-service wow fadeInUp" data-wow-delay=".2s">
                                <div className='h-60'>

                                    <img className="w-40" src={url + '/' + cat.categoryImage} alt="" />

                                </div>
                                <div>
                                    <h4 className="text-pink ">{cat.categoryName}</h4>
                                    <span className="text-xs  text-gray-400"> {cat.categoryDescription}</span>

                                </div>
                            </div>
                        </div>



                    )

                }) : <h1 className="text-purple-700">Ummmmmm.....? 🙂 No category found</h1>
            }


        </div >
    );
}

export default SearchList;

{/* <div className="row">
    <div className="col-lg-4 col-md-6">
        <div className="single-service wow fadeInUp" data-wow-delay=".2s">
            <div className="icon">
                <img src={url + '/' + cat.categoryImage} alt="" />
            </div>
            <div className="content">
                <h3>{cat.categoryName}</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
            </div>
        </div>
    </div>
</div> */}