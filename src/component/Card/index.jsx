
import React from 'react'; //non si scrive nelle nuove versioni
import './style.css';
import CardDescription from '../Description';
import Img from '../Img';


const Card = () => (
    <div className="card">
     <Img src="https://res.cloudinary.com/db46klhlo/image/upload/v1639056543/jakob-owens-O_bhy3TnSYU-unsplash.jpg" />
     <CardDescription />
     
    </div>
  );


export default Card; 