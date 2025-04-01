import CardInner from "./CardInner";
import { CardType } from "./type/cardType";

const Card = (props: { className?: string; data: CardType }) => {
  return (
    <div className={`${props.className} card`}>
      <CardInner
        title={props.data.title}
        value={props.data.value}
        percValue={props.data.compared.value}
        isIncreasing={props.data.compared.isIncreasing}
      />
    </div>
  );
};

export default Card;
