import styled from "styled-components";
import "./project.css";
import img1 from "../../Data/ndtv.png";
import img2 from "../../Data/weather-app.png";
import html from "../../Data/html.svg";
import js from "../../Data/javascript.svg";
import css from "../../Data/css.svg";

const Project = () => {
  const demo1 = () => {
    window.open("https://elaborate-chaja-41c243.netlify.app/");
  };
  const demo2 = () => {
    window.open("https://starlit-chebakia-85f8f2.netlify.app/");
  };
  return (
    <ProjectDiv id="project">
      <Heading>My Projects</Heading>
      <Container>
        <Cards>
          <div class="card">
            <div class="card2">
              <img className="card-image" src={img1} alt="" />
              <p className="para">
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className="ts-img">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className="uiverse" onClick={demo1}>
                  Demo
                </button>
                <button className="uiverse">Github</button>
              </div>
            </div>
          </div>
        </Cards>
        <Cards>
          <div class="card">
            <div class="card2">
              <img className="card-image" src={img2} alt="" />
              <p className="para">
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className="ts-img">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className="uiverse" onClick={demo2}>
                  Demo
                </button>
                <button className="uiverse">Github</button>
              </div>
            </div>
          </div>
        </Cards>
        <Cards>
          <div class="card">
            <div class="card2">
              <img className="card-image" src={img1} alt="" />
              <p className="para">
                NDTV.com provides latest news from India and around the world.
                Get breaking news alerts from India and follow today's live news
                updates in field of politics.
              </p>
              <div className="ts-img">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
              </div>
              <div>
                <button className="uiverse">Demo</button>
                <button className="uiverse">Github</button>
              </div>
            </div>
          </div>
        </Cards>
      </Container>
    </ProjectDiv>
  );
};

export default Project;

const ProjectDiv = styled.div`
  height: 600px;
  /* border: 1px solid red; */
`;

const Heading = styled.h1`
  color: #545fc4;
  font-size: 40px;
  font-family: "Roboto Slab", serif;
  text-decoration: underline;
  text-align: center;
`;

const Container = styled.div`
  width: 80%;
  margin: auto;
  /* border: 1px solid blue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Cards = styled.div`
  /* border: 1px solid orange; */
  height: 350px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
