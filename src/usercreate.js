import { useContext, useState} from 'react';
import UserContext from './userContext';
import { useHistory} from 'react-router-dom';

export default function Usercreate() {
    let userData = useContext(UserContext);
    let history = useHistory();

    let [name, setName] = useState(' ');
    let [position, setPosition] = useState(' ');
    let [office, setOffice] = useState(' ');
    let [age, setAge] = useState();
    let [date, setDate] = useState();
    let [salary, setSalary] = useState();

    let UserSubmit = (e) => {
        e.preventDefault()
        userData.setUserList([...userData.userList, {
            name, position, office, age, date, salary
        }])
        history.push('/users');
}
    return <>
           <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">New User</h1>
        </div>
        <div className='container'>
            <form onSubmit={UserSubmit }>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value) }/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Position</label>
                        <input type="text" className="form-control" id="position" value={position} onChange={(e) => setPosition(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Office</label>
                        <input type="text" className="form-control" id="office" value={office} onChange={(e) => setOffice(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Age</label>
                        <input type="number" className="form-control" id="age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Start date</label>
                        <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Salary</label>
                        <input type="number" className="form-control" id="salary" value={salary} onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    </>
}