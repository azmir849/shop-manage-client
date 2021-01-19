import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ShopManage.css";
import ShopManageDetails from './ShopManageDetails';
const ShopManage = () => {
    const { id } = useParams();
    const [infoData, setInfoData] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/info';
        fetch(url)
            .then(res => res.json())
            .then(data => setInfoData(data));
    }, [id]);
    console.log(infoData)



    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <button className="Button">Shop Information</button>
                </div>
                <div class="col-md-8">
                    <div className="tableArea">
                        <table className="table table-bordered">
                            <tr>
                                <th>Shop Name</th>
                                <th>Address</th>
                                <th>Latitude</th>
                                <th>Logitude</th>
                                <th>R/W/C Name</th>
                                <th>Phone Number</th>
                                <th>Description</th>
                            </tr>
                        </table>
                    </div>
                    <div>
                        {
                            infoData.map(info => <ShopManageDetails info={info} key={info.title}></ShopManageDetails>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopManage;