import React, { useEffect} from "react";
// Uses hooks, importing a hook. This will alow us to dispatch an action
import { useDispatch } from 'react-redux';
import { getArticles } from './actions/articles.js';
// Router being imported as a means to navigate all the pages
// Switch is used as it renders a route exclusively whereas Router rerenders the whole page
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar.js";
import ArticleComponent from './components/ArticleComponents/ArticleComponent.js';
import HomeComponent from "./components/HomeComponent.js";

// This file structure is curious but more current
const App = () => {
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
      }, [dispatch]);

    // console.log(isClosed);
    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="row">
                    {/* If possible, change it so they dynamically go from 3,9 to 2,10/1,11 */}
                    <Router>
                        <div className="col-3">
                            <Sidebar />
                            {/* Routes below */}
                        </div>
                        <div className="col-9">
                            {/* There exists a 404 error here because we lack a default page */}
                            <Routes>
                                <Route exact path="/" element={<HomeComponent />} />
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