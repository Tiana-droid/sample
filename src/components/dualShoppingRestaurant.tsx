import "../styles/dualShoppingRestaurant.css";

const DualShoppingRestaurant = () => {
  return (
    <div className="dualShoppingRestaurantContainer">
      <section>
        <div>
          <h1>
            <span className="active">Shop</span>
            <br></br> From Our Restaurant Services
          </h1>
          <p>At the right place to explore your cooked food.</p>

          <button>Shop For Restaurant Now</button>
        </div>
        <div>
          <img src={require("../assets/Group 40.png")} alt="Food" />
        </div>
      </section>
    </div>
  );
};

export default DualShoppingRestaurant;
