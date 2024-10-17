import React from 'react';
import './Assignment.css'
import images from './assets/images';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Assignment = () => {
  return (
    <div id="assignment" className="m-4 lg:m-6 lg:m-12 bg-red-400 px-8 md:px-12 lg:px-12 xl:px-20 py-6 lg:py-8">
      <h1 className="text-3xl lg:text-5xl text-white font-semibold ">
        Our Services
      </h1>
      <div className="grid-container">

        <div className="boxes">
          <img src={images.first} alt="Emergency plumbing" />
          <h3>Emergency Plumbing Services</h3>
          <p className='text-sm'>Our plumbers are ready 24/7 for emergencies, including nights, weekends, and holidays.</p>
          <a className='text-indigo-900' href="/">Explore this service <KeyboardArrowRightIcon/></a>
        </div>

        <div className="boxes">
        <img src={images.cleaning} alt="Emergency plumbing" />
          <h3>Plumbing and Drains</h3>
          <p className='text-sm'>As the largest plumbing and drain service company, we made thousands of repairs everyday.</p>
          <a className='text-indigo-900' href="/" >Explore this service<KeyboardArrowRightIcon/></a>
        </div>

        <div className="boxes">
        <img src={images.waterdrop} alt="Emergency plumbing"/>
        <h3>Water Damage</h3>
          <p className='text-sm'>Our team are equiped with state-of-the-art water extraction and cleanup equipment.</p>
          <a className='text-indigo-900' href="/">Explore this service<KeyboardArrowRightIcon/></a>
        </div>

        <div className="boxes">
        <img src={images.heater} alt="Emergency plumbing"  />
        <h3>Water Heaters</h3>
          <p className='text-sm'>Trust Roto-Rooter for repair and replacement of gas,electric and tankleness water heaters.</p>
          <a className='text-indigo-900' href="/" >Explore this service<KeyboardArrowRightIcon/></a>
        </div>

      </div>
    </div>
  );
}

export default Assignment;
