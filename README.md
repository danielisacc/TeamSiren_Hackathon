# 📢TeamSiren_Hackathon
A platform that delivers real-time alerts, assistance, and survival recommendations to subscribers during natural disasters.

### 👥Teammates:
* Daniel Isacc De La Vega 
* Joel Trimmer
* Nicolas Saliani
* Rayan Javaid
* Valeria Salazar
* William Arnaud Fotso

###  🎯 Objectives:

* Create a responsive website
* Develop an efficient alert system
* Integrate real-time natural disaster data
* Deliver timely notifications to users
* Provide survival guides and emergency resources

###  ✨ Features

* Real-time alerts for disasters
* Subscription system by ZIP code and phone number
* Calm, modern, and professional UI


### 🛠️ Tech Stack

##### Frontend

* React (JavaScript)
* TypeScript classes (for Hospitals, Predictions)
* Google Maps integration

##### Backend

* Flask (Python)
* SQLite3 database
* Twilio API for notifications
* WebAI for disaster predictions

### ❓Key Questions
* How do we find out what disaster is happening?
* How do we determine the affected location?
* How and when do we send messages to users?
* How is user data stored securely?
* How many disaster types are tracked?
* How do we render a real-time map with data overlays?

### 🚀 Sprints
##### Backend

* Database Setup: Create and deploy a SQLite3 database, tables, and dummy data

* API Connection: Parse external disaster APIs, extract necessary info, and generate a JSON file

* Notification Service: Use Twilio to send alerts based on user ZIP codes

##### Frontend

* Subscription Form: Collect ZIP code and phone number

* Information Pages: Detailed disaster-specific guides

* Map Component: Google Maps integration showing disaster zones and shelters

* Prediction Tools: Display WebAI predictions for floods and wildfires

* Layout Components: Cards, Flatlists, Dashboard grid

### 🗺️ Frontend Layout

##### Layout Structure:
* Top Left Section: Key alert info Card

* Bottom Left Section: Vertical Flatlist/Card (2 visible items)

* Right Main Area: Interactive real-time Map

* Bottom Section: Horizontal Flatlist/Card (3 visible items)

##### Visual Style:

* Professional, modern, and minimalistic

* Calm dark blue tones, muted grays, soft whites

* Elegant sans-serif fonts

* Subtle dividers, rounded corners, clean shadow effect