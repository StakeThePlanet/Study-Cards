// Modal.js
import './Modal.css'; // Import a CSS file for styling

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
     {/* <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-300 p-6 rounded-md max-w-md"
        >
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
          <label className="text-center">
            Course
            <span className="italic">
              (Cold App, Warm App, Entree, Dessert):{" "}
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
          <span className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text hover:bg-gradient-to-l hover:from-pink-500 hover:to-purple-500 hover:text-white py-2 px-4 rounded-md border border-transparent shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </span>
        </form>
      </div> */}

      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={onClose}>&times;</span>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;