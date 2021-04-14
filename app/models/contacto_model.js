module.exports = mongoose => {
  const Contacto = mongoose.model(
    "contacto",
    mongoose.Schema(
      {
        nombre: String,
        apellido: String,
        empresa: String,
        cargo: String,
        email: String,
        region: String,
        pais: String,
        ciudad: String,
        direccion: String,
        interes: Number,
        canalPreferido: String,
        canales: [{
          canal: String,
          cuenta: String,
          preferencia: String}]
      },
      { timestamps: true }
    )
  );

  return Contacto;

    }
