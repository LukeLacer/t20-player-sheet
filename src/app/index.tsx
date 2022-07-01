import React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";

import PlayerSheet from "../pages/PlayerSheet";
import { RouterWrapper } from "./styles";

const App = () => {
   return (
    <Router>
        <RouterWrapper>
            <div style={{width: '100px', display: 'flex', flexDirection: 'column', background: '#a1a1a1'}}>
                <Link to={{pathname: "/"}}>
                    Home
                </Link>
                <Link to={{pathname: "/player-sheet"}}>
                    Player Sheet
                </Link>
            </div>
            <div>
                <Routes>
                    <Route element={<> Home </>} path="/" />
                    <Route element={<PlayerSheet />} path="/player-sheet" />
                </Routes>
            </div>
        </RouterWrapper>
    </Router>
   )
}

export default App;