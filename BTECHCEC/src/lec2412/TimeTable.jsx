import * as React from 'react';
class TimeTable extends React.Component{
    render(){
        return (
            <table
            border="1"
            cellSpacing="0"
            cellPadding="10"
            style={{ textAlign: 'center', fontFamily: 'Arial', width: '100%' }}
            >
            <thead>
                <tr>
                <th colSpan="6">
                    <img
                    src="https://www.soe.rku.ac.in/images/logo.png"
                    alt="University Logo"
                    align="left"
                    height="100px"
                    />
                    <div style={{ fontSize: '20px' }}>
                    RK UNIVERSITY,<br />
                    FACULTY OF TECHNOLOGY<br />
                    6CE-C+ITC
                    </div>
                </th>
                </tr>
                <tr>
                <th colSpan="6">&nbsp;</th>
                </tr>
                <tr>
                <th colSpan="2">Class Counsellor: Prof. Chhaya Patel</th>
                <th colSpan="2">&nbsp;</th>
                <th colSpan="2">W.E.F: 17-12-2024</th>
                </tr>
                <tr style={{ backgroundColor: 'lightgrey' }}>
                <th>&nbsp;</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th>10:00 TO 10:50</th>
                <td>.NET (BD)/ <br></br>ADV. JAVA (MV)</td>
                <td>.NET (PJT)/ <br></br>ADV. JAVA (LIB)</td>
                <td>AI/ML (CP)</td>
                <td>React (NV)</td>
                <td>React (SMS)</td>
                </tr>
                <tr>
                <th>10:50 TO 11:40</th>
                <td>.NET (BD)/ <br></br>ADV. JAVA (MV)</td>
                <td>.NET (PJT)/ <br></br>ADV. JAVA (LIB)</td>
                <td>AI/ML (CP)</td>
                <td>React (NV)</td>
                <td>React (SMS)</td>
                </tr>
                <tr>
                <th>Class / Lab location</th>
                <td>LL2 / LL6</td>
                <td>LL2</td>
                <td>LL1</td>
                <td>LL1</td>
                <td>LL2</td>
                </tr>
                <tr style={{ backgroundColor: 'lightgrey' }}>
                <th>11:40 TO 12:30</th>
                <td colSpan="5">TEA BREAK</td>
                </tr>
                <tr>
                <th>12:30 TO 1:20</th>
                <td>PD (LIB) / DM (OD) / EC (RKI)</td>
                <td>AI/ML (CS)</td>
                <td rowSpan="2">PD (LIB) / DM (OD) / EC (RKI)</td>
                <td>PD (DS) / DM (LIB) / EC (LIB)</td>
                <td rowSpan="2">APS<br />(DC)</td>
                </tr>
                <tr>
                <th>1:20 TO 2:10</th>
                <td>PD (LIB) / DM (OD) / EC (RKI)</td>
                <td>AI/ML (CS)</td>
                {/* <td rowSpan="2">PD (LIB) / DM (OD) / EC (RKI)</td> */}
                <td>PD (DS) / DM (LIB) / EC (LIB)</td>
                {/* <td rowSpan="2">APS<br />(DC)</td> */}
                </tr>
                <tr>
                <th>Class / Lab location</th>
                <td>214 / Elec. Mechanical Lab</td>
                <td>LL6</td>
                <td>214 / Elec. Mechanical Lab</td>
                <td>118</td>
                <td>118</td>
                </tr>
                <tr style={{ backgroundColor: 'lightgrey' }}>
                <th>2:10 TO 2:25</th>
                <td colSpan="5">LUNCH BREAK</td>
                </tr>
                <tr>
                <th>2:25 TO 3:15</th>
                <td>TOC (AKK)</td>
                <td rowSpan="2">React (NV)</td>
                <td rowSpan="2">.NET (BD) / <br />ADV.JAVA (NC)</td>
                <td rowSpan="2">ADV.JAVA<br />(NC)</td>
                <td rowSpan="2">AI/ML<br />(CP)</td>
                </tr>
                <tr>
                <th>3:15 TO 4:05</th>
                <td>TOC (AKK)</td>
                </tr>
                <tr>
                <th>Class / Lab Location</th>
                <td>201</td>
                <td>LL5</td>
                <td>LL2/LL5</td>
                <td>LL5</td>
                <td>LL5</td>
                </tr>
                <tr>
                <th colSpan="6">&nbsp;</th>
                </tr>
                <tr>
                <th>Abbreviation</th>
                <th>Subject Name and Code</th>
                <th>Faculty Abbreviation</th>
                <th>Faculty Name</th>
                <th>TH</th>
                <th>PR / TR</th>
                </tr>
                <tr>
                <td>TOC</td>
                <td>Theory Of Computation (CE631)</td>
                <td>AKK</td>
                <td>Prof. Anju Kakkad</td>
                <td>3</td>
                <td>0</td>
                </tr>
                <tr>
                <td>AI/ML</td>
                <td>Artificial Intelligence and Machine <br/>Learning (CE628)</td>
                <td>CP<br/>CS</td>
                <td>Prof. Chhaya Patel<br/>Dr. Chetan Shingadiya</td>
                <td>3</td>
                <td>2</td>
                </tr>
                <tr>
                <td>ADV.JAVA</td>
                <td>Advanced Java (CE931)</td>
                <td>NC<br />MV</td>
                <td>Prof. Neha Chauhan<br />Prof. Madhuri Vaghasana</td>
                <td>4</td>
                <td>2</td>
                </tr>
                <tr>
                <td>.NET</td>
                <td>Web application development using <br/>ASP.NET (CE927)</td>
                <td>PJT<br />BD</td>
                <td>Dr. Paresh Tanna<br />Prof. Bhoomi Dangar</td>
                <td>4</td>
                <td>2</td>
                </tr>
                <tr>
                <td>React</td>
                <td>Full Stack Web Development<br/>(CE639)</td>
                <td>NV<br />SMS</td>
                <td>Prof. Nikunj Vadher<br />Arzoo Sir</td>
                <td>4</td>
                <td>2</td>
                </tr>
                <tr>
                <td>PD</td>
                <td>Product Design (ME524)</td>
                <td>DS</td>
                <td>Prof. Deep Sanghani</td>
                <td>2</td>
                <td>2</td>
                </tr>
                <tr>
                <td>DM</td>
                <td>Disaster Management (SEE004)</td>
                <td>OD</td>
                <td>Prof. Omkar Dabhi</td>
                <td>2</td>
                <td>2</td>
                </tr>
                <tr>
                <td>EC</td>
                <td>Energy Conservation<br/> Sustainable Development (SEE005)</td>
                <td>RKI</td>
                <td>Dr. Riaz Israni</td>
                <td>2</td>
                <td>2</td>
                </tr>
                <tr>
                <td colSpan="6">&nbsp;</td>
                </tr>
                <tr>
                <td>TIMETABLE COORDINATOR</td>
                <td>&nbsp;</td>
                <td>HOD</td>
                <td>&nbsp;</td>
                <td colSpan="2">DIRECTOR</td>
                </tr>
            </tbody>
            </table>
        )
    }
}
export default TimeTable