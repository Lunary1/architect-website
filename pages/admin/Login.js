import React, { useState } from "react";
import { auth } from "../../firebase/config";
import { signIn } from "../../firebase/auth";
import { useRouter } from "next/router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Attempt to log in the user
      await signIn(auth, email, password);
      router.push("/"); // Redirect to the homepage after successful login
    } catch (err) {
      // Set a user-friendly error message
      setError("Login failed. Please check your email and password.");
      console.error(err); // Log the detailed error for debugging
    }
  };

  return (
    <div className="w-full max-w-xs m-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        autoComplete="off"
      >
        <h1 className="text-black text-center text-2xl font-bold uppercase mb-4">
          Admin Login
        </h1>

        {/* Error Message */}
        {error && (
          <div
            className="mb-4 text-red-500 text-sm text-center"
            role="alert"
            aria-live="assertive"
          >
            {error}
          </div>
        )}

        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            aria-label="Email Address"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            aria-label="Password"
            autoComplete="current-password"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;
