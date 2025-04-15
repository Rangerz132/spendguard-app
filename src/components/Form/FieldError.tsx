const FieldError = (props: { message: string; className?: string }) => {
  return (
    <div className={`${props.className} text-cherry text-xs`}>
      {props.message}
    </div>
  );
};

export default FieldError;
