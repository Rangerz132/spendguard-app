import Navigation from "../Navigation/Navigation";

const Menu = () => {
  return (
    <div className="w-full fixed bottom-0 flex flex-col -space-y-1">
      {/** Gradient */}
      <div className="w-full h-10 bg-gradient-to-t from-black  to-transparent"></div>
      {/** Navigation */}
      <div className="bg-black w-full py-3">
        <div className="w-full wrapper">
          <div className="flex flex-row items-center justify-around">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
