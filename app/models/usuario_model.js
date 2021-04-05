module.exports = mongoose => {
    const Usuario = mongoose.model(
      "usuario",
      mongoose.Schema(
        {
          nombre: String,
          apellido: String,
          email: String,
          perfil: String,
          password: String,
        },
        { timestamps: true }
      )
    );
  
    return Usuario;
  
      }