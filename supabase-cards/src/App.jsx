import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import { supabase } from './assets/createClient'

const App = () => {

  const [users, setUsers] =  useState([])
  const [user, setUser] = useState({
    name:'', job:'', company:''
  })
  const [bevs, setBeverages] =  useState([])
  const [food, setFood] =  useState([])

  useEffect(() => {
    fetchUsers()
    fetchbeverages()
    fetchfood()
  }, [])


///FETCHES
// Fetch data from the API

  async function fetchUsers(){
    const company_dropdown = document.getElementById('companyDropdown');
    const job_dropdown = document.getElementById('jobDropdown');
    const {data} = await supabase
      .from('users')
      .select('*')
      setUsers(data)
    // Use a Set to keep track of unique company names
    const uniqueCompanyNames = [...new Set(data.map(item => item.company))];
    const uniquejobs = [...new Set(data.map(item => item.job))];
    // Create options for each unique company name
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

  return (
    <div>
      <form>
      <label for="name">user name:</label>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
        /><br/>
        <label for="job">Select a Job:</label>
        <select id="jobDropdown"></select><br/>
        <label for="companyDropdown">Select a Company:</label>
        <select id="companyDropdown"></select>
      </form>

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
    
  )
}

export default App