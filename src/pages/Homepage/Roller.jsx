// Roller.jsx
import React from "react";
import "../../App.css";

const Roller = () => {
  const topLogos = [
    { name: "Kopfspringer", engagement: "12 month engagement", hasActive: false },
    { name: "Kiwirite", engagement: "12 month engagement", hasActive: true },
    { name: "Maro", engagement: "12 month engagement", hasActive: false },
    { name: "Buyhive", engagement: "12 month engagement", hasActive: false },
    { name: "Mogul", engagement: "12 month engagement", hasActive: true },
    { name: "Eva", engagement: "12 month engagement", hasActive: false },
    // Duplicate logos to create the infinite scroll effect
    { name: "Kopfspringer", engagement: "12 month engagement", hasActive: false },
    { name: "Kiwirite", engagement: "12 month engagement", hasActive: true },
    { name: "Maro", engagement: "12 month engagement", hasActive: false },
    { name: "Buyhive", engagement: "12 month engagement", hasActive: false },
    { name: "Mogul", engagement: "12 month engagement", hasActive: true },
    { name: "Eva", engagement: "12 month engagement", hasActive: false },
  ];

  const bottomLogos = [
    { name: "Devkoller", engagement: "12 month engagement", hasActive: false },
    { name: "Shiny Registry", engagement: "12 month engagement", hasActive: false },
    { name: "SOCPOC", engagement: "12 month engagement", hasActive: false },
    { name: "Hedge", engagement: "12 month engagement", hasActive: false },
    { name: "Loan Shout", engagement: "12 month engagement", hasActive: false },
    { name: "Assuricare", engagement: "12 month engagement", hasActive: false },
    { name: "Devkoller", engagement: "12 month engagement", hasActive: false },
    { name: "Shiny Registry", engagement: "12 month engagement", hasActive: false },
    { name: "SOCPOC", engagement: "12 month engagement", hasActive: false },
    { name: "Hedge", engagement: "12 month engagement", hasActive: false },
    { name: "Loan Shout", engagement: "12 month engagement", hasActive: false },
    { name: "Assuricare", engagement: "12 month engagement", hasActive: false },
  ];

  return (
    <div className="roller-container">
      <div className="roller-track roller-track-left">
        {topLogos.map((client, index) => (
          <div key={index} className="roller-card">
            {client.hasActive && <div className="roller-active-badge">Active</div>}
            <h3 className="roller-client-name">{client.name}</h3>
            <p className="roller-engagement-text">{client.engagement}</p>
          </div>
        ))}
      </div>
      <div className="roller-track roller-track-right">
        {bottomLogos.map((client, index) => (
          <div key={index} className="roller-card">
            {client.hasActive && <div className="roller-active-badge">Active</div>}
            <h3 className="roller-client-name">{client.name}</h3>
            <p className="roller-engagement-text">{client.engagement}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roller;