import { useEffect, useState } from "react";
import Heading from "../Components/Heading";
import { getAllFavorites, removeFavorite } from "../Utilities";
import Card from "../Components/Card";

const Dashboard = () => {
    
    
    const [coffees, setCoffees] = useState([])
    useEffect(() => {
        const favorites =getAllFavorites()
        setCoffees(favorites)
    }, [])


    const handleRemove = (id) =>{
        removeFavorite(id)
        const favorites =getAllFavorites()
        setCoffees(favorites)
    }
    return (
        <>
            <Heading title={'Welcome to Dashboard'}
            subtitle={'Manage coffees that you have previously added as favorite. You can view or remove them from here.' } />

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
           {
            coffees.map(coffee => <Card key={coffee.id} coffee={coffee} handleRemove={handleRemove} />)
           }
           
        </div>
        </>
    );
};

export default Dashboard;