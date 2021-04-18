module.exports = mongoose => {
  const Ubicacion = mongoose.model(
    "ubicacion",
    mongoose.Schema(
      {
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
          unique: true,
          required: true,
        },
      },
      {timestamps: true}
    )
  );

  return Ubicacion;
};
