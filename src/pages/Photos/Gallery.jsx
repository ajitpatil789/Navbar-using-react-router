import React from "react";
import { getImageUrl } from "./Utility";
import CustomNavbar from "../Navbar";
function Gallery({ nameImage, Description }) {
  return (
    <div>
      <CustomNavbar />
      <img
        src={getImageUrl(nameImage)}
        alt={nameImage.alternateName}
        width={nameImage.size}
      />
      <p>{Description}</p>
    </div>
  );
}

const ImagePathFromHere = () => {
  return (
    <>
      <Gallery
        nameImage={{ imageId: "f1", alternateName: "f1" }}
        Description="I am F1 image"
      />
    </>
  );
};

export default ImagePathFromHere;
