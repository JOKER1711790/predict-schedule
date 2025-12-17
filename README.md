# PredictMaint AI  
**Autonomous Predictive Maintenance & Proactive Service Scheduling Platform**

PredictMaint AI is a web-based, AI-driven predictive maintenance system designed to reduce vehicle breakdowns, optimize service scheduling, and enable continuous manufacturing quality improvement through an intelligent multi-agent architecture.

---

## 🚀 Project Overview

Vehicle maintenance today is largely reactive, leading to unplanned downtime, higher costs, and poor customer experience. PredictMaint AI transforms this model by proactively predicting failures using vehicle telemetry and AI-driven diagnostics, automating service scheduling, engaging customers through conversational interfaces, and feeding service insights back to manufacturing teams.

The platform is designed as a **hackathon-ready functional prototype**, focusing on explainability, usability, and end-to-end workflow demonstration rather than full-scale backend or ML implementation.

---

## 🎯 Key Features

- **Vehicle Health Dashboard**
  - Real-time fleet overview with KPIs
  - Health trends and risk classification
- **Predictive Failure Alerts**
  - AI-detected issues with probability and ETA
  - Severity-based prioritization
- **Multi-Agent Orchestration**
  - Master Agent coordinating specialized AI agents
- **Automated Service Scheduling**
  - Calendar-based scheduling with smart slot selection
- **Customer Engagement**
  - AI-powered chat, voice, email, and SMS interactions
- **Manufacturing Feedback Loop**
  - RCA/CAPA-driven insights for quality improvement
- **Security & Compliance**
  - UEBA-based anomaly detection and monitoring

---

## 🧠 Agent-Based Architecture

- **Master Agent (Orchestrator)** – Coordinates workflows and decisions  
- **Data Analysis Agent** – Processes telematics and historical data  
- **Diagnosis Agent** – Predicts failures and root causes  
- **Scheduling Agent** – Optimizes service appointments  
- **Customer Engagement Agent** – Communicates with vehicle owners  
- **Feedback Agent** – Captures post-service feedback  
- **Manufacturing Quality Agent** – Generates RCA/CAPA insights  
- **UEBA Security Agent** – Monitors anomalies and compliance  

---

## 🛠️ Tech Stack

This project is built using modern, scalable web technologies:

- **Frontend:** React + TypeScript (Vite)
- **UI:** Tailwind CSS, shadcn/ui
- **Charts:** Recharts
- **Icons:** lucide-react
- **State Management:** React Hooks
- **Backend:** Mocked APIs (simulated AI responses)
- **Deployment:** Lovable platform

> Note: Machine learning outputs are simulated to demonstrate system behavior.

---

## 🖥️ Application Screens

- Dashboard (Fleet health & KPIs)
- Predictive Alerts
- AI Agent Orchestration
- Service Scheduling
- Customer Engagement
- Manufacturing Insights
- Security & Compliance

---

## 📦 Getting Started (Local Development)

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start the development server
npm run dev
