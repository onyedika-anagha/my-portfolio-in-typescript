import { Experience } from "../../store/data/data.types";

const getMonth = (date: Date) => {
  return date.toLocaleString("default", { month: "short" });
};

const ExperienceItem = ({ item }: { item: Experience }) => {
  const { end_time, start_time, company, position, type, note } = item;
  const startTime = new Date(start_time);
  const endTime: Date | null = end_time == null ? null : new Date(end_time);

  const startYear = startTime.getFullYear();
  const endYear = endTime == null ? null : endTime.getFullYear();
  const started =
    startYear === endYear ? `${getMonth(startTime)} ${startYear}` : startYear;
  const ended =
    endTime == null
      ? "Present"
      : startYear === endYear
      ? `${getMonth(endTime)} ${endYear}`
      : endYear;

  return (
    <div className="edu-experi-item beahance animate__animated delay7 animate__fadeInUp">
      <span className="years">
        {started}-{ended}
      </span>
      <div className="vacancy-content">
        <span className="title">{company}</span>
        <h4 className="subject">
          {position} .<small>{type}</small>{" "}
        </h4>
        <p>{note}</p>
      </div>
    </div>
  );
};

export default ExperienceItem;
