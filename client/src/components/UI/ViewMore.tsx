import { Link } from "react-router";

const ViewMore = (props: { path: string }) => {
  return (
    <Link
      to={props.path}
      className="text-theme-dark-grey  underline text-[10px] theme-light:text-theme-light-grey"
    >
      View more
    </Link>
  );
};

export default ViewMore;
