import React from "react";
import Sidebar from "./components/Sidebar.js";
// Router being imported as a means to navigate all the pages
// Switch is used as it renders a route exclusively whereas Router rerenders the whole page
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import ArticleComponent from './components/ArticleComponents/ArticleComponent.js';

// This file structure is curious but more current
const App = () => {
    return (
        <div class="page-container">
            <div class="content-wrap">
                <div class="row">
                    <Router>
                        <div class="col-3">
                            <Sidebar />
                            {/* Routes below */}
                        </div>
                        <div class="col-9">
                            <Routes>
                                <Route exact path="/articles" element={<ArticleComponent />} />
                                {/* <Route exact path="/about" element={<About />} />
                                <Route exact path="/contact" element={<Contact />} /> */}
                            </Routes>
                        </div> 
                    </Router>
                </div>
            </div>
        </div>
        
    );
};

export default App;