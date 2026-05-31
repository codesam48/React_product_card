import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md"
import './App.css'

function Prac({profile, title, description, price}) {
  

  return (
    <section className='card'>
        <div className='image-div'>
          {profile}
          <div className="heart-icon">
            <FaRegHeart />
          </div>
        </div>
        <h2>
          {title}
          {/* HydroSync Pro Water Bottle */}
        </h2>
        <p>
          {description}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem at, eaque adipisci veniam aspernatur?s. */}
        </p>
        <div className='row'>
          <p>
            {price}
            {/* $ 137 */}
          </p>
          <div><MdOutlineShoppingCart /> Add To Cart</div>
        </div>
    </section>
  )
};

export default Prac
