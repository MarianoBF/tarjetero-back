module.exports = mongoose => {
    const Usuario = mongoose.model(
      "usuario",
      mongoose.Schema(
        {
          nombre: String,
          apellido: String,
          email: {
            type: String,
            required: true,
            unique: true,
          },
          perfil: {
            type: String,
            required: true,
          },
          password: {
            type: String,
            required: true,
          }
        },
        { timestamps: true }
      )
    );
  
    return Usuario;
  
      }