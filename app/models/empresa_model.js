module.exports = mongoose => {
    const Empresa = mongoose.model(
      "empresa",
      mongoose.Schema(
        {
          razon_social: String,
          direccion: String,
        },
        { timestamps: true }
      )
    );
  
    return Empresa;
  
      }