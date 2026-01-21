import { useSelector } from "react-redux";
import "./Attendance.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart, Tooltip, Bar, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";
function Attendance() {
    const [show, SetShow] = useState(false);
    const [isattendance, Setisattendance] = useState(false);
    const [attendancedata, Setattendancedata] = useState([]);
    const navigate = useNavigate();
    const token = useSelector(state => state.token.token);

    useEffect(() => {
        async function verify() {
            const res = await fetch(`/api/dashboard?token=${token}`);
            if (res.ok) {
                SetShow(true);
            }
            else {
                navigate("/");
                return (
                    <>
                        <h1>UNAUTHORIZED TO ACCESS</h1>
                    </>
                )
            }
            const datares = await fetch("https://mocki.io/v1/bcc386b8-2060-48ed-a69b-38acca8fbab2");
            if (datares.ok) {
                const data = await datares.json();
                const attendancearr=data.attendance ??[];
                Setattendancedata(attendancearr);
            }
        }
        verify();
    }, []
    );
    console.log(attendancedata);
    return (
        <>
            {show && (
                <>
                <h3 id="h3" >Welcome Employer , We wish You a Good luck today🎉🎉🎉🥳🥳</h3>
                    <section>
                        

                        {attendancedata.length > 0 && (
                            <div>
                                <section id="attendance">
                                    <h4> Welcome Check your Attendance</h4>
                                    <BarChart width={700} height={400} data={attendancedata}>
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Bar dataKey="present" fill="lightgreen" />
                                        <Tooltip />
                                    </BarChart>
                                </section>
                                <div id="home">
                                    <button className="btn btn-primary" onClick={() => { Setisattendance(true) }}>Check Attendace Details</button>
                                    <Link to={"/home"}><button id="home" className="btn btn-primary">Home</button></Link>
                                </div>
                            </div>
                        )}
                    </section>

                    {isattendance && (
                        <table className="table table-striped table-bordered">
                            <thead className="table-dark">
                                <tr>
                                    <th>Month</th>
                                    <th>Present Days:</th>
                                </tr>
                            </thead>
                            {attendancedata.map(att => (
                                <tbody>
                                    <tr>
                                        <td>{att.month}</td>
                                        <td>{att.present}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    )}
                </>
            )}
        </>
    )
}
export default Attendance;