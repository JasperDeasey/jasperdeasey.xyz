import "./projects.css";
import Header from "../../components/header";
import Project from "../../components/project/project";
import { Link } from "@material-ui/core";
import YouTube from "react-youtube";
import whistlerPic from "../../../assets/projects/Whistler-Reservation-Tracker.jpg";
import sql from "../../../assets/logos/oracle.svg";
import GeekSpeak from "../../../assets/projects/GeekSpeak.jpg";

const Projects = (props) => {
  return (
    <div className={"projects"}>
      <Header data={"Projects"} />
      <div className={"project-container"}>
        <div className={"project-display"}>
          <Project
            data={{
              title: "Employee Directory (Associated Engineering)",
              endTitle: (
                <Link href={"https://youtu.be/_WMD44gAqUI"}>
                  Training Manual Video
                </Link>
              ),
              subtitle: "CPSC 319: Software Engineering Project (A+)",
              date: "Spring 2021",
              details: (
                <div>
                  <p>
                    {" "}
                    I worked as a frontend developer to create an employee
                    directory for Associated Engineering, a Vancouver
                    engineering firm. This project was created for CPSC 319:
                    Software Engineering Project, where our team of 7 received
                    an A+. The application was hosted on AWS, had a populated
                    SQL database, an IndexedDB database, along many other
                    features.{" "}
                  </p>
                  <p>
                    {" "}
                    On the Frontend team, I worked in depth with a number of
                    topics, including:
                  </p>
                  <li>Using IndexedDB enhance the speed of searches</li>
                  <li>Displaying org chart data with Google Charts</li>
                  <li>Using React.js and MaterialUI to build pages</li>
                  <li>Interacting with the backend's API</li>
                  <li>HTML and CSS styling</li>
                  <p>
                    Also shown here is the user manual video we sent to
                    Associated Engineering. It is slightly boring, but gives a
                    good description of our team's project.
                  </p>
                </div>
              ),
              media: <YouTube videoId="_WMD44gAqUI" />,
            }}
          />
          <Project
            data={{
              title: "WhistlerAlerts.ca",
              endTitle: (
                <div>
                  <Link href={"http://whistleralerts.ca/"}>website</Link>{" "}
                  <Link
                    href={"https://github.com/JasperDeasey/WhistlerAlerts.ca"}
                  >
                    github
                  </Link>
                </div>
              ),
              subtitle: "Personal Project",
              date: "Winter 2020",
              details: (
                <p>
                  WhistlerAlerts.ca was created this winter so that my friends
                  and I could book days on Whistler mountain. The website was
                  created with Python, with Selenium scraping the site to check
                  availability and Flask to create the website. The site is
                  hosted on Linode's remote linux server.
                </p>
              ),
              media: (
                <img
                  src={whistlerPic}
                  alt={"whistleralerts.ca"}
                  width={"640px"}
                  height={"auto"}
                />
              ),
            }}
          />
          <Project
            data={{
              title: "GitHub Data Visualization Tool",
              endTitle: (
                <Link href={"https://youtu.be/x6mpdMFvoXE"}>Demo Video</Link>
              ),
              subtitle: "CPSC 410: Advanced Software Engineering (A-)",
              date: "Fall 2020",
              details: (
                <div>
                  <p>
                    {" "}
                    This project was a data-visualization tool created for CPSC
                    410. It is a web app created in Javascript which calls the
                    Git api to gather data, processes the data, then uses D3 to
                    display it. It shows data from <u>all</u> public GitHub
                    repositories.{" "}
                  </p>
                  <p>
                    The video below outlines the process and design of the
                    project:
                  </p>
                </div>
              ),
              media: <YouTube videoId="x6mpdMFvoXE" />,
            }}
          />
          <Project
            data={{
              title: "Music Generator Domain-Specific Language",
              endTitle: (
                <Link href={"https://youtu.be/JY5vd4gAYz0"}>Demo Video</Link>
              ),
              subtitle: "CPSC 422: Advanced Software Engineering (A-)",
              date: "Fall 2020",
              details: (
                <div>
                  <p>
                    {" "}
                    This project was a domain-specific language (a coding
                    language our team made-up) created for CPSC 422. It was
                    created in Java, and used many of the topics learned in
                    class, including:{" "}
                  </p>
                  <li>
                    Creating a language specification with tree-structures
                  </li>
                  <li>
                    Tokenizing, parsing, validating, and evaluating inputs to
                    create outputs
                  </li>
                  <li>User studies to ensure quality</li>
                  <p>
                    {" "}
                    Our project was voted best in the class, and a video that
                    displays it is below:{" "}
                  </p>
                </div>
              ),
              media: <YouTube videoId="JY5vd4gAYz0" />,
            }}
          />
          <Project
            data={{
              title: "GeekSpeek",
              endTitle: (
                <Link href={"https://github.com/JasperDeasey/GeekSpeak"}>
                  github
                </Link>
              ),
              subtitle: (
                <Link href={"https://www.bizhacks.ca/"}>BizHacks 2021</Link>
              ),
              date: "Spring 2021",
              details: (
                <div>
                  <p>
                    {" "}
                    This project was made for the 2021 BizHacks Hackathon, with
                    a goal of improving the BestBuy search experience by making
                    it more accessible. It is a webapp created with react.js
                    that uses natural language processing to take voice inputs
                    for searches.
                  </p>
                  <p>It was created in under 24 hours for the hackathon.</p>
                </div>
              ),
              media: (
                <img
                  src={GeekSpeak}
                  alt={"GeekSpeak"}
                  width={"640px"}
                  height={"auto"}
                />
              ),
            }}
          />
          <Project
            data={{
              title: "Capital Markets SQL Database",
              endTitle: (
                <Link
                  href={
                    "https://github.com/JasperDeasey/Capital_Markets_SQL_Database"
                  }
                >
                  github
                </Link>
              ),
              subtitle: "CPSC 304: Introduction to Relational Databases (A)",
              date: "Fall 2020",
              details: (
                <div>
                  <p>
                    {" "}
                    This is an application created for CPSC 304 that models that
                    capital markets in an SQL database. The main purpose of this
                    project was to apply concepts we had learned in class:
                    creating an Oracle SQLPlus database, populating the
                    database, implementing insert/modify/delete functionality,
                    and use complex queries.{" "}
                  </p>
                  <p> The queries used on the project included:</p>
                  <li>Selection and projection query</li>
                  <li>Division query</li>
                  <li>Aggregation query</li>
                  <li>Nested aggregation with group-by</li>
                </div>
              ),
              media: (
                <img src={sql} alt={"sql"} width={"640px"} height={"100px"} />
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
