"use client";

import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About", "Todos", "Contact"];

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-2xl font-bold">🚀 Next Todo</h1>

          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActive(item)}
                className={`cursor-pointer transition ${
                  active === item
                    ? "text-yellow-300 border-b-2 border-yellow-300"
                    : "hover:text-yellow-300"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main */}
      <main className="flex justify-center py-16 px-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">

          <h2 className="text-3xl font-bold text-center mb-6">
            📝 Todo App
          </h2>

          {/* Input */}
          <div className="flex gap-2 mb-6">
            <input
              type="text"
              value={text}
              placeholder="Enter Todo..."
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              className="flex-1 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={addTodo}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 rounded-lg"
            >
              Add
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>Total : {todos.length}</span>
            <span>
              Completed : {todos.filter((t) => t.completed).length}
            </span>
          </div>

          {/* Todo List */}
          {todos.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              🚀 No Todos Yet
            </div>
          ) : (
            <ul className="space-y-3">
              {todos.map((todo) => (
                <li
                  key={todo.id}
                 className="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">

                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                    />

                    <span
                      className={`${
                        todo.completed
                          ? "line-through text-gray-400"
                          : ""
                      }`}
                    >
                      {todo.text}
                    </span>

                  </div>

                  <button
                    onClick={() => deleteTodo(todo.id)}
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