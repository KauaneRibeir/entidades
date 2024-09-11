const cep_endereco = require("../middllers/cep_endereco.js")
const db = require("../db.js");

const Schema = db.Schema;

const aeroportoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  cep:{
 cep_endereco_middllers.show(body.cep_endereco_id)
  }
});

const aeroporto = db.model("aeroporto", aeroportoSchema);

module.exports = aeroporto;