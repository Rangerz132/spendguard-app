import { BiErrorCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BiCheckCircle } from "react-icons/bi";
import { useEffect } from "react";
import { hideStatus } from "../../store/status/statusSlice";

const StatusCard = () => {
  const status = useSelector((store: RootState) => store.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(hideStatus());
      clearInterval(interval);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch, status.isShowed]);

  return (
    <div
      className={`bottom-20 z-50 fixed wrapper w-full transition-opacity duration-500 ${
        status.isShowed ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={` rounded-2xl p-4 ${
          status.isValid ? "bg-lime" : "bg-cherry"
        }`}
      >
        <div className={`flex flex-row items-center space-x-2 `}>
          {/** Icon */}
          {status.isValid ? (
            <BiCheckCircle className="w-6 h-6" />
          ) : (
            <BiErrorCircle className="w-6 h-6" />
          )}
          {/** Message */}
          <p>{status.message}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
