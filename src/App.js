import React from 'react';
import './App.css';

import Header from './components/Header';
import Product from './components/Product';
class App extends React.Component {
   render(){
    var products=[
      {
        id:1,
        name:"Iphone XS MAX 512GB",
        price:2000,
        status:true
      },
      {
        id:2,
        name:"Iphone XS MAX 256GB",
        price:1800,
        status:true
      },
      {
        id:3,
        name:"Iphone XS MAX 128GB",
        price:1600,
        status:true  
      },
      {
        id:4,
        name:"Iphone XS MAX 64GB",
        price:1400,
        status:true
      },
    ];
    var listProduct= products.map((product,index)=>{
      let result='';
      if(product.status){
        result=
        <li>
        <Product key={index}
            id={product.id}
            name={product.name}
            price={product.price}
            status={product.status}
          />
          </li>
      }
      return result;
    });
  return (
    <div >
      <Header/>
      <div className="container">
      <ul>
      {listProduct}
      </ul>
      </div>

      
    </div>
  );
   }
}

export default App;
