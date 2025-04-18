import { useNavigate } from "react-router";
import Button from "../UI/Button";

const EmptyCard = () => {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card-inner-3 ">
        <div className="text-center">
          {/** Title */}
          <h3 className="text-white theme-light:text-black">
            You don't have any activities
          </h3>
          {/** Description */}
          <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
            List of activities you've created will appear here.
          </p>
        </div>
        <Button className="cta" onClick={() => navigate("/addActivity")}>
          Add activity
        </Button>
      </div>
    </div>
  );
};

export default EmptyCard;
