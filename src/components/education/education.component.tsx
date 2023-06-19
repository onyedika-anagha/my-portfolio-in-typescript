import { Education } from "../../store/data/data.types";

const getMonth = (date: Date) => {
  return date.toLocaleString("default", { month: "short" });
};

const EducationItem = ({ institution }: { institution: Education }) => {
  const { school, start_time, end_time, program } = institution;
  const startTime = new Date(start_time);
  const endTime = new Date(end_time);

  const startYear = startTime.getFullYear();
  const endYear = endTime.getFullYear();
  const started =
    startYear === endYear ? `${getMonth(startTime)} ${startYear}` : startYear;
  const ended =
    startYear === endYear ? `${getMonth(endTime)} ${endYear}` : endYear;

  return (
    <div className="edu-experi-item animate__animated delay5 animate__fadeInUp">
      <span className="years">
        {started}-{ended}
      </span>
      <div className="vacancy-content">
        {/* <span className="title">BSC</span> */}
        <h4 className="subject">{program}</h4>
        <h6 className="institution">{school}</h6>
        {/* <p>
          Major in UI Design, UX Design, Interaction Design, User Empathy,
          Branding.
        </p> */}
      </div>
    </div>
  );
};

export default EducationItem;
