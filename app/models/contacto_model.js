module.exports = mongoose => {
  const Contacto = mongoose.model(
    "contacto",
    mongoose.Schema(
      {
        nombre: {
          type: String,
          required: true,
        },
        apellido: {
          type: String,
          required: true,
        },
        empresa: {
          type: String,
          required: true,
        },
        cargo: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        region: {
          type: String,
          required: true,
        },
        pais: {
          type: String,
          required: true,
        },
        ciudad: {
          type: String,
          required: true,
        },
        direccion: {
          type: String,
          required: true,
        },
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
