module.exports = mongoose => {
    const Ubicacion = mongoose.model(
      "ubicacion",
      mongoose.Schema(
        {
          region: String,
          pais: String,
          ciudad: String,
        },
        { timestamps: true }
      )
    );
  
    return Ubicacion;
  
      }