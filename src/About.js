import React, { Component } from "react";

export class About extends Component {
  render() {
    let { title, desc, imgurl, author, url } = this.props;
    return (
      <div className="container my-4">
        <div
          className="card"
          style={{
            maxWidth: "600px", // Reduced width for a smaller, more compact container
            margin: "auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "15px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            borderRadius: "8px",
          }}
        >
          <img
            src={imgurl}
            className="card-img-left"
            alt="sorrrry"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "cover",
              borderRadius: "8px",
              marginRight: "20px",
            }}
          />
          <div className="card-body" style={{ flex: 1 }}>
            <h5
              className="card-title"
              style={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              {title}...
            </h5>
            <h5
              className="card-title"
              style={{ fontWeight: "bold", marginBottom: "10px" }}
            >
              <u>{author.slice(0, 50)}</u>
            </h5>
            <p
              className="card-text"
              style={{ fontSize: "0.9em", marginBottom: "10px" }}
            >
              {desc.slice(0, 100)}...
            </p>
            <a
              href={url}
              target="_blank"
              className="btn btn-dark btn-sm"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
