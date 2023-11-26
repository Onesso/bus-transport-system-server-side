import Enquiry from "../modules/enquiry.js";

export const enquiryy = async (req, res) => {
  const { name, email, phone, enquiry } = req.body;

  try {
    if (!name) {
      return res.json({ error: "Name is required" });
    }
    if (!email) {
      return res.json({ error: "Email address is required" });
    }
    if (!phone) {
      return res.json({ error: "Phone number is required" });
    }
    if (!enquiry) {
      return res.json({ error: "Message is required" });
    }

    const issue = await new Enquiry({
      name,
      email,
      phone,
      enquiry,
    }).save();
    return res.json(issue);
  } catch (error) {
    console.log(error);
  }
};

export const allenquiries = async (req, res) => {
  try {
    const allsms = await Enquiry.find({});
    return res.json(allsms);
  } catch (error) {
    console.log(error);
  }
};
