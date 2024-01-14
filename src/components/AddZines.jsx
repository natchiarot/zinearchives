import { useState } from "react";

const AddZines = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();

    const promises = Array.from(images).map((image) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            data: e.target.result,
          });
        };
        reader.readAsDataURL(image);
      });
    });

    Promise.all(promises)
      .then((imageData) => {
        onAdd({ title, author, description, images: imageData });
      })
      .catch((error) => {
        console.error("Error reading images:", error);
      });

    setTitle("");
    setAuthor("");
    setDescription("");
    setImages([]);
  };

  const handleImageChange = (e) => {
    const selectedImages = e.target.files;
    setImages(selectedImages);
  };

  return (
    <form className="add-zine" onSubmit={onSubmit}>
      <label htmlFor="title">Title:</label>
      <br />
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Title of this zine"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      ></input>
      <br />
      <label htmlFor="author">Author:</label>
      <br />
      <input
        type="text"
        id="author"
        name="author"
        placeholder="Author of this zine"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      ></input>
      <br />
      <label htmlFor="description">Description:</label>
      <br />
      <textarea
        id="description"
        name="description"
        placeholder="Add a description for your zine here"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br />
      <input
        type="file"
        id="images"
        name="images"
        accept="image/*"
        onChange={handleImageChange}
        required
        multiple
      />
      <br />
      <input type="submit" value="Upload Zine" />
    </form>
  );
};

export default AddZines;
