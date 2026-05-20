 import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     addProduct(formData);

  setFormData({
    name: "",
    price: "",
    category: "",
    description: "",
  });
    console.log(formData);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto" }}>
      <h2>Product CRUD Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Save Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
