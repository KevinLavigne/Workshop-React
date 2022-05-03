export const Avatar = (props) => {
  console.log(props.customer);
  return (
    <div className="customer-container">
      <img
        src={props.customer.avatar.src}
        alt={props.customer.avatar.alt}
      ></img>
      <h2>{props.customer.comment}</h2>
    </div>
  );
};
