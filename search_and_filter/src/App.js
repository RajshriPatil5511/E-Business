// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Filter from './components/Product/Filter';
import Search from './components/Product/Search';
import ProductList from './components/Product/ProductList';
import { useEffect,useState} from 'react';
import useFetchApi from './Hooks/useFetchApi';

function App() { 
  // let [products, setProducts]=useState([])
  // let [loading, setLoading]=useState(true);
  let [url, setsetUrl]=useState("http://localhost:3000/products")
  let {data:products,loading,setData,error}=useFetchApi(url)
  // console.log(products);

  // useEffect(()=>{
  //     fetch(url)
  //     .then(res => res.json()
  //                       // .then(data=>console.log(data))
  //                       .then(data=>setProducts(data))
  //                       .catch())
  //     .catch()
  // },[url])
  // const fetchProducts = async()=>
  // {
  //   let response= await fetch(url)
  //   let data=await response.json()
  //   setLoading(false)
  //   setProducts(data)
  // }
  
  // useEffect(()=>{
  //   fetchProducts()
    // fetch(url)
    // .then(res => res.json()
    //                   // .then(data=>console.log(data))
    //                   .then(data=>setProducts(data))
    //                   .catch())
    // .catch()
// },[url])

  const changeUrl =(category) =>{
      setsetUrl("http://localhost:3000/products?category="+category)
  }
  //searching logic
  const searchProduct = (productName) =>
{

    let searchedProducts = products.filter(product => 
                                            product.name.toLowerCase()
                                            .includes(productName.toLowerCase())
                                          )
    setData(searchedProducts) 
}

  return (
    <>
     <div className='container'>
        <div className="row">
            <div className="col-lg-6 p-2 bg-warning">
              <Filter onChangeUrl={changeUrl}/>
            </div>
            <div className="col-lg-6 ">
            <Search onSearch={searchProduct}/>
            </div>
        </div>
        {loading && "loading..."}
        {error && `some error occur ...`}
        <div className="row mt-3">
            <div className="col">
              <ProductList products={products}/>
            </div>
        </div>
     </div>
    </>
  );
}

export default App;

// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
// import Filter from './components/Product/Filter';
// import Search from './components/Product/Search';
// import ProductList from './components/product/ProductList';
// import { useEffect, useState } from 'react';

// function App() { 
//   let [products, setProducts]=useState([])
//   let all_products;
//   let [url, setsetUrl]=useState("http://localhost:3000/products")

//   console.log(products);

//   useEffect(()=>{
//       fetch(url)
//       .then(res => res.json()
//                         // .then(data=>console.log(data))
//                         .then(data=> {setProducts(data)})
//                         .catch())
//       .catch()
//   },[url])

//   const changeUrl =(category) =>{
//       setsetUrl("http://localhost:3000/products?category="+category)
//   }

//   //searching logic
// const searchProduct = (productName) =>
// {

//     let searchedProducts = products.filter(product => 
//                                             product.name.toLowerCase()
//                                             .includes(productName.toLowerCase())
//                                           )
//     setProducts(searchedProducts) 
// }
  

//   return (
//     <>
//      <div className='container'>
//         <div className="row">
//             <div className="col-lg-6 p-2 text-center">
//               <Filter onChageUrl={changeUrl}/>
//             </div>
//             <div className="col-lg-6 p-2">
//               <Search onSearch={searchProduct}/>
//             </div>
//         </div>
//         <div className="row mt-3">
//             <div className="col">
//               <ProductList products={products} />
//             </div>
//         </div>
//      </div>
//     </>
//   );
// }

// export default App;