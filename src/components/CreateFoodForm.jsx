import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'virtual:windi.css'
import { supabase } from '../assets/createClient';
// import { Link } from 'react-router-dom';
// import Modal from './modal/modal';

const CreateFoodForm = () => {
  //food create form state
  const [formData, setFormData] = useState({
    food_name: '',
    drop_line: '',
    prep_methods: '',
    allergy: '',
    mies_en_place: '',
    bev_pairing: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Insert new food item into the 'food' table
      const { data, error } = await supabase
        .from('food')
        .insert([formData]);

      if (error) {
        throw error;
      }

      // Reset form data after successful submission
      setFormData({
        food_name: '',
        drop_line: '',
        prep_methods: '',
        allergy: '',
        mies_en_place: '',
        bev_pairing: '',
        type: ''
      });

      alert('New food item created successfully!');
    } catch (error) {
      console.error('Error creating food item:', error.message);
      alert('Failed to create new food item.');
    }
  };
    return (
        <>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Test form to Create Food:</h1>
  <form onSubmit={handleSubmit}>
   
   <div>
   <label>food name: </label>
   <input
     type="text"
     placeholder="food name"
     className="food_name"
     name="food_name"
     value={formData.food_name}
     onChange={handleChange}
   /><br />
   <label>drop line: </label>
   <input
     type="text"
     placeholder="drop line"
     className="drop_line"
     name="drop_line"
     value={formData.drop_line}
     onChange={handleChange}
   /><br />
   <label>Prep Methods: </label>
   <input
     type="text"
     placeholder="prep methods"
     className="prep_methods"
     name="prep_methods"
     value={formData.prep_methods}
     onChange={handleChange}
   /><br />
   <label>allergies: </label>
   <input
     type="text"
     placeholder="allergies"
     className="allergy"
     name="allergy"
     value={formData.allergy}
     onChange={handleChange}
   /><br />
   <label>Mies: </label>
   <input
     type="text"
     placeholder="mies en place"
     className="mies_en_place"
     name="mies_en_place"
     value={formData.mies_en_place}
     onChange={handleChange}
   /><br />
   <label>Beverage Pairing*: </label>
   <input
     type="text"
     placeholder="brev pairing"
     className="bev_pairing"
     name="bev_pairing"
     value={formData.bev_pairing}
     onChange={handleChange}
   /><br />
   <label>Course<span className='italic'>(Cold App, Warm App, Entree, Dessert): </span></label>
   <input
     type="text"
     placeholder="course"
     className="type"
     name="type"
     value={formData.type}
     onChange={handleChange}
   /><br />
 </div>
 <button type="submit" className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 px-4 rounded-md border border-transparent shadow-md hover:shadow-lg">
        Submit
    </button>
    </form>
        </>
      );
    };
    
    export default CreateFoodForm
    