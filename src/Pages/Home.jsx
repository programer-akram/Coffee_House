import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Heading from "../Components/Heading";
import Categories from "../Components/Categories";

const Home = () => {
    const categories = useLoaderData()
    console.log(categories)
    return (
        <div>
             <Banner />
             <Heading title={'Browse coffees by categories'} subtitle={'Here we serve your preference just choose'}/>
             <Categories categories={categories} />
             <Outlet />
        </div>
    );
};

export default Home;