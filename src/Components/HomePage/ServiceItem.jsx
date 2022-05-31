const ServiceItem = ({ servicesImg, title, desc }) => {
  return (
    <div className="service-item">
      <img src={servicesImg} alt={servicesImg} className="service-img" />

      <div className="service-text">
        <h2 className="text">{title}</h2>
        <p className="text">{desc}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
