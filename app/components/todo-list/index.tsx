"use client"
import React, { useEffect, useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0); 
    const postsPerPage = 10;


    const fetchTodos = async () => {
        const skip = (page - 1) * postsPerPage;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${skip}&_limit=${postsPerPage}`)
        const data = await res.json();
        setTodos(data);
        
        setTotalItems(200);
    };


    useEffect(() => {
        window.history.pushState({},"",`?page=${page}`);
        fetchTodos();
    }, [page]);

    useEffect(() => {
        const currentPage = new URLSearchParams(window.location.search).get("page");
        if (currentPage) {
          setPage(Number(currentPage));
        }
    fetchTodos();
    }, []);


    // Calculate total pages
    const totalPages = Math.ceil(totalItems / postsPerPage);

    const pageNumbers = [];
    const maxPagesToShow = 5;  // Show 5 pages at a time
    const startPage = Math.max(1, page - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }
    
    return (
        <center>
            <div className="p-6 bg-white shadow-lg rounded-lg max-w-4xl mx-auto mt-10">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 text-left text-sm text-gray-700">#</th>
                            <th className="py-2 px-4 text-left text-sm text-gray-700">Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            todos.map((todo, index) => (
                                <tr key={todo.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4 text-sm text-gray-800">{(page - 1) * postsPerPage + index + 1}</td>
                                    <td className="py-2 px-4 text-sm text-gray-800">{todo.title}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br/>


            <div className="mt-4 flex justify-between items-center">                
                <button 
                    onClick={() => setPage(page - 1)} 
                    disabled={page === 1} className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400">Previous
                </button>


                <div className="flex space-x-2">
                    {pageNumbers.map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => setPage(pageNum)}
                            className={`py-2 px-4 rounded border ${page === pageNum ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-100"}`}>
                            {pageNum}
                        </button>
                    ))}
                </div>
                    
                
                <button 
                    onClick={() => setPage(page + 1)} 
                    disabled={page === totalPages}
                    className="bg-blue-500 text-white py-2 px-4 rounded disabled:bg-gray-400">Next
                </button>
            </div>
            </div>
        </center>
    );
}

export default TodoList;