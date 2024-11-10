import toast from "react-hot-toast"

//  Get data from local storage
const getAllFavorites =() => {
    const all = localStorage.getItem('favorites')
    

    if(all){
        const favorites = JSON.parse(all)
        console.log(favorites)
        return favorites
    }else{
        console.log([])
        return []
    }
}



// set data in local storage

const addFavorite = coffee => {
const favorites = getAllFavorites()

const isExist = favorites.find(item => item.id == coffee.id)
if(isExist){
    return toast.error('Already added')
}else{
    toast.success('Successfully added!');
    favorites.push(coffee)
localStorage.setItem('favorites', JSON.stringify(favorites))
}

} 




// remove data from local storage
const removeFavorite = id => {

const favorites = getAllFavorites()
const remaining = favorites.filter(coffee => coffee.id != id)
localStorage.setItem('favorites', JSON.stringify(remaining))
toast.success('Successfully removed')

}

export {addFavorite, getAllFavorites, removeFavorite}