const CallToAction = ({ title, desc }) => {
  return (
    <div className="section-two-content-container text">
      <h1>{title}</h1>
      <p className="text">{desc}</p>
      <div className="btn-container">
        <button className="text section2-content-btn">FOR ENGINEERS</button>
      </div>
    </div>
  );
};

export default CallToAction;
