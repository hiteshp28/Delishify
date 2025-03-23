import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [food_list,setFoodList]=useState([])
    const [cartItems,setCartItems]=useState({});
    const url = import.meta.env.BACKEND_URL;
    const [token,setToken]=useState("")


    const addToCart=async (itemId)=>{
        if(!token)
        {
            toast.error("User not logged in!");
            return;
        }
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token)
        {
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
            toast.success("Food item added to cart ");
        }
    }

    const  removeFromCart=async (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        
        if(token)
        {
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
            toast.error(`Food item removed from cart`);
        }
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                let itemInfo=food_list.find((product)=> product._id===item)
                totalAmount+=itemInfo.price*cartItems[item];
            }   
        }
        return totalAmount;
    }

    const fetchFoodList=async ()=>{
        const response=await axios.get(url+"/api/food/list")
        setFoodList(response.data.data);
    }
    
    const loadCartData=async(token)=>{
        const response =await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItems(response.data.cartData);
    }

    useEffect(()=>{
        
        async function loadData(){
            await fetchFoodList();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])

    const contextValue={
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
