import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";

const BackArrowButton = (props: { path?: string }) => {
  const navigate = useNavigate();
  return (
    <BiChevronLeft
      onClick={() => {
        if (props.path) {
          navigate(props.path);
        } else {
          navigate(-1);
        }
      }}
      className="icon text-white theme-light:text-black cursor-pointer"
    />
  );
};

export default BackArrowButton;
