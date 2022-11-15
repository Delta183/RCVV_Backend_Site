import React from "react";
import Sidebar from "./components/Sidebar.js";
// Router being imported as a means to navigate all the pages
import { BrowserRouter as Router} from "react-router-dom";

// This file structure is curious but more current
const App = () => {
    return (
        // Wrap the entire app in the Router tags
        <Router>
            <div className="App">
                <Sidebar />
            </div>
        </Router>
    );
};

export default App;