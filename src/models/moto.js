const db = require("../db.js");

const Schema = db.Schema;

const motoSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  cor: {
    type: Boolean,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  cilimdrada: {
    type: Number,
    required: true,
  },
    peso: {
        type: Number,
        required: true,
    }
});

const moto = db.model("moto", motoSchema);

module.exports = moto;