import CreateActivityCard from "../components/CreateActivity/CreateActivityCard";

const AddActivity = () => {
  return (
    <div className="wrapper page-wrapper">
      <section>
        <h2 className="text-white">Create a new activity</h2>
        <CreateActivityCard />
      </section>
    </div>
  );
};

export default AddActivity;
