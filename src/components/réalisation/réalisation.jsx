import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./realisation.css";

function Realisation(props) {
  const [data, setData] = useState([]);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    fetch("/realisation.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleItemHover = (item) => {
    setHoveredItem(item);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="ctn-data">
      {data.map((item) => (
        <div
          className={`data ${
            hoveredItem && hoveredItem.id === item.id ? "hovered" : ""
          }`}
          key={item.id}
          onMouseEnter={() => handleItemHover(item)}
          onMouseLeave={() => handleItemLeave()}
        >
          <p>{item.title}</p>
          <div>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={`/asset/${item.img}`} alt={item.title} />
            </a>
            {hoveredItem && hoveredItem.id === item.id && (
              <div>
                <div className="description">{item.description}</div>
                <div className="langage">{item.langage}</div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Realisation;