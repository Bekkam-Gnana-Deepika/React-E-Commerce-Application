import React from 'react'
import Header from './../layout/Header';
import Footer from './../layout/Footer';
import { useSelector } from 'react-redux';
import ShowCart from './ShowCart';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const storeData = useSelector(store => store.handleCart);
  // console.log(storeData);

  return (
    <>
        <Header/>
        <div className="container my-3 py-3">
            <div className="row">
                <div className="col">
                    <h5 className="display-5 text-center">Cart</h5>
                    <hr />
                </div>
            </div>
        </div>
        {storeData.length > 0 ? <ShowCart/> : <EmptyCart/>}
        <Footer/>
    </>
  )
}

export default Cart