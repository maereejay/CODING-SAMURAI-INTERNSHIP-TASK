import React from "react";
import "./projectView.css";
export default function ProjectView() {
  return (
    <div className="projectView">
      <div className="projectviewContent">
        <div className="projectviewImage"></div>
        <div className="projectviewDescription">
          <h1>Project Name</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            quoditaque. Quae, quoditaque. Quae, quoditaque. Quae, quoditaque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            neque quidem optio! Quidem omnis eius, enim culpa explicabo
            molestias molestiae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam dolor eaque voluptas a, sapiente quaerat
            fuga reprehenderit deleniti illo expedita voluptate quas quos, odit
            ut ipsum tenetur amet voluptatum est? Ex dolores explicabo quasi eos
            unde corporis facilis ad ducimus vitae voluptatibus. Enim debitis
            deserunt reiciendis odit nesciunt necessitatibus natus.
          </p>
          <div className="buttons">
            <button>View Code</button>
            <button>View Live</button>
          </div>
          <div className="close">
            {" "}
            <button>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
