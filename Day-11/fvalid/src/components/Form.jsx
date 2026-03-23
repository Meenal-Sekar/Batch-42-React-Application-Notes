import { useState } from "react";
import './Form.css'
function Form() {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value

      // name:ram  password:123  gender:male
    });
    console.log(formData);
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (!formData.gender) {
      newErrors.gender = "Select gender";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");
      console.log(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
        />
        <p style={{color:"red"}}>{errors.email}</p>
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
        />
        <p style={{color:"red"}}>{errors.password}</p>
      </div>

      <div>
        <label>Gender:</label><br />
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChange}
        /> Male

        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChange}
        /> Female

        <p style={{color:"red"}}>{errors.gender}</p>
      </div>

      <button type="submit">Submit</button>

    </form>
  );
}

export default Form;