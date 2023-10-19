import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
import Items from '../Items/Item'




const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item">
            {  data_product.map((proitem,i)=>{
                return <Items key={i} id={proitem.id} name={proitem.name} image={proitem.image} new_price={proitem.new_price} old_price={proitem.old_price}/>
            })      }
           
              

          
        </div>
    </div>
  )
}

export default Popular