import React, {useState, useEffect} from "react";
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
    const[isClosed, setIsClosed] = useState(false);
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
                        {!isClosed ? 
                        <div className="col-3"><Sidebar isClosed={isClosed} setIsClosed={setIsClosed} /></div> : 
                        <div className="col-1"><Sidebar isClosed={isClosed} setIsClosed={setIsClosed} /></div>}

                        {!isClosed ?     
                         
                        <div className="col-9">
                            
                            <Routes>
                                <Route exact path="/" element={<HomeComponent />} />
                                <Route exact path="/articles" element={<ArticleComponent />} />
                            </Routes>
                        </div> :
                        
                         <div className="col-11">
                          
                            <Routes>
                                <Route exact path="/" element={<HomeComponent />} />
                                <Route exact path="/articles" element={<ArticleComponent />} />
                               
                            </Routes>
                        </div>}
                    </Router>
                </div>
            </div>
        </div>
        
    );
};

export default App;