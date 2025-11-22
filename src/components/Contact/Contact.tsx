 import { motion } from "framer-motion";
import TextField from "@mui/material/TextField";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-background full-screen-contact" id="contact">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="contact-title">Contact Me</h2>

        <p className="contact-subtitle">
          Have a question or want to start a project?  
          Send me a message and I’ll get back to you shortly.
        </p>

        <form
          action="https://formsubmit.co/YOUR_EMAIL_HERE"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_subject" value="New message from your portfolio" />

          {/* Name */}
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                color: "white",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.22)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#72b6ff" },
            }}
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                color: "white",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.22)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#72b6ff" },
            }}
          />

          {/* Message */}
          <TextField
            label="Message"
            name="message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            sx={{
              mb: 2,
              "& .MuiInputBase-root": {
                color: "white",
                background: "rgba(255,255,255,0.06)",
                borderRadius: "10px",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(255,255,255,0.22)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#72b6ff",
              },
              "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
              "& .MuiInputLabel-root.Mui-focused": { color: "#72b6ff" },
            }}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 180 }}
            className="contact-send"
          >
            Send Message 🚀
          </motion.button>
        </form>

        <div className="contact-socials">
          <a href="https://github.com/CondalAgustin" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/nicolas-condal/" target="_blank">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  );
}
