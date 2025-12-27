export const CONTACT_INFO = {
  email: "ammansajjad42@gmail.com",
  linkedin: "https://www.linkedin.com/in/amman-sajjad-908350245/",
  whatsapp: "+923259055292", // Replace with actual WhatsApp link if needed
  phone: "+92 (325) 9055292",
};

export const SOCIAL_LINKS = {
  email: `mailto:${CONTACT_INFO.email}`,
  linkedin: CONTACT_INFO.linkedin,
  whatsapp: `https://wa.me/${CONTACT_INFO.whatsapp.replace(/\D/g, "")}`, // Format: +923259055292 -> 923259055292
};

