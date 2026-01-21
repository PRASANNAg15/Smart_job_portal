import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Legend } from "recharts";
import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loggedin } from "./Redux/JWT";
import { useDispatch } from "react-redux";
function Login() {
    const navigate=useNavigate();
    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");
    const [error, Seterror] = useState("");
    const dispatch=useDispatch();
    async function handleLogin() {
        if(email &&password)
        {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (res.ok) {
            const data=await res.json();
            localStorage.setItem("token",data.token);
            alert("Welcome to the NextRole Portal!!!!!")
            dispatch(loggedin({id:data.id,token:data.token,email:data.email,isauthenticated:true}));
            navigate("/home");
        }
        else {
            Seterror("Error Invalid Credentials");
        }
    }
    else{
        alert("Missing Details");
    }
       
    }
    
    return (
        <>
          <form className="form-control" id="login">
                    <label className="form-label">Enter the Email:</label>
                    <br /><br />
                    <input className="form-control" type="email" placeholder="email" required onChange={(e) => Setemail(e.target.value)} />
                    <br /><br />
                    <label className="form-label">Enter the Password:</label>
                    <br /><br />
                    <input className="form-control" type="password" placeholder="password" required onChange={(e) => Setpassword(e.target.value)} />
                    <br /><br />
                    <button className="btn btn-primary" type="button" onClick={handleLogin}>Login</button>
                    <p style={{ color: "red" }}>{error}</p>
                </form>
                
        </>
    )
}
export default Login;