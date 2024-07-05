function Banner({ category }) {
  const colorVariants = {
    "Front End": "bg-aquamarine",
    "Back End": "bg-green",
    "Innovación y Gestión": "bg-ambar",
  };

  return (
    <span className={` ${colorVariants[category]} py-4 px-5 mb-7 inline-block`}>
      {category}
    </span>
  );
}

export default Banner;
