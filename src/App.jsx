import { useState } from "react";
import { useEffect } from "react";
// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { supabase } from "./assets/createClient";
import Navbar from "./components/Navbar";
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

  // function fetchCompanyNames(){

  // }

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

  function handleChange(e) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  // // Function to render FlipCard components based on data
  // const renderFlipCards = (data) => {
  //   return data.map((cardData, index) => (
  //     <FlipCard key={index} frontContent={cardData.frontContent} backContent={cardData.backContent} />
  //   ));
  // };

  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <div className="grid grid-cols-2 gap-6">
  <form className="bg-white rounded-lg shadow-lg p-6">
  <CreateFoodForm />
  </form>

  <div>
    
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
    </tr>
    ))}
  </tbody>
</table>
    
  </div>
</div>

        
        <br /> <br /> <br />
        <p>🍽️ Are you ready for a culinary adventure? Introducing our upcoming app designed exclusively for restaurant owners and managers.

🚧 Currently under construction, this revolutionary platform is tailored to keep your staff informed about the latest additions to your menu, ensuring everyone stays up-to-date with your restaurant's gastronomic journey.

🍲 Stay tuned as we craft an intuitive experience that empowers your team to explore and embrace new food items effortlessly. From mouth-watering entrees to delectable desserts, our app will be your go-to destination for culinary innovation.

🔧 We're hard at work behind the scenes to bring you a seamless solution that enhances communication and excitement within your restaurant's kitchen. Get ready to elevate your dining experience like never before!

Keep an eye out for updates as we prepare to launch this game-changing app. Your restaurant's culinary revolution starts here! 🚀👨‍🍳👩‍🍳</p>
        <h1>USERS:</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Job</th>
              <th>Company</th>
              <th>Company ID</th>
            </tr>
          </thead>
          <tbody>
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
