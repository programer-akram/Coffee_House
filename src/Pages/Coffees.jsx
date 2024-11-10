import { useLoaderData } from "react-router-dom";
import Card from "../Components/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData()
    const [coffees, setCoffees] = useState(data)
    const handleSort = sortBy => {
        if(sortBy == 'popularity'){
            const sorted = [...data].sort((a,b) => b.popularity - a.popularity)
            setCoffees(sorted)
        }
        else if(sortBy == 'rating'){
            const sorted = [...data].sort((a,b) => b.rating - a.rating)
            setCoffees(sorted)
        }
    }
    return (
        <>
        <div className="flex justify-between">
        <div >
            <h1 className="text-base lg:text-3xl font-thin">Sort Coffee by Popularity & Rating</h1>
        </div>
        <div className="lg:space-x-4 space-x-1 flex">
            <button onClick={() => handleSort('popularity')} className="btn btn-warning">Popularity</button>
            <button onClick={() => handleSort('rating')} className="btn btn-warning text-xm lg:text-base">Rating</button>
        </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
           {
            coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
           }
           
        </div>
        </>
    );
};

export default Coffees;