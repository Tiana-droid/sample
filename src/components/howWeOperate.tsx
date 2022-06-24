import "../styles/howWeOperate.css";

const HowWeOperate = () => {
  return (
    <div className="howWeOperateContainer">
      <h1>How We Operate</h1>
      <h4>
        <span className="black"> City</span>
        <span className="primary">Xplorer </span> offers seamless opportunity to
        explore African restaurant and grocery store around you.
      </h4>
          <h4>Wondering how to get started?</h4>
          <br></br>
      <div className="howWeOperateCardsContainer">
        <section>
          <img src={require("../assets/image 15.png")} alt="Place Order" />
          <p>Place your order at your convenience</p>
        </section>
        <section>
          <img src={require("../assets/image 17.png")} alt="Make Payment" />
          <p>Make Payment</p>
        </section>
        <section>
          <img src={require("../assets/image 16.png")} alt="Order Delivery" />
          <p>Get your order delivered to you</p>
        </section>
      </div>
    </div>
  );
};

export default HowWeOperate;
