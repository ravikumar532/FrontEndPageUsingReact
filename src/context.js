import React, { Component } from 'react';
import {storeProducts ,detailProduct} from './data';
const ProductContext=React.createContext();
//provider
//consumer

 class  Productprovider extends Component {
     state={
          products:[],
         detailProducts:detailProduct,
         cart:[],
         modalOpen:true,
         modalProduct:detailProduct
     }
     componentDidMount()
     {
       this.setProducts();
     }
     setProducts=()=>{
       let products=[];
       storeProducts.forEach(item =>{
         const singleItem={...item};
         products=[...products,singleItem];
       });
       this.setState(()=>{
         return{products:products};
       });
     }
     getItem=(id)=>{
           const product =this.state.products.find(item=>item.id===id);
           return product;
     };
     HandleDetails =id=>{
      const  product =this.getItem(id);
      this.setState(()=>{
        return { detailProducts:product}
      })
    }
    Addtocart = (id)=>{
    let tempProducts=[...this.state.products];
     const index =tempProducts.indexOf(this.getItem(id));
     const product=tempProducts[index];
     product.inCart=true;
     product.count=1;
     const price =product.price;
    ];
    };
     product.total=price;

     this.setState(()=>{
       return {products:tempProducts,cart:[...this.state.cart,product]}

     },()=>{
            console.log(this.state);
     })
    };
    openModal=id=>{
      const product= this.state.getItem(id)
      this.setState(()=>{
        return {modalProduct:product,openModal:true}
      })
    }
    closeModal=()=>{
      this.setState(()=>{
        return {modalOpen:false}
      })
    }
   
  render() {
    return (
     <ProductContext.Provider 
    value={{
    ...this.state,
  HandleDetails:this.HandleDetails,
  Addtocart:this.Addtocart,
   openModal:this.openModal,
   closeModal:this.closeModal
  }}><button onClick={this.tester}>tester</button>
       {this.props.children}
     </ProductContext.Provider>
    );
  }
}
 const ProductConsumer=ProductContext.Consumer;

 export {Productprovider,ProductConsumer};