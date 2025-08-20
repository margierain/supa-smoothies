import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";

// Components
import { SmoothieCard } from "../components/SmoothieCard";

const Home = () => {
  console.log(supabase);
  const [fetchError, setFetchError] = useState(null)
  const [smoothies, setSmoothies] = useState([])

  const handleDelete = (id) => {
    setSmoothies(prevSmoothies => {
      return prevSmoothies.filter(sm => sm.id !== id)
    })

  }

  useEffect(() => {
    const fetchSmoothies = async () => {
      const { data, error } = await supabase
        .from('smoothies')
        .select('*')

      if (error) {
        setFetchError('Could not fetch the smoothies')
        setSmoothies([])
        console.log(error)
      }

      if (data) {
        setSmoothies(data ?? [])
        setFetchError(null)
      }
    }
    fetchSmoothies()
  }, [])


  return (
    <div className="page home">
      {
        fetchError && (<p>{fetchError}</p>)
      }
      {smoothies && (
        <div className="smoothies">
          <div className="smoothie-grid">
            {smoothies.map(smoothies => (
              <SmoothieCard 
              key={smoothies.id} 
              smoothies={smoothies}
              onDelete={handleDelete} />
            ))}
          </div>
        </div>)}
    </div>
  )
}

export default Home;