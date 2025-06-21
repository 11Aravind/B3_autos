import { useNavigate } from "react-router-dom";
import "./HsrpButton.css";

const HsrpButton = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="sticky-button"
      onClick={() => navigate("/bookHSRP")}
    >
      Book HSRP
    </div>
  );
};

export default HsrpButton;