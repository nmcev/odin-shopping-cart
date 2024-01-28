import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './item.css'

function ItemsCard({ img, name, price, id, category }) {
  const url = `/products/${category}/${id}`;

  return (

    <Link to={url}>
      <div className='flex flex-col md:mb-12 mb-9 md:pl-14 items-center'>
        <img src={img} alt={name} className='md:max-w-full max-w-44 animate-fade ' loading='lazy' />
        <div className="md:max-w-full max-w-48 flex flex-col items-center text-12 mt-5 gap-y-2 ">
          <h1 className=' tracking-wider text-center'>{name}</h1>
          <span className=' text-dimGray'>{price}$</span>
        </div>
      </div>
    </Link>

  );
}


ItemsCard.propTypes = {

  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,

}
export default ItemsCard