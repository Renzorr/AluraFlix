function Link(props) {
  const colorVariants = {
    blue: "border-blue text-blue",
    white: "border-white text-white",
  };

  return (
    <a
      href={props.href}
      className={` ${colorVariants[props.color]} border-2 py-3 px-5`}
    >
      {props.name}
    </a>
  );
}

export default Link;
