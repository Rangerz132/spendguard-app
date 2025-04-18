import { BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router";

const BackArrowButton = (props: { path: string }) => {
  const navigate = useNavigate();
  return (
    <BiChevronLeft
      onClick={() => {
        navigate(props.path);
      }}
      className="icon text-white theme-light:text-black cursor-pointer"
    />
  );
};

export default BackArrowButton;
