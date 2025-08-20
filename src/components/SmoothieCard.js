import { Link } from "react-router-dom"
import supabase from "../config/supabaseClient"

export const SmoothieCard = ({smoothies, onDelete}) => {

    const handleDelete = async () => {
        const { data, error } = await supabase
        .from('smoothies')
        .delete()
        .eq('id', smoothies.id)
        .select()

        if (error) {
            console.log(error, 'deleted, error')
        }
    
        if (data) {
            console.log(data, 'deleted')
            onDelete(smoothies.id)
        }
    }


    return(
        <div className="smoothie-card">
            <h3>{smoothies.title}</h3>
            <p>{smoothies.method}</p>
            <div className="rating">{smoothies.rating}</div>
        
        <div className="buttons">
            <Link to={'/' + smoothies.id}>
                <i className="material-icons">edit</i>
            </Link>
            <i className="material-icons" onClick={handleDelete}>delete</i>
        </div>
        </div>
    )
}

