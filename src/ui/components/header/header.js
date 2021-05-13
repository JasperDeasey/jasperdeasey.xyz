import "./header.css";

const Header = (props) => {
  return (
    <div className={"heading-container"}>
      <h2>
        <span>{props.data}</span>
      </h2>
      <div className={"header"}></div>
    </div>
  );
};

export default Header;
