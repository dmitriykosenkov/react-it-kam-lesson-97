import React from 'react';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
   return (
      <div style={{ maxWidth: '200px', margin: '0 auto' }}>
         <img src={preloader} />
      </div>
   )
}

export default Preloader;