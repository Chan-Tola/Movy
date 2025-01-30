import { useState } from "react";
const LoginCard = () => {
  const [isEmail, setIsEmail] = useState("");
  const [isUserName, setIsUserName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = isEmail;
    const userPassword = isPassword;
    const userName = isUserName;
    userEmail && userPassword && userName
      ? console.log("success")
      : console.log("No Data Available");
    setIsEmail("");
    setIsUserName("");
    setIsPassword("");
  };
  return (
    <form className=" text-white w-[27rem] rounded-md bg-[#212121] p-10 md:p-6">
      <h1 className="text-white text-center text-3xl mb-5">DenFlick</h1>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 capitalize text-sm md:text-xl font-medium text-white dark:text-white"
        >
          email:
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setIsEmail(e.target.value)}
          required
          value={isEmail}
          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 md:p-4"
          placeholder="Email"
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="userName"
          className="block mb-2 capitalize text-sm md:text-xl font-medium text-white dark:text-white"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setIsUserName(e.target.value)}
          required
          value={isUserName}
          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 md:p-4"
          placeholder="Username"
        />
      </div>
      <div className="mb-5">
        <label
          for="password"
          className="block mb-2 capitalize text-sm md:text-xl font-medium text-white dark:text-white"
        >
          password:
        </label>
        <input
          type="password"
          id="password"
          value={isPassword}
          placeholder="Password"
          onChange={(e) => setIsPassword(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 md:text-xl text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2 md:p-4"
          required
        />
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" className="ms-2 text-sm font-medium text-white">
          Remember me
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Login
      </button>
    </form>
  );
};

export default LoginCard;
