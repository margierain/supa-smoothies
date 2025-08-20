import { Link } from "react-router-dom"

export const SmoothieCard = ({smoothies}) => {
    return(
        <div className="smoothie-card">
            <h3>{smoothies.title}</h3>
            <p>{smoothies.method}</p>
            <div className="rating">{smoothies.rating}</div>
        
        <div className="buttons">
            <Link to={'/' + smoothies.id}>
                <i className="material-icons">edit</i>
            </Link>
        </div>
        </div>
    )
}

