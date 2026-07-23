"use client";

import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [active, setActive] = useState("Home");

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([...todos, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const navItems = ["Home", "About", "Todos", "Contact"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold cursor-pointer">
            🚀 Next Todo
          </h1>

          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition-all duration-300 hover:text-yellow-300 ${
                  active === item
                    ? "text-yellow-300 border-b-2 border-yellow-300 pb-1"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Todo App */}
      <main className="flex justify-center items-center py-16">
        <div className="bg-white shadow-lg rounded-xl p-6 w-[450px]">
          <h1 className="text-3xl font-bold text-center mb-5">
            📝 Next.js Todo App
          </h1>

          <div className="flex gap-2 mb-5">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter Todo..."
              className="border flex-1 rounded-lg p-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={addTodo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
            >
              Add
            </button>
          </div>

          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No Todos Yet 🚀</p>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3"
                >
                  <span>{todo}</span>

                  <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}