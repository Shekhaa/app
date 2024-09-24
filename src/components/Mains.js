import React, { Component } from "react";
import About from "../About.js";
import dataFile from "./data.js";
//import Navbar from "./Navbar";

export class Mains extends Component {
  constructor() {
    super();
    this.state = {
      dataFile,
    };
  }

  render() {
    return (
      <div>
        <center>
          <h1>This is a news item</h1>{" "}
          {dataFile.map((element) => {
            return (
              <About
                title={element.title.slice(0, 40)}
                desc={
                  (element.description = !element.description
                    ? "Not available"
                    : element.description)
                }
                author={
                  (element.author =
                    element.author === null ? "Not Available" : element.author)
                }
                imgurl={
                  (element.urlToImage =
                    element.urlToImage === null
                      ? "Not available"
                      : element.urlToImage)
                }
                url={element.url}
              />
            );
          })}
        </center>
      </div>
    );
  }
}

export default Mains;
