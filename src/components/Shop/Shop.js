import React, { useState } from 'react';
import "./Shop.css"

const Shop = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e =>{
        const newInfo={...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo);
        console.log(newInfo);  
    }

    const handleSubmit = () => {
        const newServiceInfo = { ...info };
        fetch('http://localhost:5000/shop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newServiceInfo),
        })

    }

    


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img className="LOGO" src="" alt="" />
                    <button className="Button">Create Shop</button>
                </div>
                <div class="col-md-8">
                    <div className="ClientServiceInputArea">
                        <form>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Shop Name</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="Shop_Name" placeholder="Enter Shop Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Address</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="Address" placeholder="Enter Address" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Latitude</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="Latitude" placeholder="Enter Latitude" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Longitude</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="Logitude" placeholder="Enter Longitude" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Registration By/Owner/Company Name</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="R_W_C_Name" placeholder="Enter Registration By/Owner/Company Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <label htmlFor="title">Enter Phone Number</label>
                                    <input onBlur={handleBlur} type="text" id="inputTextSize" className="form-control" name="Phone_Number" placeholder="Enter Phone Number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Enter Description</label>
                                <textarea onBlur={handleBlur} type="textArea" id="inputTextAreaSize" className="form-control" name="Description" placeholder="Enter Description" />
                            </div>
                            <button onClick={handleSubmit} type="submit" className="btn btn-success float-left">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
