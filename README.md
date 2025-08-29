# Galkon Heights Business Center 🏢

## Overview
Galkon Heights Business Center is a modern, responsive React web application designed to showcase a range of business services and computer training programs. This platform provides clients with an intuitive interface to explore offerings, submit service requests, and enroll in various training courses.

## Features
*   **Service Showcase**: Clearly presents all available business center services, including printing, photocopying, laminating, binding, and letterhead production.
*   **Comprehensive Training Programs**: Details two distinct computer training tracks (Basic and Advanced), outlining durations and fees.
*   **Interactive Enrollment**: Features a dynamic modal form for users to easily enroll in desired training programs, complete with toast notifications for feedback.
*   **Streamlined Request Form**: Enables clients to make specific service requests directly through the website, facilitating efficient communication.
*   **Dynamic Routing & Transitions**: Leverages React Router DOM for seamless navigation between pages, enhanced by smooth page transitions powered by Framer Motion.
*   **Responsive Design**: Built with Tailwind CSS, ensuring an optimal viewing and interaction experience across all devices and screen sizes.
*   **Email Integration**: Utilizes EmailJS to handle direct email submissions for both service requests and training enrollments, automating communication.

## Getting Started
To set up and run this project locally, follow these steps:

### Installation
1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Bensaxxy/Galkon-Heights-Center
    cd Galkon-Heights-Center
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Create Environment Variables**:
    Create a `.env` file in the root directory and add the following EmailJS credentials. You will need to obtain these from your EmailJS account.
    ```
    VITE_EMAILJS_SERVICE_ID="YOUR_EMAILJS_SERVICE_ID"
    VITE_EMAILJS_TEMPLATE_ID="YOUR_EMAILJS_REQUEST_TEMPLATE_ID"
    VITE_EMAILJS_PUBLIC_KEY="YOUR_EMAILJS_PUBLIC_KEY"
    ```
    _Note: The training enrollment form uses a specific template ID (`template_vlu21fj`) hardcoded in `src/pages/Training.jsx` in addition to the `VITE_EMAILJS_TEMPLATE_ID` used by the generic request form._
4.  **Run the Development Server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will now be running on `http://localhost:5173` (or another port as indicated by Vite).

## Usage
Upon launching the application, you can navigate through various sections:

*   **Home Page (`/`)**: Discover an overview of Galkon Heights' services and popular offerings. Use the call-to-action buttons to quickly navigate to the request or training pages.
*   **Training Page (`/training`)**: Explore detailed descriptions of the Basic and Advanced Computer Training programs. Click "Enroll Now" to open a modal form where you can submit your details to sign up.
*   **Make a Request Page (`/request`)**: Fill out a form to submit a specific service request. Select the desired service and provide details, then submit to send an email to the business center.
*   **Contact Page (`/contact`)**: Find the physical address, phone number, email address, and a Google Map embed for the business center's location.

The navigation bar provides quick access to all main sections, and the footer contains essential contact and location information.

## Technologies Used
This project leverages a modern web development stack to deliver a robust and interactive user experience.

| Technology      | Description                                          | Link                                                  |
| :-------------- | :--------------------------------------------------- | :---------------------------------------------------- |
| React           | A JavaScript library for building dynamic user interfaces. | [React](https://react.dev/)                           |
| Vite            | A blazing fast build tool that significantly improves the frontend development experience. | [Vite](https://vitejs.dev/)                           |
| Tailwind CSS    | A utility-first CSS framework for rapidly building custom designs. | [Tailwind CSS](https://tailwindcss.com/)              |
| React Router DOM | Declarative routing for React applications, enabling seamless navigation. | [React Router](https://reactrouter.com/)              |
| Framer Motion   | A production-ready motion library for React, used for fluid animations and transitions. | [Framer Motion](https://www.framer.com/motion/)       |
| EmailJS         | Allows sending emails directly from JavaScript, without a backend server. | [EmailJS](https://www.emailjs.com/)                   |
| ESLint          | A pluggable linting utility for JavaScript, ensuring code quality and consistency. | [ESLint](https://eslint.org/)                         |
| PostCSS         | A tool for transforming CSS with JavaScript plugins, used for Tailwind CSS and Autoprefixer. | [PostCSS](https://postcss.org/)                       |
| Autoprefixer    | A PostCSS plugin to parse CSS and add vendor prefixes to CSS rules. | [Autoprefixer](https://github.com/postcss/autoprefixer) |

## Contributing
We welcome contributions to enhance Galkon Heights Business Center. To contribute, please follow these guidelines:

*   🌿 **Fork the Repository**: Start by forking the project to your GitHub account.
*   🌱 **Create a New Branch**: Create a feature or bugfix branch from `main` (e.g., `feature/add-new-service` or `bugfix/fix-contact-form`).
*   💻 **Make Your Changes**: Implement your features or bug fixes. Ensure your code adheres to the project's coding standards.
*   📝 **Write Clear Commit Messages**: Use descriptive commit messages that explain the purpose of your changes.
*   🚀 **Push to Your Branch**: Push your local branch to your forked repository.
*   📤 **Open a Pull Request**: Submit a pull request to the `main` branch of the original repository, providing a clear description of your changes and why they are necessary.

## License
This project is currently without an explicit license. Please contact the author for licensing information.

## Author Info
Developed with passion and precision.

*   **LinkedIn**: [Your LinkedIn Profile](https://www.linkedin.com/in/yourusername)
*   **Twitter**: [Your Twitter Profile](https://twitter.com/yourusername)
*   **Portfolio**: [Your Portfolio Website](https://www.yourportfolio.com)

---

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-F2F2F2?style=for-the-badge&logo=framer&logoColor=black)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-F2F2F2?style=for-the-badge&logo=emailjs&logoColor=red)](https://www.emailjs.com/)

---

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)