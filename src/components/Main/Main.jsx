function Main() {
  return (
    <main className="relative min-h-[80vh]  flex justify-center items-center tablet:hidden">
      <div className="bg-main bg-cover bg-center w-full h-full absolute top-0 left-0 -z-10 opacity-50"></div>
      <div className="container grid grid-cols-[minmax(350px,900px)_minmax(350px,680px)] gap-12  items-center">
        <article>
          <span className=" bg-aquamarine py-4 px-5 mb-7 inline-block">
            Front End
          </span>
          <h2 className="text-[48px] font-black mb-4 text-balance">
            Challenge React
          </h2>
          <p className="text-[18px] text- leading-[30px]">
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </p>
        </article>
        <img
          src="/img/img-card.png"
          alt="main card image"
          className=" w-full h-full object-cover min-h-[350px]"
        />
      </div>
    </main>
  );
}

export default Main;
