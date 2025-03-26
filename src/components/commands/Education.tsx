import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Year 1 to Year 12",
    desc: "Melvin Jones Lions Academy | 2012 - 2024",
  },
  {
    title: "Diploma in Computer Science",
    desc: "Kabarak University | 2024 - Present",
  },
  {
    title: "Graphic Designing Internship",
    desc: "Rift Koders & Rift Insurance | March 2025 - Present",
  },
];

export default Education;
