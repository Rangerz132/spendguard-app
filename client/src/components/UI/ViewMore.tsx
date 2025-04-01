import { Link } from "react-router";

const ViewMore = (props: { path: string }) => {
  return (
    <Link to={props.path} className="text-grey  underline text-[10px]">
      View more
    </Link>
  );
};

export default ViewMore;
