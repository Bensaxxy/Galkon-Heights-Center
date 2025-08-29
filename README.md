# Galkon Heights Center: Your Premier Business Services Hub 🏢

## Overview

Galkon Heights Center is a dynamic and modern single-page application built with React, Vite, and Tailwind CSS. This project serves as the online presence for a business center, offering services like printing, photocopying, laminating, binding, and computer training, complete with seamless request and enrollment functionalities powered by EmailJS.

## Features

*   ✨ **Intuitive Navigation:** Smooth and responsive navigation with React Router DOM for an excellent user experience across all pages.
*   🚀 **Animated Page Transitions:** Utilizes Framer Motion to provide engaging and fluid animations between page routes.
*   📝 **Service Request Form:** A dedicated page where clients can easily submit requests for various business services, integrated with EmailJS for direct communication.
*   🎓 **Training Enrollment System:** Features separate sections for basic and advanced computer training, allowing prospective students to enroll through an integrated EmailJS form.
*   📄 **Comprehensive Service Display:** Clearly showcases all services offered by the business center with detailed descriptions.
*   📞 **Detailed Contact Information:** Provides essential contact details and integrates a Google Map for easy location finding.
*   📱 **Responsive Design:** Ensures a consistent and appealing user interface across desktops, tablets, and mobile devices, thanks to Tailwind CSS.

## Getting Started

Follow these steps to set up and run the Galkon Heights Center project locally on your machine.

### Installation

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/Bensaxxy/Galkon-Heights-Center.git
    ```
2.  **Navigate to the Project Directory**:
    ```bash
    cd Galkon-Heights-Center
    ```
3.  **Install Dependencies**:
    ```bash
    npm install
    ```
    or if you prefer Yarn:
    ```bash
    yarn install
    ```
    or if you prefer pnpm:
    ```bash
    pnpm install
    ```

### Environment Variables

This project uses [EmailJS](https://www.emailjs.com/) for sending service requests and training enrollment emails. You will need to configure your EmailJS credentials.

1.  **Create a `.env` file** in the root of the project:
    ```
    .env
    ```
2.  **Add the following variables** to your `.env` file, replacing the placeholder values with your actual EmailJS credentials:

    ```ini
    VITE_EMAILJS_SERVICE_ID="your_emailjs_service_id"
    VITE_EMAILJS_TEMPLATE_ID="your_emailjs_template_request_id"
    VITE_EMAILJS_TEMPLATE_TRAINING_ID="your_emailjs_template_training_id"
    VITE_EMAILJS_PUBLIC_KEY="your_emailjs_public_key"
    ```

    *   You can find your `SERVICE_ID`, `TEMPLATE_ID` (for service requests and training enrollments), and `PUBLIC_KEY` in your [EmailJS Dashboard](https://www.emailjs.com/docs/introduction/how-it-works/).

## Usage

Once the installation is complete and environment variables are set, you can run the development server:

```bash
npm run dev
```

This will start the application, usually accessible at `http://localhost:5173/`.

### Navigating the Application

*   **Home Page**: Explore an overview of the business center's offerings and popular services. You can easily navigate to "Make a Request" or "Want to Train?" directly from the hero section.
*   **Training Page**: Discover the Basic and Advanced training programs. Click "Enroll Now" for your desired program to open a simple enrollment form. Fill in your details and submit to register.
*   **Make a Request Page**: Utilize the form to specify your service needs (e.g., Printing, Photocopy, Laminating, Binding, Letter Head). Provide your contact information and detailed requirements, then submit your request.
*   **Contact Page**: Find the business center's address, phone number, email, and a helpful embedded Google Map for directions.

## Features

*   **Modern UI/UX**: Crafted with Tailwind CSS for a sleek, responsive, and visually appealing design.
*   **Single Page Application (SPA)**: Built with React and React Router DOM for fast, seamless page transitions without full page reloads.
*   **Smooth Animations**: Leverages Framer Motion to add delightful and subtle animations, enhancing user interaction.
*   **Email Integration**: Employs EmailJS to power direct communication for service requests and training enrollments, streamlining client interactions.
*   **Code Quality**: Configured with ESLint for consistent code styling and best practices, ensuring maintainability and robustness.

## Technologies Used

| Technology                                                 | Description                                            |
| :--------------------------------------------------------- | :----------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge) | A JavaScript library for building user interfaces.     |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)   | A lightning-fast build tool for modern web projects.  |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge) | A utility-first CSS framework for rapid UI development. |
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?logo=reactrouter&logoColor=white&style=for-the-badge) | Declarative routing for React applications.            |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?logo=framer&logoColor=white&style=for-the-badge) | A production-ready motion library for React.           |
| ![EmailJS](https://img.shields.io/badge/EmailJS-E43B33?logo=gmail&logoColor=white&style=for-the-badge) | Send emails directly from JavaScript, without a server. |
| ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=for-the-badge) | Pluggable JavaScript linter.                           |

## Contributing

We welcome contributions to enhance Galkon Heights Center! If you have suggestions or would like to contribute, please follow these guidelines:

*   ✨ Fork the repository.
*   🌿 Create a new branch for your feature or bug fix: `git checkout -b feature/your-feature-name`.
*   💻 Make your changes and ensure the code adheres to our styling conventions.
*   📝 Write clear, concise commit messages.
*   🚀 Push your branch: `git push origin feature/your-feature-name`.
*   💬 Open a pull request explaining your changes and their benefits.

## License

No specific license file was found in the project.

## Author Info

Developed by Bensaxxy.

*   LinkedIn: [Your LinkedIn Profile]
*   Twitter: [Your Twitter Handle]
*   Portfolio: [Your Portfolio URL]

---

![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-06B6D4?logo=tailwindcss)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-0.0.0-lightgrey)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)