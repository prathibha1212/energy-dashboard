import React, { useState } from "react";
import { Legend } from "recharts";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
  BarChart, Bar
} from "recharts";

const sampleData = [
  { time: "12 PM", energy: 5 },
  { time: "1 PM", energy: 7 },
  { time: "2 PM", energy: 6 },
  { time: "3 PM", energy: 8 },
  { time: "4 PM", energy: 12 },
];

const applianceData = [
  { appliance: "AC", ac: 3 },
  { appliance: "Fridge", fridge: 2 },
  { appliance: "TV", tv: 1.5 },
  { appliance: "Washing Machine", washingMachine: 4 },
  { appliance: "Lights", lights: 2 },
];

function Dashboard() {
  const [budget, setBudget] = useState(10);
  const totalUsage = sampleData.reduce((sum, entry) => sum + entry.energy, 0);
  const budgetExceeded = totalUsage > budget;

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header style={{ backgroundColor: "#4CAF50", color: "purple", padding: "10px", textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Smart Home Energy Dashboard</h1>
      </header>

      {/* Energy Budget Input */}
      <div className="budget-container">
        <label style={{ color: "#008080", fontSize: "18px" }}>Set Energy Budget (kWh):</label>
        <input 
          type="number" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))} 
        />
      </div>

      {/* Alert Message when Budget Input Exceeds 10 */}
      {budget > 10 && <p className="alert" style={{ color: "red", fontWeight: "bold" }}>⚠️ Energy usage exceeded! Consider reducing consumption.</p>}

      

      {/* Line Chart for Energy Usage */}
      <h2 style={{ color: "#9b42f5" }}>Energy Usage Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#5D4037" strokeWidth={5} dot={{ r: 6 }} />
        </LineChart>
      </ResponsiveContainer>

      {/* Bar Chart for Appliance Usage */}
      <h2 style={{ color: "#B22222" }}>Energy Usage by Appliance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={applianceData} width={600} height={300} barSize={70}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="appliance" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ac" fill="#ff4d4d" name="AC" />
          <Bar dataKey="fridge" fill="#4da6ff" name="Fridge" />
          <Bar dataKey="tv" fill="#ffc14d" name="TV" />
          <Bar dataKey="washingMachine" fill="#66ff66" name="Washing Machine" />
          <Bar dataKey="lights" fill="#a64dff" name="Lights" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;




