import { useSelector } from "react-redux";
import "./Profie.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Profile(){
    const token=useSelector(state=>state.token.token);
    const[show,Setshow]=useState(false);    
    useEffect(()=>{
        async function verify(){
            const res=await fetch(`/api/profile?token=${token}`);
            if(res.ok)
            {
                Setshow(true);
            }
        }
        verify();
    },[]);
    return(
        <>
        {show ?(
         <section id="Details">
                    <form>
                        <p>Name:<strong>Prasanna</strong></p>
                        <p>Role:<strong>Full Stack Developer</strong></p>
                        <p>Joined Date:<strong>25/01/2020</strong></p>
                        <p>Email:<strong>prasannag@gmail.com</strong></p>
                        <p>contact:<strong>97456789456</strong></p>
                       <Link to={"/home"}><button className="btn btn-primary">Home</button></Link>
                    </form>
                   
                </section>
        ):(
            <h1>UNAUTHORIZED</h1>
        )}
        </>
    )
}
export default Profile;