const Contact = ({ data }) => {
  const onSubmit = (fields) => {
    console.log("fields:", fields);
  };

  return (
    <div id="contact" className="container mx-auto">
      <div className="flex items-center justify-center p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={data?.data?.config?.contact_image}
              className="object-none"
            />
          </div>
          <div>
            <div className="text-center">
              <h3 className="text-5xl">Contacto</h3>
            </div>
            <form onSubmit={onSubmit}>
              <div>
                <input
                  name="name"
                  className="bg-transparent border-b border-black placeholder-black py-4 my-4 w-full outline-none"
                  type="text"
                  placeholder="Nombre:"
                  required
                />
              </div>
              <div>
                <input
                  name="email"
                  className="bg-transparent border-b border-black placeholder-black py-4 my-4 w-full outline-none"
                  type="email"
                  placeholder="CORREO:"
                  required
                />
              </div>
              <div>
                <input
                  name="text"
                  className="bg-transparent border-b border-black placeholder-black py-4 my-4 w-full outline-none"
                  type="phone"
                  placeholder="TELÉFONO:"
                  required
                />
              </div>
              <div>
                <select
                  name="model"
                  className="bg-transparent border-b border-black placeholder-black py-4 my-4 w-full outline-none"
                >
                  <option value="">MODELO DE INTERÉS</option>
                </select>
              </div>
              <div className="text-center">
                <button type="submit" className="py-2 px-6 bg-black text-white outline-none">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
