

export const SmoothieCard = ({smoothies}) => {
    console.log(smoothies, 'dance')
    return(
        <div className="smoothie-card">
            <h3>{smoothies.title}</h3>
            <p>{smoothies.method}</p>
            <div className="rating">{smoothies.rating}</div>
        </div>
    )
}

