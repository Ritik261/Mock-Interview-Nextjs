"use client";

import { useRouter } from "next/navigation";

function LandingPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to Confidence<span className="text-indigo-600">AI</span>
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Your AI-powered solution for managing interviews and responses.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push("/sign-in")}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-800"
        >
          Login
        </button>
        <button
          onClick={() => router.push("/sign-up")}
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default LandingPage;