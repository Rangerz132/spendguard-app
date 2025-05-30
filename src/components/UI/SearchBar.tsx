import { BiSearch } from "react-icons/bi";

const SearchBar = (props: { onChange: (value: string) => void }) => {
  return (
    <div className="w-full relative">
      {/** Input */}
      <input
        className="text-right p-2 border border-theme-dark-grey rounded-xl w-full"
        placeholder="Search for an activity..."
        onChange={(e) => props.onChange(e.currentTarget.value)}
      ></input>
      {/** Icon */}
      <BiSearch className="absolute text-theme-dark-grey w-6 h-6 left-4 top-[0.7rem]" />
    </div>
  );
};

export default SearchBar;
