import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("client"); // State to hold the selected role

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle signup submission (e.g., API call)
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Signup Submitted", { email, password, role });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-10">
      <div className="flex min-h-[80vh] flex-col sm:flex-row justify-center py-12 sm:px-6 lg:px-8">
        {/* Left half (Signup Form) */}
        <div className="sm:w-1/2 flex items-center justify-center px-6">
          <div>
          <div className="mb-6 flex ">
              <img
                src="/assests/logo.jpg"  // Correct path from the public folder
                alt="Logo"
                className="h-12 w-12"
              />
            </div>
            <h1 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Create an account
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-96 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-96 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="block w-96 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  />
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Select Role
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    className="block w-96 appearance-none rounded-md border border-gray-300 px-3 py-2 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 sm:text-sm"
                  >
                    <option value="">Select Role</option>
                    <option value="entrepreneur">Entrepreneur</option>
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div>
              <button
                  type="submit"
                  className="group relative flex w-96 justify-center rounded-md border border-transparent text-white bg-teal-600 group-hover:text-teal-700 px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-700 dark:border-transparent dark:hover:bg-indigo-600 dark:focus:ring-indigo-400 dark:focus:ring-offset-2 disabled:cursor-wait disabled:opacity-50"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-teal-500 group-hover:text-teal-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-white">
                Already a user?{" "}
                <a
                  href="/shop/login"
                  className="font-medium text-teal-500 hover:text-teal-400"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Right half (Image) */}
        <div className="sm:w-1/2">
          <img
            src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
            alt="Designer Life"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
