const EmptyCard = (props: {
  title: string;
  description: string;
  button: React.ReactNode;
}) => {
  return (
    <div className="card">
      <div className="card-inner-3 ">
        <div className="text-center">
          {/** Title */}
          <h3 className="text-white theme-light:text-black">{props.title}</h3>
          {/** Description */}
          <p className="text-theme-dark-grey theme-light:text-theme-light-dark-grey">
            {props.description}
          </p>
        </div>
        {props.button}
      </div>
    </div>
  );
};

export default EmptyCard;
