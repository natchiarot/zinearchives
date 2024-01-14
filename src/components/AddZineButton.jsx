import Button from "./Button";

const ZineButton = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "rgb(60, 60, 60)" : "rgb(57, 57, 57)"}
        text={showAdd ? "Close" : "Upload a Zine"}
        onClick={onAdd}
      />
    </div>
  );
};

export default ZineButton;
