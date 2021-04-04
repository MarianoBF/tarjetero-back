module.exports = mongoose => {
    const Ubicacion = mongoose.model(
      "ubicacion",
      mongoose.Schema(
        {
          region: String,
          pais: String,
        },
        { timestamps: true }
      )
    );
  
    return Ubicacion;
  
      }