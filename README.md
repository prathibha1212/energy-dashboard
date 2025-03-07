# Smart Home Energy Dashboard

## 📌 Overview
The **Smart Home Energy Dashboard** is a web application designed to help users monitor and visualize their household energy consumption efficiently. The project aims to provide an intuitive interface with:
- A **line chart** that displays overall energy usage trends over time.
- A **bar chart** illustrating energy consumed by each appliance.
- An **energy budget alert** system that warns users when their usage exceeds a predefined limit.

### **Why These Choices?**
- **Real-time Monitoring:** Users need instant feedback on their energy consumption to take timely action.
- **Budget Alerts:** Encouraging energy efficiency by notifying users when they exceed their set energy limit.
- **Appliance-wise Breakdown:** Understanding which appliances consume the most energy helps in optimizing usage.
- **Simple and Interactive UI:** Ensuring an easy-to-use and visually engaging experience.

---

## 🚀 Features
- **Real-time Energy Monitoring**: Dynamic tracking of energy consumption.
- **Energy Budget Alert**: Displays a warning when energy usage exceeds 10 kWh.
- **Appliance-wise Usage Analysis**: Provides insights into energy consumption per appliance.
- **Interactive Charts**: Visualizations using **Recharts** for better data representation.

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






