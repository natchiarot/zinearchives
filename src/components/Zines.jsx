import ImageSlider from "./ImageSlider";

const Zines = ({ zines }) => {
  const containerStyles = {
    // width: "360px",
    // height: "470px",
    margin: "0 auto",
    padding: "1.5em",
  };

  return (
    <div className="main-box">
      <div className="zine-box">
        {zines.map((zine, index) => (
          <div key={index}>
            <h2 id={zine.title}>{zine.title}</h2>
            {Array.isArray(zine.images) && (
              <ImageSlider
                images={zine.images}
                containerStyles={containerStyles}
              ></ImageSlider>
            )}
            <h3>Made By: {zine.author}</h3>
            <p>Description: {zine.description}</p>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zines;
