import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart}= useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                    <img src={product.image} alt='' />
                  
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} />
                </div>
            </div>


            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src={star_icon} alt />
                    <img src={star_icon} alt />
                    <img src={star_icon} alt />
                    <img src={star_icon} alt />
                    <img src={star_dull} alt />
                    <p>(122 Ratings)</p>
                </div>
                <div className="product-prices">
                    <div className="old-price">
                        ${product.old_price}
                    </div>
                    <div className="new-price">
                        ${product.new_price}
                    </div>
                </div>

                <div className="productdisplay-right-description">
                    A lightweight,usuall knitted,pullover shirt,close-fitting and wide a round neckline and short sleeves,worn as and
                    casual office wear.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category</span> :Women,T-Shirt,Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern,Latest</p>



            </div>
        </div>
    )
}

export default ProductDisplay