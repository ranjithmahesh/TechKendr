import Email from "../models/email.js";

export const savePost = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await Email.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists" });
    }

    await new Email({ email }).save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
