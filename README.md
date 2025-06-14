
# 🎓 EduCase - Internship Project

EduCase is a user authentication flow project developed as part of my internship work. It features a complete user journey—from login to account creation, and secure access to a personalized profile page. The goal of the project is to simulate a real-world user system using clean UI and functional logic.

## 🌟 Features

- 🔐 **Login Page** – Secure login with validation
- 🆕 **Account Options** – Create Account or Sign Up flow
- 📝 **Sign-Up Form** – Multiple user input options for new account creation
- 👤 **User Profile Page** – Displays basic user info after successful login
- 🚪 **Logout Functionality** – Returns user back to the main PoPX homepage

## 🔄 User Flow

1. **Home Page / PoPX First Page**
2. ➡️ Clicks **Login**
3. 🔓 **Login Page**
   - Already have an account? Login with credentials.
   - New user? Click on **Sign Up** or **Create Account**.
4. 🆕 **Sign Up Options Page**
   - Enter name, email, password, confirm password, and other details.
   - Submit to register the user.
5. 🔐 **Back to Login**
   - After sign up, return to login with newly created credentials.
6. 👤 **Profile Page**
   - Displays user's details.
   - Includes **Logout** button.
7. 🚪 **Logout**
   - Redirects back to the main **PoPX homepage**.

## 📸 Screenshots

| Login Page | Sign Up Options | Sign Up Form | Profile Page |
|------------|------------------|--------------|----------------|
| ![Screenshot 2025-06-15 001149](https://github.com/user-attachments/assets/dfaa51fc-cd19-4c11-bcec-73915bb93ae9) | ![Screenshot 2025-06-15 001416](https://github.com/user-attachments/assets/245f6bc9-dd82-4dc9-82cc-70724ce169b5)| ![Screenshot 2025-06-15 002130](https://github.com/user-attachments/assets/3c602f72-be6f-44e8-b3a1-4bbdf70f61b0) | ![image](https://github.com/user-attachments/assets/bf65df95-9d1c-4a14-80fb-fefdef52e6f7) |

## 🛠️ Tech Stack

- React.js (Frontend)
- HTML/CSS
- JavaScript
- React Router DOM
- State Management with React hooks

## 📁 Folder Structure (example)

```
/educase-project
├── /components
|────/pages
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Profile.jsx
│   └── Home.jsx
├── App.jsx
├── index.jsx
└── README.md
```

## 🚀 How to Run

1. Clone the repo  
```bash
git clone https://github.com/apu52/Login-Internship-work.git
cd educase-project
```

2. Install dependencies  
```bash
npm install
```

3. Start the development server  
```bash
npm start or npm run dev
```

4. Open in browser  
Visit `http://localhost:8080`

## 🙋‍♂️ Author

Made with ❤️ by **Arpan Chowdhury** during internship project work.

