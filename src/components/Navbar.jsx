
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/Navbar.css'

const Navbar = ({size}) => {
    // console.log(props.size,"size");
    return(
       <nav>
            <div className="nav_box">
            <span className='my_shop'>
                Pallavi Shop
            </span>
            <div className="cart">
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>

            </div>

        </div>
        </nav>
       
    )
}
export default Navbar