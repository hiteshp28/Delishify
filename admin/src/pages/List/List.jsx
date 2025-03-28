import React, { useEffect, useState } from "react";
import "./List.css";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";
import { Children } from "react";

const List = ({url}) => {

  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (userConfirmed) {
      try {
        const response = await axios.post(`${url}/api/food/remove`, {
          _id: foodId,
        });
        await fetchList();
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error("Error");
        }
      } catch (error) {
        toast.error("Error: " + error.message);
      }
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
              <img
                onClick={() => removeFood(item._id)}
                className="cursor"
                src={assets.remove_cart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
