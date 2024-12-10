"use client";
import Image from "next/image";
import { useState } from "react";
import { apiLogin } from "@/lib/authService";
import { useRouter } from "next/navigation";
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  // hàm đăng nhập
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };

    try {
      const res = await apiLogin("http://localhost:4000/auth/login", loginData);
      if (res.userdata) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full max-w-sm bg-white p-2 rounded-lg">
      <div className="w-full flex justify-center">
        <Image src="/images/logo.avif" alt="logo" width={121} height={44} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800  mb-4 mt-4 text-center">
        Login
      </h2>

      <form onSubmit={handleSubmit} className="w-[90%] m-auto">
        {/* Username Input */}
        <div className="mb-4 ">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            id="username"
            name="username"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your username"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-main-color text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
