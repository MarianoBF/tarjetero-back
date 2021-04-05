module.exports = mongoose => {
  const Contacto = mongoose.model(
    "contacto",
    mongoose.Schema(
      {
        nombre: String,
        apellido: String,
        ciudad: String,
        empresa: String,
        cargo: String,
        canalPreferido: String,
        interes: Number,
      },
      { timestamps: true }
    )
  );

  return Contacto;

    }


// const Contacto = function(usuario) {
//     this.nombre_usuario = usuario.nombre_usuario;
//     this.password = usuario.password;
//     this.nombre_completo = usuario.nombre_completo;
//     this.email = usuario.email;
//     this.rol = usuario.rol;
//     this.direccion = usuario.direccion;
//     this.telefono = usuario.telefono
// }

// Contacto.create = (newUsuario, result) => {
//     sql.query("INSERT INTO usuarios SET ?", newUsuario, (err, res) => {
//         if (err) {
//           console.log(err);
//           result(err, null);
//             return;
//         }
//         result(null, {id: res.insertId, ...newUsuario})
//     });
// };


// Contacto.getAll = result => {
//     sql.query("SELECT * FROM usuarios", (err, res) => {
//         if (err) {
//           console.log(err);
//           result(null, err);
//             return
//         }
//         result(null, res)
//         return
//     });
// };

// Usuario.update = (id, updateUsuario, result) => {
//     sql.query(
//       `UPDATE usuarios SET nombre_usuario = '${updateUsuario.nombre_usuario}', password = '${updateUsuario.password}', rol =  '${updateUsuario.rol}', nombre_completo = '${updateUsuario.nombre_completo}'  WHERE id_usuario=${id};`,
//       (err, res) => {
//         if (err) {
//           console.log(err);
//           result(null, err);
//           return;
//         }
//         result(null, {id: id, ...updateUsuario});
//         return;
//       }
//     );
//   };
  
//   Usuario.delete = (id, result) => {
//       sql.query(
//         `DELETE FROM usuarios WHERE id_usuario=${id};`,
//         (err, res) => {
//           if (err) {
//             console.log(err);
//             result(null, err);
//             return;
//           }
//           result(null, `Usuario ${id} borrado`);
//           return;
//         }
//       );
//     };

//     Usuario.get = (usuario, result) => {
//       sql.query("SELECT * FROM usuarios WHERE nombre_usuario='"+usuario.nombre_usuario+"';", (err, res) => {
//         if (err) {
//           console.log(err);
//           result(null, err);
//             return
//         }
//         result(null, res)
//         return
//     });
//     };

//     Usuario.getAllFromOne = (id, result) => {
//       sql.query("SELECT * FROM usuarios WHERE id_usuario='"+id+"';", (err, res) => {
//         if (err) {
//           console.log(err);
//           result(null, err);
//             return
//         }
//         result(null, res)
//         return
//     });
//     };
