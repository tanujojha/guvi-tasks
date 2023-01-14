import React from 'react'

function Midsection() {

    const container = {
        width: "100%",
        height: "300px",
        padding: "6%"

    };

    const shoptitle = {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "60px"
    };

    const shoptext = {
        textAlign: "center",
        fontWeight: "500",
        color: "darkgray",
        padding: "20px"
    };


  return (
    <div className='bg-dark text-white' style={container}>
        <h1 className='shoptitle' style={shoptitle}>Shop in style</h1>
        <h5 className='shoptext' style={shoptext}>With this shop homepage tempelate</h5>
    </div>
  )
}

export default Midsection