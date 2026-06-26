import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <span className="loader-bracket">[</span>
          <span className="loader-name">AM</span>
          <span className="loader-bracket">]</span>
        </div>
        <div className="loader-bar">
          <div className="loader-fill"></div>
        </div>
        <span className="loader-text">Initializing...</span>
      </div>
    </div>
  );
}

export default Loader;
