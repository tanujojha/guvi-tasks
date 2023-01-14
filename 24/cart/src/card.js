import React, {useState} from 'react';


function Card({callback, item}) {

    const [added, setAdded] = useState(false);

    const style1 = 'addbtn btn btn-outline-dark';
    const style2 = 'addbtn btn btn-outline-dark removeitem'
    
    const handelClick = ()=>{
        console.log(added); // prints false here 
        setAdded(!added)
        console.log(added); // prints false because added is not yet updated
        callback(!added) // using ! here so that it sends true otherwise it sends false. it could be because added has not been updated
    }

    

  return (
    <div className='cardmain'>
        <div className='cardimgdiv'>
            <img className='cardimg' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..dummy image.."/>
        </div>
        <div className='cardbody'>
            <h5 className='prodname'>{item.name}</h5>
            <p className='rating'>{item.rating}</p>
            <p className='price'><span className='cutprice text-muted'>{item.cutPrice}</span> - {item.price}</p>
            <button onClick={handelClick} className={added ? style2 : style1} type="button">{added ? "Remove Item" : "Add to Cart"}</button>
        </div>
    </div>
  )
}

export default Card
