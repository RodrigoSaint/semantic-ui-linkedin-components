import React from "react";
import PositionSection from "./position-section";
import SkillSection from "./skill-section";
import PublicationItem from "./publication-item";
import PublicationSection from "./publication-section";
import SummarySection from "./summary-section";
import EducationSection from "./education-section";

export default props => (
  <div>
    <SummarySection profile={props.profile.profile} />
    <SkillSection skills={props.profile.skills} />
    <PositionSection positions={props.profile.positions} />
    <EducationSection education={props.profile.education} />
    <PublicationSection publications={props.profile.publications} />
  </div>
);
