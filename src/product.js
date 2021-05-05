import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import UserContext from './userContext';

export default function Product() {
    let products = useContext(UserContext);
    return <>
        <h1 className="h3 mb-2 text-gray-800">Product</h1>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                    <Link to='/productcreate' exact={true}  className="btn btn-outline-primary">
                        <i className="fas fa-user-plus"></i> Create Product
                    </Link>
                </h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th><i className="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th><i className="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                products.productList.map((data) => {
                                    return <>
                                        <tr>
                                            <td>{ data.name }</td>
                                            <td>{ data.brand }</td>
                                            <td>{ data.stock }</td>
                                            <td>${ data.price }</td>
                                            <th><Link to='/productedit/1'>Edit</Link></th>
                                        </tr>
                                    </>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}