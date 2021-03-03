import { useState } from "react";

const Navbar = () => {
  const [visible, toggleMenu] = useState(false);

  const goTo = (path) => {
    jQuery([document.documentElement, document.body]).animate(
      {
        scrollTop: $(`#${path}`).offset().top,
      },
      2000
    );
  };

  return (
    <header className="site--header">
      <div className="container-full md:container mx-auto">
        <div className="h-auto md:h-24 flex flex-wrap content-center">
          <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-4">
            <div className="menu text-white justify-self-center md:justify-self-start absolute md:relative p-4 md:p-0 z-50">
              <img
                src="/menu.png"
                className="object-none object-center md:object-left h-auto md:h-24 flex self-end cursor-pointer"
                onClick={(_) => toggleMenu(!visible)}
              />
            </div>
            <div className="justify-self-center">
              <img
                className="object-none h-auto md:h-24 pt-4 md:pt-0"
                src="/logo.png"
                alt=""
              />
            </div>
            <div className="tour text-white justify-self-center pb-4 md:pb-0 md:justify-self-end">
              <img
                src="/tour.png"
                className="object-none object-right h-auto md:h-24 flex self-end"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          visible ? "block" : "hidden"
        } bg-gray-600 w-full bg-opacity-70 text-secondary shadow-2 shadow-sm flex text-center`}
      >
        <ul className="grid w-full grid-cols-2 md:grid-cols-none md:grid-flow-col">
          <li
            className="p-4 w-full heading-none cursor-pointer border-b md:border-l-none border-secondary"
            onClick={(_) => goTo("apartments")}
          >
            Apartamentos
          </li>
          <li
            className="p-4 w-full heading-none cursor-pointer border-l border-b md:border-l-none border-secondary"
            onClick={(_) => goTo("contact")}
          >
            Contacto
          </li>
          <li
            className="p-4 w-full heading-none cursor-pointer border-l border-b md:border-l-none border-secondary"
            onClick={(_) => goTo("amenities")}
          >
            Amenidades
          </li>
          <li
            className="p-4 w-full heading-none cursor-pointer border-l border-b md:border-l-none border-secondary"
            onClick={(_) => goTo("location")}
          >
            Ubicación
          </li>
          <li
            className="p-4 w-full heading-none w-screen md:w-auto cursor-pointer border-l border-b md:border-l-none border-secondary"
            onClick={(_) => goTo("finishes")}
          >
            Acabados
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
