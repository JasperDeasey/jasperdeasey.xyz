import "./heading.css";
import { GitHub, LinkedIn } from "@material-ui/icons";
import { Link } from "@material-ui/core";
import ScrollAnimation from "react-animate-on-scroll";
import React from "react";

const Heading = () => {
  return (
    <div className={"header"}>
      <ScrollAnimation
        animateIn="animate__fadeIn"
        offset={0}
        delay={4250}
        animateOnce={true}
      >
        <Link href={"https://www.linkedin.com/in/jasperdeasey/"}>
          <LinkedIn fontSize={"large"} />
        </Link>
        <Link href={"https://github.com/JasperDeasey"}>
          <GitHub fontSize={"large"} />
        </Link>
      </ScrollAnimation>
    </div>
  );
};

export default Heading;
