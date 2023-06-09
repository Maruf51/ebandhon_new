import React, { useContext, useEffect } from 'react';
import './BrandPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CategoryData, ResellerMail } from '../../App';
import { Link, useParams } from 'react-router-dom';
import loader from '../../images/GIF/Funnel.gif'

const Brandproduct = () => {
   const [reseller, setReseller] = useContext(ResellerMail)

   useEffect(() => {
      document.title = "Product Brands | E-Bandhon"
    }, [])

   const [categories, setCategories] = useContext(CategoryData)
   const {catName, brandName} = useParams()
   const selectedCategory = categories?.find(category => category.name === catName)
   const selectedBrand = selectedCategory?.brands.find(brand => brand.brandName === brandName)
   const selectedBrandProduct = selectedCategory?.products?.filter(product => product.productBrand === brandName)

   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

   return (
      <>
         <Header></Header>
         {
            categories === null ? <img className="loader" src={loader} alt="" /> : <div className="container brand_page">
               <div className="bp_brand_image">
                  <img src={selectedBrand.brandImage} alt="" />
               </div>
               <div className="brand_page_all_products cat_all_products">
                  <h2>All Products</h2>
                  <div className="bp_products_list cat_products_list">
                     {
                        selectedBrandProduct ? selectedBrandProduct.map(product => <Link key={product.id} className="bp_single_product cat_single_product" to={`/product/${product.productCategory}/${product.id}`}>
                        <div>
                           {/* <p className="product_dis_home">-{product.productDiscount}%</p> */}
                           <img src={product.productImage} alt="" />
                           <p className='drag_scroll_product_product_name'>{product.productName}</p>
                           <p className='drag_scroll_product_brand'>Brand: {product.productBrand}</p>
                           <div className="drag_scroll_product_price">
                              {
                                 reseller && <span title={product.productPrice}>৳ <del>{product.productPrice}</del></span>
                              }
                              {
                                 reseller ? <span>৳ {product.resellerPrice}</span> : <span>৳ {product.productPrice}</span>
                              }
                           </div>
                        </div></Link>) : <h1>No products found</h1>
                     }
                  </div>
               </div>
            </div>
         }
         <Footer></Footer>
      </>
   );
};

export default Brandproduct;