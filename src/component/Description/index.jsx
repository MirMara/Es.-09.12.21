import "./style.css";
import ColorChoice from '../Colors';
import Sizes from '../Size';
import Button from '../Button';

const CardDescription = () => (
  <div className="card-description">
    <div className="price-title">
      <p className="card-title">Backpack</p>
      <p className="price">34$</p>
    </div>
    <p className="description"> With a concept designed to be easy to understand, RAINS bridge the gap between geography and lifestyle</p>
    <p className="colore-pallini"> Colors </p>
    <div className="pallini">
    <ColorChoice color="black"/>
     <ColorChoice color="blue"/>
     <ColorChoice color="yellow"/>
     <ColorChoice color="grey"/>
      </div> 
      <div className="misure">
      <Sizes prop= "Size" />
      </div>
      <div className="BTN">
       <Button prop= "title"/>
      </div>
  </div>
);

export default CardDescription;
