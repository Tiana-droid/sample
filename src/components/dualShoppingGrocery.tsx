import "../styles/dualShoppingGrocery.css";

const DualShoppingGrocery = () => {
  return (
    <div className="dualShoppingGroceryContainer">
      <h1 className="dualShoppingGroceryh1">Dual Shopping</h1>
      <h4>
        <span className="black"> City</span>
        <span className="primary">Xplorer </span> deals on two essential
        category of shopping. We provide you with pre-cooked, cooked and raw
        food.
      </h4>
      <h4>What category are you shopping today?</h4>
      <br></br>
      <section>
        <div>
          <h1>
            <span className="active">Shop</span><br></br> From Our Grocery Services
          </h1>
          <p>
           At the right place to explore your pre-cooked and raw food.
          </p>

          <button>Shop For Grocery Now</button>
        </div>
        <div>
          <img src={require("../assets/Group 51.png")} alt="Food" />
        </div>
      </section>
    </div>
  );
};

export default DualShoppingGrocery;
