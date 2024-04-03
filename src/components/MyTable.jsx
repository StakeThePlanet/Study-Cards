import { useState, useEffect } from "react";
import "virtual:windi.css";
import { supabase } from "../assets/createClient";

const MyTable = (props) => {
  const foodEntries = Object.entries(props);
  // const [updatedFood, setUpdatedFood] = useState([]); // State to hold the updated food data

  // useEffect(() => {
  //   // Function to fetch updated data from the backend
  //   const fetchUpdatedFood = async () => {
  //     try {
  //       // Make the API call to fetch updated data from the backend
  //       // For example, you can use supabase or any other API library
  //       const { data, error } = await supabase.from('food').select('*');
  //       if (error) {
  //         throw error;
  //       }
  //       // Update the state with the new data
  //       setUpdatedFood(data);
  //     } catch (error) {
  //       console.error('Error fetching updated food data:', error.message);
  //     }
  //   };

  //   // Call the fetchUpdatedFood function to fetch initial data
  //   fetchUpdatedFood();
  // }

  return (
    <>
      <h1>FOOD:</h1>
    <table className="border-collapse border border-gray-300">
  <thead>
    <tr>
      <th className="border border-gray-300 px-4 py-2">ID</th>
      <th className="border border-gray-300 px-4 py-2">Name</th>
      <th className="border border-gray-300 px-4 py-2">Drop Line</th>
      <th className="border border-gray-300 px-4 py-2">Allergy</th>
      <th className="border border-gray-300 px-4 py-2">Mies en Place</th>
      <th className="border border-gray-300 px-4 py-2">Type</th>
    </tr>
  </thead>
  <tbody>
    
    {foodEntries.map((food) => (
      
    <tr key={food.food_id} className="border border-gray-300">
      <td className="border border-gray-300 px-4 py-2">{food.food_id}</td>
      {console.log("test",foodEntries)}
      <td className="border border-gray-300 px-4 py-2">{food.food_name}</td>
      <td className="border border-gray-300 px-4 py-2">{food.drop_line}</td>
      <td className="border border-gray-300 px-4 py-2">{food.allergy}</td>
      <td className="border border-gray-300 px-4 py-2">{food.mies_en_place}</td>
      <td className="border border-gray-300 px-4 py-2">{food.type}</td>
    </tr>
    ))}
  </tbody>
</table>
    </>
    
  );
};

export default MyTable;
