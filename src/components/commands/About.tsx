import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Vansh Patel</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a :
           <ul>
                <li>Full-Stack Engineering Student.</li>
                <li>Video Editor.</li>
                <li>UI/UX Designer. </li>
                <li> Graphic Desinger.</li> 
                <li>Videographer</li> 
                <li>Photographer</li>
            </ul>
             </HighlightAlt> based in Nakuru,
        Kenya.
      </p>
      <p>
        I love coding and designing, and I'm always looking for new opportunities to learn and grow with my code.
      </p>
    </AboutWrapper>
  );
};

export default About;