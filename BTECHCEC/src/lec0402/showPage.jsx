import React, { useState } from "react";

const ShowPage = ({ i }) => {
  const [principle, setPrinciple] = useState(0);
  const [rate, setRate] = useState(0);
  const [duration, setDuration] = useState(0);

  // Calculate Interest and Amount when all values are entered
  const interest = (principle * rate * duration) / 100;
  const amount = principle + interest;

  return (
    <div>
      {i === 1 ? (
        <>
          <label htmlFor="principle">Principle</label>
          <input
            onChange={(e) => setPrinciple(Number(e.target.value) || 0)}
            name="principle"
            type="number"
            value={principle}
          />
        </>
      ) : i === 2 ? (
        <>
          <label htmlFor="interest">Interest Rate</label>
          <input
            onChange={(e) => setRate(Number(e.target.value) || 0)}
            name="interest"
            type="number"
            value={rate}
          />
        </>
      ) : i === 3 ? (
        <>
          <label htmlFor="duration">Duration</label>
          <input
            onChange={(e) => setDuration(Number(e.target.value) || 0)}
            name="duration"
            type="number"
            value={duration}
          />
        </>
      ) : i === 4 ? (
        principle > 0 && rate > 0 && duration > 0 ? (
          <div>
            <h3>Results</h3>
            <p>Principal Amount:{principle}</p>
            <p>Interest:{interest}</p>
            <p>Total Amount: {amount}</p>
          </div>
        ) : (
          <div>Please enter valid values for all fields.</div>
        )
      ) : null}
    </div>
  );
};

export default ShowPage;
