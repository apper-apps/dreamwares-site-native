import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
import HomePage from "@/components/pages/HomePage";
import BlogPage from "@/components/pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
    <div
        className="min-h-screen bg-gradient-to-br from-deep-space via-void-black to-cyber-dark relative overflow-hidden">
        {/* Futuristic Background Effects */}
        <div className="fixed inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
        <div
            className="fixed inset-0 bg-gradient-to-r from-electric-blue/5 via-transparent to-neon-purple/5 pointer-events-none animate-pulse"></div>
        <div className="particle-field fixed inset-0 pointer-events-none"></div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            className="cyber-toast-container"
            toastClassName="cyber-toast"
            style={{
                zIndex: 9999,
                filter: "drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))"
            }} />
    </div>
</BrowserRouter>
  );
}

export default App;