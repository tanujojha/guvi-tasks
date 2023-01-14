import React from 'react'

export default function Card1() {

    const tier1 = [
        {
          tick: true,
          content: "Single User"
        },
        {
          tick: true,
          content: "5GB Storage"
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
          tick: false,
          content: "Unlimited Private Projects"
        },
        {
          tick: false,
          content: "Dedicated Phone Support"
        },
        {
          tick: false,
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
            <h6 class="card-price text-center">$0<span class="period">/month</span></h6>
            <hr/>
            <ul class="fa-ul">
              {
                tier1.map((item)=>{
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



            // <li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
            //   <li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
            //   <li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
            //   <li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
            //   <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited
            //     Private Projects</li>
            //   <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated
            //     Phone Support</li>
            //   <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain
            //   </li>
            //   <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status
            //     Reports</li>


