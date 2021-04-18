module.exports = mongoose => {
    const Empresa = mongoose.model(
      "empresa",
      mongoose.Schema(
        {
          nombre: {
            type: String,
            required: true,
            unique: true,
          },
          ciudad: String,
          pais: String,
          email: String,
          telefono: String, 
          direccion: String,
        },
        { timestamps: true }
      )
    );
  
    return Empresa;
  
      }