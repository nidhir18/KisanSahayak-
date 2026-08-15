# 🌾 KisanSahayak — Smart Agriculture Platform

> **AgriSense / KisanSahayak** is a farmer-focused smart agriculture platform designed to bring practical agricultural assistance, crop and disease guidance, intelligent recommendations, government schemes, verified support organisations, and useful farming resources into one simple interface.

---

## 📌 Overview

Farmers often have to search across multiple websites, offices, helplines, and local resources to find information about crops, diseases, schemes, financial assistance, and agricultural support.

**KisanSahayak** aims to simplify that experience by providing a centralized, farmer-friendly digital platform.

The project combines:

- 🌱 Smart crop and agriculture assistance
- 🩺 Crop/disease guidance
- 🤖 Intelligent agricultural recommendations
- 🏛️ Government schemes and DBT information
- 🤝 Verified NGO/support-organisation directory
- 🌦️ Climate- and resource-oriented agricultural information
- 🌍 Multilingual farmer-facing content
- 📱 A simple, accessible interface designed with farmers in mind

---

## 🎯 Project Goals

1. Make useful agricultural information easier to discover.
2. Help farmers understand crop and farming problems.
3. Connect farmers with relevant support organisations.
4. Present government agricultural schemes in an easy-to-understand format.
5. Support multiple Indian languages.
6. Build a practical foundation that can be expanded into a larger smart-agriculture platform.

---

## ✨ Key Features

### 🌱 Smart Agriculture Assistance

The platform is designed to help farmers access agriculture-related guidance and recommendations from a single place.

Potential use cases include:

- Crop-related guidance
- Farming recommendations
- Crop and disease assistance
- Agricultural resource discovery
- Practical information for improving farm decisions

---

### 🩺 Crop & Disease Assistance

KisanSahayak includes an agriculture-assistance workflow intended to help users understand crop and disease-related problems and find relevant guidance.

The interface is designed to keep the experience understandable for users who may not be highly familiar with technical terminology.

---

### 🧠 Intelligent Recommendations

The platform brings agriculture information together so that recommendations can be presented in a more useful, farmer-oriented way rather than requiring users to search through disconnected resources.

---

## 🏛️ Government DBT Schemes

The current project data includes government agricultural schemes such as:

### PM-KISAN

**Pradhan Mantri Kisan Samman Nidhi**

- Benefit represented in the project: **₹6,000/year**
- Paid through **3 direct bank transfers of ₹2,000 each**
- Eligibility information is included in the application
- Official portal: https://pmkisan.gov.in

### PMFBY

**Pradhan Mantri Fasal Bima Yojana**

- Crop insurance information is included in the application.
- The project data describes coverage against specified natural risks and pests.
- The stored premium information includes **2% for Kharif** and **1.5% for Rabi**.
- Eligibility information is included for notified crops/areas, including sharecroppers.
- Official portal: https://pmfby.gov.in

> **Important:** Government scheme rules, eligibility, application windows, premium rates, and benefits can change. Users should verify current requirements on the relevant official government portal before applying.

---

## 🤝 Verified NGO Directory

KisanSahayak currently contains a **Verified NGOs Directory** with farmer-support information.

### Watershed Organisation Trust (WOTR)

**Focus:** Water & Climate Resilience

The project data describes WOTR as working on:

- Watershed development and rainwater harvesting
- Climate-resilient crop planning
- Soil health assessment and compost supply

The stored directory data includes coverage across:

- Maharashtra
- Madhya Pradesh
- Rajasthan
- Telangana
- Jharkhand

The project also stores organisation contact details, portal information, WhatsApp contact information, leadership/field-officer information, services, and an active-grant field.

Website stored in project data: https://wotr.org

---

### BAIF Development Research Foundation

**Focus:** Sustainable Agriculture & Livestock

The project data describes BAIF-related support around:

- Wadi agro-forestry and orchard development
- Livestock breed improvement
- Cattle vaccination
- Organic seed banking
- Indigenous variety preservation

The stored directory data includes coverage across states including:

- Maharashtra
- Gujarat
- Karnataka
- Uttar Pradesh
- Bihar
- Odisha

The project also stores organisation contact details, portal information, WhatsApp contact information, leadership/field-officer information, services, and an active-grant field.

Website stored in project data: https://baif.org.in

> **Directory note:** The application data marks these organisations as `verified: true`. Contact numbers, grants, programmes, ratings, and availability should still be confirmed with the organisation before relying on them.

---

## 🌍 Multilingual Support

A major part of KisanSahayak is accessibility for Indian-language users.

The current project data contains translations for:

- 🇬🇧 English (`en`)
- 🇮🇳 Hindi (`hi`)
- ਪੰਜਾਬੀ Punjabi (`pa`)
- मराठी Marathi (`mr`)
- ગુજરાતી Gujarati (`gu`)
- বাংলা Bengali (`bn`)
- తెలుగు Telugu (`te`)
- தமிழ் Tamil (`ta`)

The NGO directory and government-scheme data include localized translations for these languages.

This makes the platform more suitable for farmers who prefer to access agricultural information in their regional language.

---

## 🗂️ Project Structure

The project has been organized around a browser-based application structure including files such as:

```text
KisanSahayak/
├── index.html
├── app.js
├── data.js
├── styles.css
├── translations.js
├── settings.py
├── test_load_tracker.py
└── screenshots/
```

### Main files

| File | Purpose |
|---|---|
| `index.html` | Main application page |
| `app.js` | Application/interface logic |
| `data.js` | Agriculture, NGO, scheme and other application data |
| `styles.css` | Application styling |
| `translations.js` | Language/translation support |
| `settings.py` | Project/settings-related Python configuration |
| `test_load_tracker.py` | Project testing/support script |
| `screenshots/` | Project screenshots and visual references |

> The exact contents and responsibilities of files may evolve as the project is updated.

---

## 🔄 How the Platform Works

A simplified user flow is:

```text
                    ┌─────────────────────┐
                    │      KisanSahayak   │
                    │   Smart Agriculture │
                    │       Platform      │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       Crop / Disease     Agriculture       Government
         Assistance       Guidance &          Schemes
                          Recommendations
             │                 │                 │
             └─────────────────┼─────────────────┘
                               │
                               ▼
                     Farmer Support Resources
                               │
                ┌──────────────┴──────────────┐
                ▼                             ▼
        NGO / Organisation              Multilingual
             Directory                    Access
```

---

## 🧑‍🌾 Farmer-Centric Design

The project is intended to keep agricultural information approachable.

Design priorities include:

- Clear information
- Simple navigation
- Regional-language accessibility
- Useful contact/support information
- Easy access to schemes
- Practical agricultural guidance
- Centralized resources instead of scattered information

---

## 🛣️ Roadmap

The project can continue evolving toward a broader smart-agriculture ecosystem.

Possible future directions include:

- More crop and disease knowledge
- More regional-language coverage
- Expanded government-scheme database
- Larger verified support-organisation directory
- More localized agricultural recommendations
- Better farmer-resource discovery
- More comprehensive testing
- Production deployment and monitoring
- Additional intelligent agriculture capabilities

---

## 🌱 Vision

The long-term vision of **KisanSahayak** is to make agricultural information more accessible, understandable, and useful for farmers.

Instead of forcing farmers to navigate many disconnected sources, the platform aims to provide a single farmer-friendly digital entry point for:

**Knowledge → Guidance → Schemes → Support → Action**

---

## 📄 Project Status

**Project:** KisanSahayak  
**Branding:** AgriSense / KisanSahayak  
**Category:** Smart Agriculture / AgriTech  
**Primary audience:** Farmers and agricultural users  
**Interface:** Multilingual  
**Deployment direction:** GitHub + GitHub Pages for the static web application

---
