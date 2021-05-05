import { Link } from "react-router-dom";
import { useContext } from 'react';
import UserContext from './userContext';

export default function Userlist() {
    let users = useContext(UserContext);
    return <>
        <h1 className="h3 mb-2 text-gray-800">Users</h1>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                    <Link to='/usercreate' className="btn btn-outline-primary"><i className="fas fa-user-plus"></i> Create User</Link>
                </h6>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th><i className="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Office</th>
                                <th>Age</th>
                                <th>Start date</th>
                                <th>Salary</th>
                                <th><i className="fas fa-user-edit"></i> Action</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                                users.userList.map((data) => {
                                    return <>
                                        <tr>
                                            <td>{ data.name }</td>
                                            <td>{ data.position }</td>
                                            <td>{ data.office }</td>
                                            <td>{ data.age }</td>
                                            <td>{ data.date }</td>
                                            <td>${ data.salary }</td>
                                            <th><Link to='/useredit/1'>Edit</Link></th>
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