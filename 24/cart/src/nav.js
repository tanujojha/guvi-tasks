import React from 'react'

function Nav({cart}) {
  return (
    <nav className='nav'>
        
        <div className='navcontent'>
            <h4 className='navtitle'>Start Bootstrap</h4>
            <div className='linksdiv'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Shop</li>
                </ul>
            </div> 
        </div >
        
        <div className='cartdiv'>
            <button className='cartbtn btn btn-lg btn-outline-dark' type="button"><i class="fa-solid fa-cart-shopping"></i>Cart <span className='pill'>{cart}</span></button>
        </div>

    </nav>
  )
}

export default Nav