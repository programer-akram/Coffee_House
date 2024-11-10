import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from '../assets/nutrition.png'
import { addFavorite, getAllFavorites } from "../Utilities";


const CoffeeDetails = () => {
    const data = useLoaderData()
    const  {id} = useParams()
    const [coffee, setCoffee] = useState({})
    const [isFavorite, setIsFavorite] = useState(false)
    
    useEffect(() => {
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData)

        const favorites = getAllFavorites()
        const isExist = favorites.find(item => item.id == singleData.id)
        if(isExist){
            setIsFavorite(true)
        }
    },[data, id])

    // handleFavoriteBtn
    const  handleFavoriteBtn = coffee => {

        addFavorite(coffee)
        setIsFavorite(true)
    }



    const {name,image,category,origin,type,description,rating,popularity,making_process,nutrition_info,ingredients} = coffee;

    return (
        <>
        <div>
            <img className="w-full h-[600px] rounded-lg" src={image} alt="" />
        </div>
        <div className="flex justify-between mt-12">
            <div>
                <h2 className="text-2xl">Latte</h2>
                <p className="text-lg">Popularity: {popularity}</p>
                <p className="text-lg">Rating: {rating}</p>
            </div>
            <div>
                <button disabled={isFavorite} onClick={() => handleFavoriteBtn(coffee)} className="btn btn-warning">Add Favorite</button>
            </div>
        </div>
        <div className="mt-16">
            <h2 className="text-2xl">Making Process:</h2>
            <p className="text-lg">{making_process}</p>
        </div>

        <div className="flex justify-between mt-16">
            <div className="flex-1">
                <div>
                    <h2 className="text-2xl">Ingredients</h2>
                    <ul className="text-lg ml-12">
                        {
                            ingredients &&
                            ingredients.map((item,i) => (
                                <li className="list-disc" key={i}>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-16 ">
                    <h2 className="text-2xl">Nutrition</h2>
                    <ul className="text-lg ml-12">
                        {
                            nutrition_info &&
                            Object.keys(nutrition_info).map((n,i) => (
                                <li className="list-disc" key={i}>
                                    {n}: {nutrition_info[n]}
                                </li>
                            ))
                        }
                    </ul>

                </div>
            </div>
            <div className="flex-1">
                <img  src={nutritionImg} alt="" />
            </div>
        </div>
        </>
    );
};

export default CoffeeDetails;