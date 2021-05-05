import { useContext } from 'react';
import UserContext from './userContext';

export default function Useredit(props) {
    let data = useContext(UserContext);
    console.log(data);
    console.log(props)
    return <>
        <h1>User Edit</h1>
    </>
}