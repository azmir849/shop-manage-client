import React from 'react';

const ShopManageDetails = ({ info }) => {
    return (
        <div>
            <table>
                <tr>
                    <td>{info.Shop_Name}</td>
                    <td>{info.Address}</td>
                    <td>{info.Latitude}</td>
                    <td>{info.Logitude}</td>
                    <td>{info.R_W_C_Name}</td>
                    <td>{info.Phone_Number}</td>
                    <td>{info.Description}</td>
                </tr>
            </table>
        </div>
    );
};

export default ShopManageDetails;