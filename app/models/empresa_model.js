module.exports = mongoose => {
    const Empresa = mongoose.model(
      "empresa",
      mongoose.Schema(
        {
          nombre: String,
          ciudad: String,
          email: String,
          telefono: String, 
          direccion: String,
        },
        { timestamps: true }
      )
    );
  
    return Empresa;
  
      }