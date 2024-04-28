import { useState } from "react";
import { useEffect } from "react";
// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { supabase } from "./assets/createClient";
import Navbar from "./components/Navbar";
import MyTable from "./components/MyTable";
import CreateFoodForm from "./components/CreateFoodForm";
import "virtual:windi.css";

const App = () => {
  //Users state
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    job: "",
    company: "",
  });

  //bev and food state
  const [bevs, setBeverages] = useState([]);
  const [food, setFood] = useState([]);

  useEffect(() => {
    fetchUsers();
    fetchbeverages();
    fetchfood();
    // fetchCompanyNames()
  }, []);

  useEffect(() => {
    // Initialize Datadog RUM
    (function(l) {
      if (l.search === "") return;
      var w = window;
      var dq = w.ddq = w.ddq || [];
      dq.push(['setClientToken', 'YOUR_CLIENT_TOKEN']);
      dq.push(['data', { 'application_id': 'YOUR_APPLICATION_ID' }]);
      dq.push(['send', l]);
    })(window.location.search);
  }, []);

  ///FETCHES


  //TODO remove the functionality to get company names outside of this function so it doesnt run every time it fetches an user.

  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*");
    setUsers(data);
    // Use a Set to keep track of unique company names
    const company_dropdown = document.getElementById("companyDropdown");
    const job_dropdown = document.getElementById("jobDropdown");

    const uniqueCompanyNames = [...new Set(data.map((item) => item.company))];
    console.log(uniqueCompanyNames);
    const uniquejobs = [...new Set(data.map((item) => item.job))];
    console.log(uniquejobs);
    uniqueCompanyNames.forEach((companyName) => {
      const option = document.createElement("option");
      option.value = companyName;
      option.text = companyName;
      company_dropdown.add(option);
    });
    uniquejobs.forEach((jobName) => {
      const option = document.createElement("option");
      option.value = jobName;
      option.text = jobName;
      job_dropdown.add(option);
    });
    // Create options for each unique company name
  }
  async function fetchbeverages() {
    const { data } = await supabase.from("beverages").select("*");
    setBeverages(data);
  }
  async function fetchfood() {
    const { data } = await supabase.from("food").select("*");
    setFood(data);
  }

   // Function to sort the form data based on a specific property
   const sortByProperty = (property) => {
    const sortedData = [...formData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    setFormData(sortedData);
  };

  const handleDelete = () => {
    // Call backend API to delete entry
    fetch(`/api/delete/${data.id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // If deletion is successful, trigger onDelete callback
          onDelete(data.id);
        } else {
          console.error('Error deleting entry:', response.status);
        }
      })
      .catch(error => {
        console.error('Error deleting entry:', error);
      });
  };

  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <span className="w-screen p-4">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
        Test form to Create Food:
      </h1>
    </span>
        <div className="flex gap-4">
  <div className="w-1/3">
  <CreateFoodForm />
  </div>
  <div className="w-2/3">

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
    {food.map((food) => (
    <tr key={food.food_id} className="border border-gray-300">
      <td className="border border-gray-300 px-4 py-2">{food.food_id}</td>
      <td className="border border-gray-300 px-4 py-2">{food.food_name}</td>
      <td className="border border-gray-300 px-4 py-2">{food.drop_line}</td>
      <td className="border border-gray-300 px-4 py-2">{food.allergy}</td>
      <td className="border border-gray-300 px-4 py-2">{food.mies_en_place}</td>
      <td className="border border-gray-300 px-4 py-2">{food.type}</td>
      <td>
      <div className="flex flex-col items-center">
      <button className="w-full bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded" onClick={handleDelete}>Edit</button>
      <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" onClick={handleDelete}>Delete</button>
      </div>
        
      </td>
    </tr>
    ))}
  </tbody>
</table>

{/* <div className="flex flex-col items-center justify-center h-screen space-y-6">
  <div className="text-center animate-fadeIn">
    <p className="text-2xl">🍽️ Are you ready for a culinary adventure?</p>
  </div>
  <div className="text-center animate-fadeIn delay-200">
    <p className="text-2xl">Introducing our upcoming app for restaurant owners and managers.</p>
  </div>
  <div className="text-center animate-fadeIn delay-400">
    <p className="text-2xl">🚧 Currently under construction, this revolutionary platform...</p>
  </div>
  <div className="text-center animate-fadeIn delay-600">
    <p className="text-2xl">...is tailored to keep your staff informed about the latest additions to your menu.</p>
  </div>
  <div className="text-center animate-fadeIn delay-800">
    <p className="text-2xl">🍲 Stay tuned as we craft an intuitive experience...</p>
  </div>
  <div className="text-center animate-fadeIn delay-1000">
    <p className="text-2xl">...that empowers your team to explore and embrace new food items effortlessly.</p>
  </div>
  <div className="text-center animate-fadeIn delay-1200">
    <p className="text-2xl">From mouth-watering entrees to delectable desserts...</p>
  </div>
  <div className="text-center animate-fadeIn delay-1400">
    <p className="text-2xl">...our app will be your go-to destination for culinary innovation.</p>
  </div>
  <div className="text-center animate-fadeIn delay-1600">
    <p className="text-2xl">🔧 We're hard at work behind the scenes to bring you a seamless solution...</p>
  </div>
  <div className="text-center animate-fadeIn delay-1800">
    <p className="text-2xl">...that enhances communication and excitement within your restaurant's kitchen.</p>
  </div>
  <div className="text-center animate-fadeIn delay-2000">
    <p className="text-2xl">Get ready to elevate your dining experience like never before!</p>
  </div>
  <div className="text-center animate-fadeIn delay-2200">
    <p className="text-2xl">🚀👨‍🍳👩‍🍳</p>
  </div>
</div> */}

  {/* <h1>FOOD:</h1>
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
</table> */}
  </div>
</div>

         

          
        <br /> <br /> <br />
        
       
        <h1>USERS:</h1>
        <table>
          <thead>
            <tr>
              <th >ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Company</th>
              <th>Company ID</th>
            </tr>
          </thead>
          <tbody >
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.job}</td>
                <td>{user.company}</td>
                <td>{user.company_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br /> <br /> <br />
        <br /> <br /> <br />
        <h1>BEVERAGES:</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>spirit</th>
              <th>ingredients</th>
              <th>drop_line</th>
              <th>allergy</th>
            </tr>
          </thead>
          <tbody>
            {bevs.map((bevs) => (
              <tr key={bevs.id}>
                <td>{bevs.id}</td>
                <td>{bevs.name}</td>
                <td>{bevs.main_Spirit}</td>
                <td>{bevs.ingredients}</td>
                <td>{bevs.drop_line}</td>
                <td>{bevs.allergy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Router>
  );
};

export default App;
