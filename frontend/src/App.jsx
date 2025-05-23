// import React, { useEffect } from 'react'
// import Navbar from './components/Navbar'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import SignUpPage from './pages/SignUpPage'
// import LoginPage from './pages/LoginPage'
// import SettingsPage from './pages/SettingsPage'
// import ProfilePage from './pages/ProfilePage'
// import { Loader } from 'lucide-react'
// import { useAuthStore } from './store/useAuthStore'
// import { Toaster } from 'react-hot-toast'

// const App = () => {
//   const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

//   useEffect(() => {
//     checkAuth();
//   }, [checkAuth]);

//   console.log("Auth User", authUser);

//   if (isCheckingAuth && !authUser) {
//     return (
//       <div className='flex items-center justify-center h-screen'>
//         <Loader className="size-10 animate-spin" />
//       </div>
//     );
//   }

//   return (

//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
//           <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
//           <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
//           <Route path="/settings" element={<SettingsPage />} />
//           <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
//         </Routes>
//         <Toaster />
//       </div>

//   );
// };

// export default App;
import React, { useEffect } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
    const { authUser, checkAuth } = useAuthStore();

    useEffect(() => {
        checkAuth(); // Checks user authentication status when app loads
    }, []);

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                {/* Home Page - protected route */}
                <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />

                {/* Sign Up Page - only for unauthenticated users */}
                <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />

                {/* Login Page - only for unauthenticated users */}
                <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />

                {/* Settings Page - always accessible */}
                <Route path="/settings" element={<SettingsPage />} />

                {/* Profile Page - protected route */}
                <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
            </Routes>

            <Toaster />
        </BrowserRouter>
    );
};

export default App;
