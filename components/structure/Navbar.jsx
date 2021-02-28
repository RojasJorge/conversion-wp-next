const Navbar = () => {
  return (
    <header className="site--header">
      <div className="container mx-auto">
        <div className="h-auto md:h-24 flex flex-wrap content-center">
          <div className="grid md:grid-cols-3 grid-cols-1 w-full">
            <div className="menu text-white justify-self-center md:justify-self-start">
              <img
                src="/menu.png"
                className="object-none object-center md:object-left h-auto md:h-24 flex self-end"
                alt=""
              />
            </div>
            <div className="justify-self-center">
              <img
                className="object-none h-auto md:h-24"
                src="/logo.png"
                alt=""
              />
            </div>
            <div className="tour text-white justify-self-center md:justify-self-end">
              <img
                src="/tour.png"
                className="object-none object-right h-auto md:h-24 flex self-end"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
