import React from 'react'
import {Link} from 'react-router-dom'
export default function about() {
  return (
    <div className='aboutbox'>
        <p className='heading'>Welcome to ParkAndPay</p>
        <p>At ParkAndPay, we understand that parking can often be a stressful and time-consuming experience, especially in busy urban areas. That's why we're here to make parking as easy and convenient as possible, with a range of innovative solutions designed to meet your parking needs.

Our platform allows you to find and book parking spots at a variety of locations, from busy city centers to airports and event venues. With real-time availability updates and easy online booking, you can plan your parking in advance and be confident that you'll have a spot waiting for you when you arrive.

We also offer a range of additional services to enhance your parking experience, such as valet parking, car washing and detailing, and electric vehicle charging stations. Our goal is to provide you with a stress-free parking experience, so you can focus on enjoying your day or getting to your destination on time.

Thank you for choosing ParkAndPay for all your parking needs. We're committed to providing you with the best possible parking experience, and we look forward to serving you!</p>
        <Link class="fa fa-github" to='' >Github</Link>
    </div>
  )
}
