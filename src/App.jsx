
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './assets/components/CoffeeCard';

function App() {

  const coffees = useLoaderData();

  return (
    <div className='m-6'>

      <h1 className='text-3xl text-center text-purple-600'>Coffees: {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}>

          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
