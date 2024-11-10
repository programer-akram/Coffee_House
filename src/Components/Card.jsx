import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Card = ({coffee, handleRemove}) => {

  const {pathname} = useLocation()

    const {id,name,image,category,origin,type,description,rating,popularity} =coffee;
    return (
        <div className="card card-compact bg-base-100 w-76 shadow-xl mt-10 relative">
   <Link to={`/coffee/${id}`}>         
  <figure>
    
    <img className=" w-full h-[200px] rounded-lg"
      src={image}
      alt="coffee" />
    
  </figure>
  <div className="card-body">
    <h2 className="card-title">Name: {name}</h2>
    <p>Category:{category}</p>
    <p>Type: {type}</p>
    <p>Origin: {origin}</p>
    <p>Rating:{rating}</p>
    <p>Popularity: {popularity}</p>
  </div>
  </Link>

  {
    pathname === '/dashboard' && (
      <div onClick={() => handleRemove(id)} className="absolute -top-4 -right-2 bg-warning  rounded-full p-2">
        <FaTrash  />
      </div>
    )
  }
</div>
    );
};

export default Card;