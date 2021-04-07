module.exports = mongoose => {
    const Ubicacion = mongoose.model(
      "ubicacion",
      mongoose.Schema(
        {
          region: String,
          pais: String,
          ciudad: {
            type: String,
            unique: true,
          },
        },
        { timestamps: true }
      )
    );
  
    return Ubicacion;
  
      }