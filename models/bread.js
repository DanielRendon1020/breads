const mongoose = require('mongoose');
const { Schema } = mongoose;

const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: "/images/NIA.jpg" },
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
});

const Bread = mongoose.model("Bread", breadSchema);

module.exports = Bread;

