import { useState } from "react";
import "virtual:windi.css";
import { supabase } from "../assets/createClient";

const CreateFoodForm = () => {
  //food create form state
  const [formData, setFormData] = useState({
    food_name: "",
    drop_line: "",
    prep_methods: "",
    allergy: "",
    mies_en_place: "",
    bev_pairing: "",
    type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Insert new food item into the 'food' table
      const { data, error } = await supabase.from("food").insert([formData]);

      if (error) {
        throw error;
      }

      // Reset form data after successful submission
      setFormData({
        food_name: "",
        drop_line: "",
        prep_methods: "",
        allergy: "",
        mies_en_place: "",
        bev_pairing: "",
        type: "",
      });

      alert(`New food item created successfully!`);
    } catch (error) {
      console.error("Error creating food item:", error.message);
      alert("Failed to create new food item.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <form
          className="border border-gray-300 p-6 rounded-md max-w-md"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col space-y-4">
            <label>food name: </label>
            <input
              type="text"
              placeholder="food name"
              className="food_name type p-9 border border-blue-300 rounded-md"
              name="food_name"
              value={formData.food_name}
              onChange={handleChange}
            />
            <label>drop line: </label>
            <input
              type="text"
              placeholder="drop line"
              className="drop_line p-2 border border-gray-300 rounded-md"
              name="drop_line"
              value={formData.drop_line}
              onChange={handleChange}
            />

            <label>Prep Methods: </label>
            <input
              type="text"
              placeholder="prep methods"
              className="prep_methods p-2 border border-gray-300 rounded-md"
              name="prep_methods"
              value={formData.prep_methods}
              onChange={handleChange}
            />
            <label>allergies: </label>
            <input
              type="text"
              placeholder="allergies"
              className="allergy p-2 border border-gray-300 rounded-md"
              name="allergy"
              value={formData.allergy}
              onChange={handleChange}
            />
            <label>Mies: </label>
            <input
              type="text"
              placeholder="mies en place"
              className="mies_en_place p-2 border border-gray-300 rounded-md"
              name="mies_en_place"
              value={formData.mies_en_place}
              onChange={handleChange}
            />
            <label>Beverage Pairing*: </label>
            <input
              type="text"
              placeholder="brev pairing"
              className="bev_pairing p-2 border border-gray-300 rounded-md"
              name="bev_pairing"
              value={formData.bev_pairing}
              onChange={handleChange}
            />
            <label className="text-center">
              Course
              <span className="italic">
                (Cold App, Warm App, Entree, Dessert):{" "}
              </span>
            </label>
            <input
              type="text"
              placeholder="course"
              className="type p-2 border border-gray-300 rounded-md"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 px-4 rounded-md border border-transparent shadow-md hover:shadow-lg"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <label>food name: </label>
          <input
            type="text"
            placeholder="food name"
            className="food_name"
            name="food_name"
            value={formData.food_name}
            onChange={handleChange}
          />
          <label>drop line: </label>
          <input
            type="text"
            placeholder="drop line"
            className="drop_line"
            name="drop_line"
            value={formData.drop_line}
            onChange={handleChange}
          />
          
          <label>Prep Methods: </label>
          <input
            type="text"
            placeholder="prep methods"
            className="prep_methods"
            name="prep_methods"
            value={formData.prep_methods}
            onChange={handleChange}
          />
          <label>allergies: </label>
          <input
            type="text"
            placeholder="allergies"
            className="allergy"
            name="allergy"
            value={formData.allergy}
            onChange={handleChange}
          />
          <label>Mies: </label>
          <input
            type="text"
            placeholder="mies en place"
            className="mies_en_place"
            name="mies_en_place"
            value={formData.mies_en_place}
            onChange={handleChange}
          />
          <label>Beverage Pairing*: </label>
          <input
            type="text"
            placeholder="brev pairing"
            className="bev_pairing"
            name="bev_pairing"
            value={formData.bev_pairing}
            onChange={handleChange}
          />
          <label>
            Course
            <span className="italic">
              (Cold App, Warm App, Entree, Dessert):
            </span>
          </label>
          <input
            type="text"
            placeholder="course"
            className="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
          <br />
          <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 px-4 rounded-md border border-transparent shadow-md hover:shadow-lg"
        >
          Submit
        </button>
      </form> */}
    </>
  );
};

export default CreateFoodForm;
