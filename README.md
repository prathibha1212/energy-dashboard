# Smart Home Energy Dashboard

## 📌 Overview
The **Smart Home Energy Dashboard** is a web application that helps users monitor and visualize energy consumption in real-time. It provides:
- A **line chart** for overall energy usage over time.
- A **bar chart** showing energy consumed by each appliance.
- An **energy budget alert** system to notify users when usage exceeds the set limit.

## 🚀 Features
- **Real-time Energy Monitoring**: Track energy consumption dynamically.
- **Energy Budget Alert**: Displays a warning when energy usage exceeds 10 kWh.
- **Appliance-wise Usage**: See which appliances consume the most energy.
- **Interactive UI**: Responsive design with clear visualizations.

---

## 🛠️ Installation & Setup

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- [Git](https://git-scm.com/) (if cloning via GitHub)

### **1️⃣ Clone the Repository**
If using Git, run:
```sh
 git clone https://github.com/prathibha1212/energy-dashboard.git
```
Otherwise, download the ZIP file from GitHub and extract it.

### **2️⃣ Navigate to Project Folder**
```sh
 cd energy-dashboard
```

### **3️⃣ Install Dependencies**
Run the following command to install required packages:
```sh
 npm install
```

### **4️⃣ Start the Application**
To launch the dashboard, run:
```sh
 npm start
```
The app will open in your default web browser at:
```
http://localhost:3000
```

---

## 📂 Project Structure
```
energy-dashboard/
│── public/             # Static files (HTML, icons, etc.)
│── src/                # Main source code
│   ├── components/     # Reusable components (Dashboard.jsx)
│   ├── App.js          # Main application file
│   ├── index.js        # Entry point of the app
│   ├── style.css       # Stylesheet for UI
│── package.json        # Project dependencies & scripts
│── README.md           # Project documentation (this file)
```

---

## 📊 How It Works
- **Set an energy budget (kWh)**: Input a budget in the text field.
- **Monitor real-time usage**: Line and bar charts update based on data.
- **Receive alerts**: If total energy consumption exceeds **10 kWh**, an alert message appears.

---

## 🎨 Customization
To modify the dashboard’s appearance:
- Edit **`src/style.css`** for UI changes.
- Modify **`src/components/Dashboard.jsx`** for chart updates.

---

## 🛠 Troubleshooting
**Problem:** `npm start` doesn't work?  
✅ Solution: Try running:
```sh
 rm -rf node_modules package-lock.json
 npm install
 npm start
```

**Problem:** The page is blank?  
✅ Solution: Check browser console (`F12 > Console tab`) for errors.

---

## 📜 License
This project is open-source under the **MIT License**.

---

## 👨‍💻 Author
**Prathibha**  
🔗 GitHub: [prathibha1212](https://github.com/prathibha1212)  


---




