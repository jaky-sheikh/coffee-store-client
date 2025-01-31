
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './assets/components/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <div className='m-6'>

      <h1 className='text-3xl text-center text-purple-600'>Coffees: {coffees.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          >

          </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
