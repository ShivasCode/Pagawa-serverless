// components/ImageUpload.js
import React, { useState } from "react";

export default function ImageUpload({ elementId, defaultImages = [] }) {
  const [selectedImages, setSelectedImages] = useState(defaultImages);

  const displaySelectedImages = (event) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const newImages = Array.from(fileInput.files).map((file) => ({
        id: Math.random().toString(36).substr(2, 9),
        src: URL.createObjectURL(file),
      }));

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const removeImage = (id) => {
    //filter iterates through the array
    setSelectedImages((prevImages) =>
      //check if iterated image is not equal to the given param id. if true then create new array and add it there
      prevImages.filter((image) => image.id !== id)
    );
  };

  return (
    <div>
      <div className="mb-4 d-flex justify-content-center">
        {selectedImages.map((image) => (
          <div
            key={image.id}
            style={{ position: "relative", marginRight: "5px" }}
          >
            <img src={image.src} alt="selected" style={{ width: "100px" }} />
            <button
              type="button"
              className="btn btn-danger btn-sm"
              style={{ position: "absolute", top: "5px", right: "5px" }}
              onClick={() => removeImage(image.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-primary btn-rounded">
          <label
            className="form-label text-white m-1"
            htmlFor={`customFile-${elementId}`}
          >
            Choose files
          </label>
          <input
            type="file"
            className="form-control d-none"
            id={`customFile-${elementId}`}
            onChange={(event) => displaySelectedImages(event)}
            multiple
          />
        </div>
      </div>
    </div>
  );
}
