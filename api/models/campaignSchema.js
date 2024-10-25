import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is Required"],
  },
  email: {
    type: String,
  },
  status: {
    type: String,
  },
  source: {
    type: String,
  },
});

const Campaigns = mongoose.model("Campaigns", CampaignSchema);
export default Campaigns;
