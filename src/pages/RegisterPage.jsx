import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("http://127.0.0.1:5000/api/users/post", {
        name,
        email,
        password,
      });
      alert("Registration Successful.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (e) {
      alert("Registration failed. Please try again");
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Hasan Kanj"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            required
          />

          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            required

          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required

          />

          <button className="primary">Register</button>

          <div className="text-center py-2 text-gray-500">
            Already a member?
            <Link className="underline text-black" to={"/login"}>
              Login
            </Link>
          </div>

         
        </form>
      </div>
    </div>
  );
}
