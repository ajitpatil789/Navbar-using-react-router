import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomNavbar from "../Navbar";

function Photo({ images }) {
  return (
    <>
      <CustomNavbar />
      <Container className="mt-4">
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div className="image-container">
                <img
                  src={image.imageUrl}
                  alt={image.alternateName}
                  className="img-fluid"
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                <p>{`I am ${image.alternateName} image`}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Photo;
