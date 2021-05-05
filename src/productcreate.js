import { useContext, useState } from 'react';
import { useHistory} from 'react-router-dom';
import UserContext from './userContext';

export default function Productcreate() {
    let productData = useContext(UserContext);
    let history = useHistory();

    let [name, setName] = useState(' ');
    let [brand, setbrand] = useState(' ');
    let [stock, setstock] = useState();
    let [price, setprice] = useState();

    let productSubmit = (e) => {
        e.preventDefault()
        productData.setProductList([...productData.productList, {
            name, brand, stock,price
        }])
        history.push('/product');
}
    return <>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">New Product</h1>
        </div>
        <div className='container'>
            <form onSubmit={ productSubmit }>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                        <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value) }/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>brand</label>
                        <input type="text" className="form-control" id="brand" value={brand} onChange={(e) => setbrand(e.target.value)}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Stock</label>
                        <input type="number" className="form-control" id="stock" value={stock} onChange={(e) => setstock(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>price</label>
                        <input type="number" className="form-control" id="price" value={price} onChange={(e) => setprice(e.target.value)}/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        </div>
    </>
}