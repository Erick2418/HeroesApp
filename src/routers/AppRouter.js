import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthContext } from "../components/auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PublicRoute } from "./PublicRoute"
export const AppRouter = () => {

    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <Router>
        <div>
          
            <Switch>
                <PublicRoute 
                path="/login" 
                component={LoginScreen}
                isAuthenticated={user.logged}
                />
                
                <PrivateRoute 
                path="/" 
                component={DashboardRoutes}
                isAuthenticated={user.logged}

                />
            </Switch>
        </div>
        </Router>
    );
}
