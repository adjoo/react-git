import React from 'react';
import loader from '../../Assets/loader.svg';

let Preloader = (props) => {
    return    <img src={loader} style={{display: 'block', margin: '2rem auto', maxHeight: '6.1rem'}} alt={'loader'}/>

}

export default Preloader