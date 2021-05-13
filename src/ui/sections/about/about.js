import "./about.css";
import Header from "../../components/header";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Paper,
} from "@material-ui/core";
import ProfilePicture from "../../components/profile-picture";

const About = () => {
  return (
    <div className={"about"} id={"about"}>
      <Header data={"About"} />
      <div className={"write-up-container"}>
        <div className={"write-up"}>
          <h4>Hi, I'm Jasper. Welcome to my website.</h4>
          <p className={"about-paragraph"}>
            I created this site to display my projects, as many of them are not
            available on GitHub due to class/company rules. All the projects
            I've worked on are displayed below, with short write-ups that
            describe them and videos (or other media) where available.
          </p>
          <p className={"about-paragraph"}>
            Many of the projects are focussed on data analysis & visualization,
            and include finance topics. This is because I am pursuing a dual
            degree in Business (Finance) and Computer Science, and am
            particularly interested in data analysis and how compsci can enhance
            this field.
          </p>
          <p className={"about-paragraph"}>
            If you want to connect, I can be reached via email at{" "}
            <Link href={"mailto:jasperdeasey@gmail.com"}>
              jasperdeasey@gmail.com
            </Link>{" "}
            or through my{" "}
            <Link href={"https://www.linkedin.com/in/jasperdeasey/"}>
              LinkedIn
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
