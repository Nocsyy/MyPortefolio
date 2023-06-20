import "./service.css";
import Projet from "../projet/projet";
import { Link } from "react-router-dom";
function Service() {
    return (
        <div>
        <div className="ctn-service">
            <div className="div-service">
                <h2>Developpeur front-end & back-end</h2>
            </div>
            <Link>
                <a>
                    <span class="material-symbols-outlined icon-arrow">
                    keyboard_arrow_down
                    </span>
             </a>
            </Link>
        </div>
        <Projet/>
        </div>
    )
}

export default Service;