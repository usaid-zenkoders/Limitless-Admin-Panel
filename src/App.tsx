import { Routes, Route, Navigate } from "react-router";

import { useCookies } from "react-cookie";
import Login from "./views/auth";
import { AuthProvider } from "./context/auth";
import Users from "./views/users";

function App() {
  const [cookies] = useCookies(["access_token"]);
  const isAuthenticated = cookies.access_token;
  console.log(isAuthenticated);

  return (
    <AuthProvider>
      <Routes>
        {/* Redirect logged-in users away from login */}
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/users" /> : <Login />}
        />

        {/* Dashboard Routes (Protected) */}
        {isAuthenticated ? (
          <>
            <Route path="/users" element={<Users />} />
          </>
        ) : (
          // Redirect Unauthenticated Users to Login
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </AuthProvider>
  );
}

export default App;
