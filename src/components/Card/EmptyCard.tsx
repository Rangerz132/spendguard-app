const EmptyCard = (props: {
  title: string;
  description: string;
  imagePath: string;
  button: React.ReactNode;
}) => {
  return (
    <div className="card">
      <div className="card-inner-3 ">
        <img src={props.imagePath} alt="title" className="w-[30%] mx-auto" />
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
