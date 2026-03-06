# Event Logistics & Automation System (Google Apps Script & HTML)

# Dynamic Wedding Invitation System

A full-stack web application designed to manage wedding invitations with personalized URLs, real-time RSVP tracking, and data persistence.

## 🚀 Features
- **Dynamic Personalization:** Uses URL parameters to display guest names and specific seat quotas.
- **Real-Time Sync:** Integrated with Google Apps Script to log responses directly into Google Sheets.
- **Client-Side Persistence:** Implemented `LocalStorage` to prevent duplicate submissions and maintain UI state upon page refresh.
- **Smart Messaging:** Conditional logic to handle singular/plural grammar based on guest count.
- **UX Focused:** Includes "Copy to Clipboard" functionality for gift registry data.

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **Backend:** Google Apps Script (GAS)
- **Database:** Google Sheets API

## 📋 How it works
1. The script parses the `name` and `cant` parameters from the URL.
2. The user selects the number of attendees and confirms.
3. JavaScript triggers a background process to the GAS backend.
4. The response is saved locally to the browser to lock the RSVP form and show a "Thank You" message.
