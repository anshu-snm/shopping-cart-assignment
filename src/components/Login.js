import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center space-x-5 mt-8">
      <header className="p-16">
        <p className="p-4 font-black text-3xl">Login</p>
        <p className="p-2 font-semibold">
          Get Access to your Orders,Wishlist and Recommendations
        </p>
      </header>
      <form class="w-96 rounded-lg  overflow-hidden p-6 space-y-12">
        <div class="relative border-b-2 focus-within:border-label_blue">
          <input
            type="text"
            name="email"
            placeholder=" "
            class="block w-full appearance-none focus:outline-none bg-transparent"
          />
          <label for="email" class="absolute top-0 -z-1 duration-300 origin-0">
            Email
          </label>
        </div>
        <div class="relative border-b-2 focus-within:border-label_blue">
          <input
            type="password"
            name="password"
            placeholder=" "
            class="block w-full appearance-none focus:outline-none bg-transparent"
          />
          <label
            for="password"
            class="absolute top-0 -z-1 duration-300 origin-0"
          >
            Password
          </label>
        </div>
        <div className="relative">
          <button
            className="btn text-white p-3 w-full"
            // style={{ backgroundColor: "#d10057" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
