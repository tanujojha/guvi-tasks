import React from 'react'

export default function Card2() {
  
    const tier2 = [
        {
            tick: true,
            content: "5 Users"
          },
          {
            tick: true,
            content: "50GB Storage"
          },
          {
            tick: true,
            content: "Unlimited Public Projects"
          },
          {
            tick: true,
            content: "Community Access"
          },
          {
            tick: true,
            content: "Unlimited Private Projects"
          },
          {
            tick: true,
            content: "Dedicated Phone Support"
          },
          {
            tick: true,
            content: "Free Subdomain"
          },
          {
            tick: false,
            content: "Monthly Status Reports"
          }
      ]

  return (
      <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">Free</h5>
            <h6 class="card-price text-center">$9<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              {
                tier2.map((item)=>{
                    return <li class = {item.tick === false && "text-muted"}><span class="fa-li"><i class="fas fa-check"></i></span>{item.content}</li>
                })
              }
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
  )
  
}
