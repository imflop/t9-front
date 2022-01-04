import React from "react";
import { getOperatingSystem, OperatingSystem } from "../utils/platform";

function IndexPage(): React.ReactElement {
  const iconForOS =
    getOperatingSystem(window) === OperatingSystem.Mac ? "⌘" : "ctrl";
  return (
    <>
      <div className="row mb-3">
        <div className="col-12">
          <form className="row">
            <div className="col-10">
              <div className="form-floating">
                <input
                  type="text"
                  id="floatingInput"
                  className="form-control form-control-lg"
                  placeholder="⌘ + v"
                  aria-label="⌘ + v"
                />
                <label htmlFor="floatingInput">{iconForOS} + v</label>
              </div>
            </div>
            <div className="col-2">
              <button className="btn btn-dark btn-lg h-100">Shorten</button>
            </div>
          </form>
          <div className="row">
            <div id="emailHelp" className="form-text">
              Simply copy the link you want to shorten from the clipboard or
              type it into the input.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
