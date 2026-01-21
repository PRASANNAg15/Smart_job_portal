import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PieChart,Pie,Tooltip,Legend } from "recharts";
import { Link } from "react-router-dom";
function Tasks(){

    const token=useSelector(state=>state.token.token);
    console.log(token);
     const taskData = [
        { name: "Completed", value: 3 },
        { name: "In Progress", value: 1 },
        { name: "Pending", value: 1 },
    ];
    const[tasks,SetTasks]=useState([]);
   
    const[istasks,Setistasks]=useState(false);
    const[show,SetShow]=useState(false);
     useEffect(()=>{
      async function verify(){
        const res=await fetch(`/api/Tasks?token=${token}`);
        if(res.ok)
        {
            SetShow(true);
        }
        const taskdata= await fetch("https://mocki.io/v1/a9ca7ced-0222-4292-ae15-32eae3e7dd75");
        if(taskdata.ok)
        {
            const data=await taskdata.json();
            SetTasks(data);
        }
      }
      verify();
     },[]);

    return(
        <>
        {show ?(
            <>
         <section id="task">
                            <h4>Check Your Tasks</h4>
                            <PieChart width={700} height={350}>
                                <Pie
                                    data={taskData}
                                    dataKey="value"
                                    nameKey="name"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={100}
                                    fill="orange"
                                    label
                                />
                                <Tooltip />
                                <Legend />
                            </PieChart>
                            <br />
                        </section>
                        <div id="home">
                        <button className="btn btn-primary" onClick={() => { Setistasks(true)}}>Check Full Details</button>
                        <Link to={"/home"}><button className="btn btn-primary">Home</button></Link>
                        </div>
                 {istasks &&(
                <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>No</th>
                            <th>Task Name</th>
                            <th>Assigned By</th>
                            <th>Status</th>
                            <th>Deadline</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.id}</td>
                                <td>{task.name}</td>
                                <td>{task.assignedBy}</td>
                                <td>{task.status}</td>
                                <td>{task.deadline}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}       
                 </>
          ):(
            <h1>UNAUTHORIZED</h1>
          )}
          
        </>
    )
}
export default Tasks;