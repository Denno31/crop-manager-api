const mongoose = require("mongoose");

const treatmentSchema = mongoose.Schema(
  {
    treatmentDate: { type: Date, required: true },
    status: { type: String, required: true },
    treatmentType: { type: String, required: true },
    field: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Field",
      required: true,
    },
    planting: { type: mongoose.Schema.Types.ObjectId, ref: "Planting" },
    productUsed: { type: String },
    productID: {type:mongoose.Schema.Types.ObjectId,ref:"Item"},
    quantityOfProduct: { type: Number },
    units: { type: String },
    shortNotes: { type: String },
   
    phi: { type: String },
    activateIngredient: { type: String },
  },

  {
    timestamps: true,
  }
);

const Treatment = mongoose.model("Treatment", treatmentSchema);
module.exports = { Treatment };
