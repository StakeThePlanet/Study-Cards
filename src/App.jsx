import { useState } from 'react'
import { useEffect } from 'react'
// import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { supabase } from './assets/createClient'
import Navbar  from './components/Navbar'
import 'virtual:windi.css'

const App = () => {


  //Users state
  const [users, setUsers] =  useState([])
  const [user, setUser] = useState({
    name:'', job:'', company:''
  })

  //bev and food state
  const [bevs, setBeverages] =  useState([])
  const [food, setFood] =  useState([])

  useEffect(() => {
    fetchUsers()
    fetchbeverages()
    fetchfood()
    // fetchCompanyNames()
  }, [])

  // function fetchCompanyNames(){
   
  // }
  

///FETCHES

//TODO remove the functionality to get company names outside of this function so it doesnt run every time it fetches an user.

  async function fetchUsers(){

    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
    // Use a Set to keep track of unique company names
    const company_dropdown = document.getElementById('companyDropdown');
    const job_dropdown =  document.getElementById('jobDropdown');
  
    const uniqueCompanyNames = [...new Set(data.map(item => item.company))];
    console.log(uniqueCompanyNames)
    const uniquejobs = [...new Set(data.map(item => item.job))];
    console.log(uniquejobs)
     uniqueCompanyNames.forEach(companyName => {
      const option = document.createElement('option');
      option.value = companyName;
      option.text = companyName;
      company_dropdown.add(option);
    });
    uniquejobs.forEach(jobName => {
      const option = document.createElement('option');
      option.value = jobName;
      option.text = jobName;
      job_dropdown.add(option);
    });
    // Create options for each unique company name
   
  }
  async function fetchbeverages(){
    const {data} = await supabase
      .from('beverages')
      .select('*')
      setBeverages(data)
    }
  async function fetchfood(){
    const {data} = await supabase
      .from('food')
      .select('*')
      setFood(data)
    }

    
  function handleChange(e){
    setUser(prevFormData=>{
      return{
        ...prevFormData,
        [e.target.name]:e.target.value
      }
    })
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
    <Navbar/>
        <br/>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Test form to Create Food:</h1>

      <form>
   
      <label>food name: </label>
        <input
          type="text"
          placeholder="food name"
          className="food_name"
          onChange={handleChange}
        /><br/>
      <label>drop line: </label>
        <input
          type="text"
          placeholder="drop line"
          className="drop_line"
          onChange={handleChange}
        /><br/>
      <label>Prep Methods: </label>
        <input
          type="text"
          placeholder="prep methods"
          className="prep_methods"
          onChange={handleChange}
        /><br/>
      <label>allergies: </label>
        <input
          type="text"
          placeholder="allergies"
          className="allergy"
          onChange={handleChange}
        /><br/>
      <label>Mies: </label>
        <input
          type="text"
          placeholder="mies en place"
          className="mies_en_place"
          onChange={handleChange}
        /><br/>
      <label>Beverage Pairing*: </label>
        <input
          type="text"
          placeholder="brev pairing"
          className="bev_pairing"
          onChange={handleChange}
        /><br/>
      <label>Course<span className='italic'>(Cold App, Warm App, Entree, Dessert): </span></label>
        <input
          type="text"
          placeholder="course"
          className="type"
          onChange={handleChange}
        /><br/>
        <label >Select a Company:</label>
        <select id="companyDropdown"></select><br/>
        <label >Select a Job:</label>
        <select id="jobDropdown"></select><br/>
       
      </form>

      <br/>    <br/>    <br/>

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
        {users.map((user) =>
          <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.job}</td>
              <td>{user.company}</td>
              <td>{user.company_id}</td>
          </tr>
        )} 
        </tbody>
      </table>
      <br/>    <br/>    <br/>
      <h1>FOOD:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>drop_line</th>
            <th>allergy</th>
            <th>mies_en_place</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
        {food.map((food) =>
          <tr key={food.food_id}>
              <td>{food.food_id}</td>
              <td>{food.name}</td>
              <td>{food.drop_line}</td>
              <td>{food.allergy}</td>
              <td>{food.mies_en_place}</td>
              <td>{food.type}</td>
          </tr>
        )} 
        </tbody>
      </table>
      <br/>    <br/>    <br/>
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
        {bevs.map((bevs) =>
          <tr key={bevs.id}>
              <td>{bevs.id}</td>
              <td>{bevs.name}</td>
              <td>{bevs.main_Spirit}</td>
              <td>{bevs.ingredients}</td>
              <td>{bevs.drop_line}</td>
              <td>{bevs.allergy}</td>
          </tr>
        )} 
        </tbody>
      </table>
    </div>
    </Router>
  )
}

export default App