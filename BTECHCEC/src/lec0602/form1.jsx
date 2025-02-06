import { useState } from "react";

const Form = ({ i }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [gender,setGender]=useState("")
  const [city, setCity] = useState("");
  const [board, setBoard]=useState("");
  const [hobbies,setHobbies]=useState("");
  const [level, setLevel]=useState("");
  const [run, setRun]=useState("")

  return (
    <div>
      {i === '1' ? (
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input onChange={(e)=>setName(e.target.value)} value={name} name="name" type="text" />
          </div>
          <div>
            <label htmlFor="surname">Surname</label>
            <input onChange={(e)=>setSurname(e.target.value)} value={surname} name="surname" type="text" />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input onChange={(e)=>setAddress(e.target.value)} value={address} name="address" type="text" />
          </div>
          <div>
            <p>Gender</p>
            <input onChange={(e)=>setGender(e.target.value)} type="radio" name="gender" value="male" id="male" />
            <label htmlFor="male">Male</label>
            <input onChange={(e)=>setGender(e.target.value)} type="radio" name="gender" value="female" id="female" />
            <label htmlFor="male">Female</label>
          </div>
          <div>
          <select onChange={(e)=>setCity(e.target.value)} value={city} name="city" id="city">
            <option value="rajkot">Rajkot</option>
            <option value="ahmedabad">Ahmedabad</option>
            <option value="surat">Surat</option>
          </select>
          </div>
        </div>
      ) : i === '2' ? (
        <div>
          <div>
            <h1>Cricket level</h1>
            <div>
              <input onChange={(e)=>setBoard(e.target.value)} type="radio" name="board" value="state" id="state" />
              <label htmlFor="state">State</label>
            </div>
            <div>
              <input onChange={(e)=>setBoard(e.target.value)} type="radio" name="board" value="cbse" id="cbse" />
              <label htmlFor="cbse">CBSE</label>
            </div>
            <div>
              <input onChange={(e)=>setBoard(e.target.value)} type="radio" name="board" value="international" id="international"/>
              <label htmlFor="international">International</label>
            </div>
          </div>
          <div>
            <h1>Hobbies</h1>
            {["painting", "singing", "dancing", "reading", "playing"].map((hobby) => (
              <div key={hobby}>
                <input
                  type="checkbox"
                  name="hobbies"
                  value={hobby}
                  id={hobby}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setHobbies((prevHobbies) => [...prevHobbies, hobby]);
                    } else {
                      setHobbies((prevHobbies) => prevHobbies.filter((h) => h !== hobby));
                    }
                  }}
                />
                <label htmlFor={hobby}>{hobby.charAt(0).toUpperCase() + hobby.slice(1)}</label>
              </div>
            ))}
          </div>
        </div>
      ) : i === '3' ? (
        <div>
          <h1>Cricket</h1>
          <div>
            <select onChange={(e)=>setLevel(e.target.value)} value={level} name="cricket" id="cricket">
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
              <option value="state">State Level</option>
            </select>
          </div>
          <div>
            <h1>Get Run</h1>
            <div>
              <label htmlFor="run">Total Run</label>
              <input onChange={(e)=>setRun(e.target.value)} value={run} name="run" type="text" />
            </div>
          </div>
        </div>
      ) : i === '4' ? (
        <div>
          <h3>Results</h3>
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Address: {address}</p>
          <p>Gender:{gender}</p>
          <p>City: {city}</p>
          <p>Cricket Board:{board}</p>
          <p>Hobbies:{hobbies}</p>
          <p>Cricket Level: {level}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Form;
