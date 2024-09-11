const db = require("../db.js");

const Schema = db.Schema;

const refrigeranteSchema = new Schema({
  porcentagem: {
    type: Number,
    required: true,
  },
  kcal: {
    type: Number,
    required: true,
  },
  sabor: {
    type: String,
    required: true,
  },
  tamanhoml: {
    type: Number,
    required: true,
  },
});

const refrigerante = db.model("refrigerante", refrigeranteSchema);

module.exports = refrigerante;