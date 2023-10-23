import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold mb-8">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="text"
          placeholder="Email"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="text"
          placeholder="Password"
          className="border rounded-lg p-3"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SignUp
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>
          Have an Account?{" "}
          <Link to="/signin">
            <span className='text-blue-700'>Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
