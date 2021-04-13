module.exports = {
    SECRETO: process.env.SECRET,
    URL: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/DW-Acamica?retryWrites=true&w=majority`
  };
