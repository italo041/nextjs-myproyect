const Titulo = ({titulo, headerTitulo}) => {
  return (
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
       {headerTitulo}
      </h2> 
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        {titulo}
      </h1>
    </div>
  );
};

export default Titulo
