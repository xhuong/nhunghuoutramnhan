import "./index.scss";

function Select({ children }) {
  return (
    <div className="custom-select">
      <select>{children}</select>
    </div>
  );
}

export default Select;
