import React from "react";
import Sidebar from "./components/Sidebar.js";
// Router being imported as a means to navigate all the pages
// Switch is used as it renders a route exclusively whereas Router rerenders the whole page
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import ArticleComponent from './components/ArticleComponents/ArticleComponent.js';

// This file structure is curious but more current
const App = () => {
    return (
        // Wrap the entire app in the Router tags
        <Router>
            <div className="App">
                <Sidebar />
                {/* Routes below */}
                <Routes>
                    <Route exact path="/articles" element={<ArticleComponent />} />
                    {/* <Route exact path="/about" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} /> */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;