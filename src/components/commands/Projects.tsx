import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Appointment Management System",
    desc: "A mangagement system that handles appointments, useful to anyone.",
    url: "https://appointment-management-sys.vercel.app/",
  },
  {
    id: 2,
    title: "QR Code Generator",
    desc: "A website where when you write a text and click generate, it generates a QR code for you.",
    url: "https://qr-code-generator-gamma-sage.vercel.app/",
  },
  {
    id: 3,
    title: "Language Translator",
    desc: "A platform where you can translate text from one language to another.",
    url: "https://language-translator-six-nu.vercel.app/",
  },
  {
    id: 4,
    title: "Jokes Generator",
    desc: "A platform where you it displays a joke from an API",
    url: "https://jokes-generator-sage.vercel.app/",
  },
  {
    id: 5,
    title: " Open AI",
    desc: "A Chatbot AI that answers all your questions",
    url: "https://open-ai-sigma-nine.vercel.app/",
  },
  {
    id: 6,
    title: "Greencan",
    desc: "------",
    url: "https://greencan-mu.vercel.app/",
  },
  {
    id: 7,
    title: "Capstone Portfolio 1",
    desc: "My Captstone Porject in which I created my own portfolio using a figma design",
    url: "https://capstone-project-mod-1.vercel.app/",
  },
  {
    id: 8,
    title: "Calculator - HTML",
    desc: "A simple calculator using HTML, CSS, and JavaScript.",
    url: "https://calculator-app-rose-pi.vercel.app/",
  },
  {
    id: 9,
    title: "HTML Forms",
    desc: "A project showcasing various types of HTML forms with validations.",
    url: "https://greencan-mu.vercel.app/",
  },
];



export default Projects;
