import { BrowserRouter, Route,Routes } from "react-router-dom";
import Login from "../Login.jsx";
import Attendance from "../Attendance.jsx";
import Tasks from "../Tasks.jsx";
import Home from "../Home.jsx";
import Profile from "../Profile.jsx";
function Router(){
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/attendance" element={<Attendance/>}></Route>
            <Route path="/Tasks" element={<Tasks/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default Router;