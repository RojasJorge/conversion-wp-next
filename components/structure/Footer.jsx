const Footer = (_) => {
  return (
    <div className="flex items-center site--footer bg-black">
      <div className="container mx-auto">
        <div className="grid md:grid-flow-col gap-4">
          <div className="w-auto flex text-center md:text-left">
            <div className="grid w-full md:grid-flow-col gap-4 flex items-center">
              <div className="text-center mt-4 md:mt-0">
                <img
                  src="/grupo-corpotec.png"
                  className="object inline-block object-center md:object-left"
                />
              </div>
              <div className="w-full md:w-72 text-center md:text-left px-4 md:p-0">
                <p className="text-third text-xl heading-none letter-spacing-3 text-uppercase mb-2">
                  Desarrollado por
                </p>
                <p className="font-md text-third">
                  Grupo Corpotec, es un grupo con más de 25 años construyendo
                  edificios sólidos, exitosos y de gran aceptación en la ciudad
                  de Guatemala.
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className="flex items-center">
            <div className="grid w-full md:grid-cols-1 gap-4">
              <div className="text-center md:text-left p-4 md:p-0">
                <img src="/logo-footer.png" className="inline-block" />
              </div>
              <div className="flex">
                <div className="grid grid-cols-2 md:grid-cols-none w-full md:auto-cols-max md:grid-flow-col gap-4">
                  <div className="text-center md:text-left">
                    <img className="inline-block" src="/facebook.png" alt="" />
                  </div>
                  <div className="text-center md:text-left">
                    <img className="inline-block" src="/instagram.png" alt="" />
                  </div>
                  <div className="text-secondary text-center md:text-left p-4 md:p-0 col-span-2 md:col-span-0">
                    <p>Teléfono: 2290-2400</p>
                    <p>Correo: infomonad@corpotec.com.com.gt</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
