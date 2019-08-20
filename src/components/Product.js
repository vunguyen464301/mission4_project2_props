import React from 'react';

class Product extends React.Component{
  render(){
    return (
        <div className="card mr-3 mt-3" style={{width: '18em'}}>
            
            {/* <img src="..." className="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <h5 className="card-title">{this.props.id}.{this.props.name}</h5>
                        <p className="card-text">price:{this.props.price}</p>
                        status:{this.props.status}      <br/>    
                        <a href="." className="btn btn-primary">Buy</a>
                    </div>

            </div>
            )
  }
}
export default Product;