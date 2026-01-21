import "./Home.css"
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedout } from "./Redux/JWT";
function Home(){
    const id=useSelector(state=>state.token.id);
    const token=useSelector(state=>state.token.token);
    console.log(id,token);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    function handleLogout()
    {
      dispatch(loggedout());
      localStorage.removeItem("token");
       navigate("/");
    }
    return(
        <>
        <div id="top">
                <div id="logocontent">
                    <img src="./src/assets/logo.jpg" alt="logo" />
                </div>
              
                <div id="profilecontent">
                     <div>
                    <button className="btn btn-danger" onClick={handleLogout}>LogOut</button>
                </div>
                   <Link to={"/profile"}><img src="./src/assets/profile.png" alt="profile" /></Link>
                    <Link to={"/attendance"} ><button className="btn btn-primary">Attendance</button></Link>
                    <Link to={"/Tasks"}><button className="btn btn-primary">Tasks</button></Link>
                </div>

              
            </div>
  
              <h1>Welcome User , to the Portal</h1>
              <h3>Have a pleasent Journey</h3>
           
               
            
        </>
    )
}
export default Home;