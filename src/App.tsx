import { Routes, Route, Navigate } from "react-router";

import { useCookies } from "react-cookie";
import Login from "./views/auth";
import { AuthProvider } from "./context/auth/provider";
import Users from "./views/users";
import UserDetails from "./views/users/details";

function App() {
  const [cookies] = useCookies(["access_token"]);
  const isAuthenticated = cookies.access_token;

  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/users" /> : <Login />}
        />

        {isAuthenticated ? (
          <>
            <Route path="/users" element={<Users />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </AuthProvider>
  );
}

export default App;
