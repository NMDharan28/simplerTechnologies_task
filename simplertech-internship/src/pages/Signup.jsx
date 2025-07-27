import { useState } from 'react';
import './Signup.css';

export default function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = 'Full Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Valid Email is required';
    if (!form.password || form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div>
          <label>Full Name</label>
          <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
