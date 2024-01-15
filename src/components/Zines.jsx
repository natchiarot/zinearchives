import ImageSlider from "./ImageSlider";

const Zines = ({ zines }) => {
  const containerStyles = {
    margin: "0 auto",
    padding: "1.5em",
  };

  return (
    <div className="main-box">
      <div className="zine-box">
        {zines.map((zine, index) => (
          <div key={index}>
            <div className="zine-info">
              <h2 id={zine.title}>{zine.title}</h2>
            </div>
            {Array.isArray(zine.images) && (
              <ImageSlider
                images={zine.images}
                containerStyles={containerStyles}
              ></ImageSlider>
            )}
            <div className="zine-info">
              <h3>Made By: {zine.author}</h3>
              <p>Description: {zine.description}</p>
            </div>
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Zines;
