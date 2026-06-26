const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARE =====
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

// ===== MONGODB CONNECTION =====
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB error:', err));

// ===== CONTACT SCHEMA =====
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isRead: { type: Boolean, default: false }
});

const Contact = mongoose.model('Contact', ContactSchema);

// ===== NODEMAILER SETUP =====
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS  // App password, not regular password
  }
});

// ===== ROUTES =====

// POST /api/contact - Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Save to MongoDB
    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    // Send email notification
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <small>Received at: ${new Date().toLocaleString()}</small>
        `
      });

      // Auto-reply to sender
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thanks for reaching out!',
        html: `
          <h2>Hi ${name},</h2>
          <p>Thanks for getting in touch! I've received your message and will get back to you within 24 hours.</p>
          <p>In the meantime, feel free to check out my GitHub or LinkedIn.</p>
          <br>
          <p>Best,<br>Nithya Reddy</p>
        `
      });
    } catch (emailErr) {
      console.warn('Email sending failed:', emailErr.message);
      // Don't fail the whole request if email fails
    }

    res.status(201).json({ message: 'Message sent successfully!', id: contact._id });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

// GET /api/contact - Get all messages (protected - add auth in production)
app.get('/api/contact', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

// ===== START =====
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
