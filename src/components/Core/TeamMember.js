import React from "react";

const TeamMember = ({ photo, name, title, notario }) => {
  return (
    <div className="team-member">
      <img src={photo} alt={name} className="team-photo" />
      <div className="team-info">
        <p className="team-name">{name}</p>
        <p className={notario ? "notario-name" : "team-title"}>{title}</p>
      </div>
    </div>
  );
};

export default TeamMember;
