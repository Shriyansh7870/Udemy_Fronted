import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Search = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <>
      <h1 className="LearingforFuture">Search Result</h1>
      <div className="MainContainer">
        {data.map((item, index) => (
          <div className="child_container" key={index}>
            <div className="laptop_div">
              <img className="MainImage" src={item.image} alt="Not Found" />
            </div>
            <div>{item.description.slice(0, 50)}</div>
            <div className="LaptopmodelName">{item.instructor}</div>
            <div className="">{item.Rating}⭐⭐⭐⭐⭐</div>
            <div className="Price-of-All">{item.price}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
