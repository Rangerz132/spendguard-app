import DetailOptionSlot from "./DetailOptionSlot";
import { activityOptions } from "./type/activityOptionType";

const DetailOptionCard = (props: { children?: React.ReactNode }) => {
  return (
    <div className="detail w-full fixed bottom-0 z-50 flex flex-col space-y-6 translate-y-[100%] transiton-300">
      {activityOptions.map((option, index) => (
        <>
          <DetailOptionSlot key={index} activityOption={option} />
        </>
      ))}
    </div>
  );
};

export default DetailOptionCard;
