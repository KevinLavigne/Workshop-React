import { Avatar } from "./Avatar";
import "../styles/customers.css";
const Customers = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="customers-container">
        {props.items.map((items, index) => (
          <Avatar key={index} customer={items} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
