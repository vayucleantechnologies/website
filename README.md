# VayuClean

VayuClean is a React-based web application built with Vite. It is designed to showcase cleanroom equipment and related products. The project uses modern tools and libraries to ensure a smooth development experience and high performance.

## Project Structure

### Root Directory
- **`index.html`**: The main HTML file that serves as the entry point for the application.
- **`package.json`**: Contains project metadata, dependencies, and scripts for development, building, and previewing the project.
- **`vite.config.js`**: Configuration file for Vite, the build tool used in this project.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS, used for styling the application.
- **`eslint.config.js`**: Configuration file for ESLint, used to enforce coding standards.
- **`postcss.config.js`**: Configuration file for PostCSS, used for processing CSS.
- **`netlify.toml`**: Configuration file for deploying the project on Netlify.
- **`vercel.json`**: Configuration file for deploying the project on Vercel.

### `src/` Directory
- **`App.jsx`**: The root component of the application.
- **`main.jsx`**: The entry point for the React application, rendering the root component.
- **`index.css`**: Global CSS file for the application.

#### `src/assets/`
Contains static assets like images and icons used throughout the application.

#### `src/components/`
Reusable React components:
- **`Aboutabt.jsx`**: Component for the "About" section.
- **`Abtcard.jsx`**: Card component used in the "About" section.
- **`Abtchoose.jsx`**: Component highlighting the mission and vision of the company.
- **`Banner.jsx`**: Component for the homepage banner.
- **`Brands.jsx`**: Component showcasing partner brands.
- **`Cards.jsx`**: General-purpose card component.
- **`Certification.jsx`**: Component for displaying certifications.
- **`ContactForm.jsx`**: Component for the contact form.
- **`Cta.jsx`**: Call-to-action component.
- **`Footer.jsx`**: Footer section of the application.
- **`Header.jsx`**: Header section, including navigation.
- **`ProductCard.jsx`**: Component for displaying product details.
- **`Section.jsx`**: Wrapper component for sections.

#### `src/utils/`
Utility files:
- **`utils.js`**: Contains helper functions and constants.
- **`products.js`**: Contains product data used in the application.

### `public/` Directory
Contains static files like logos and other assets that are directly accessible.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd vayuclean
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development
To start the development server:
```bash
npm run dev
```

### Build
To build the project for production:
```bash
npm run build
```

### Preview
To preview the production build:
```bash
npm run preview
```

### Linting
To lint the code:
```bash
npm run lint
```

## Deployment

### Netlify
The project can be deployed on Netlify using the `netlify.toml` configuration file.

### Vercel
The project can be deployed on Vercel using the `vercel.json` configuration file.

## Dependencies
- **React**: JavaScript library for building user interfaces.
- **Vite**: Build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework.
- **GSAP**: Animation library.
- **Framer Motion**: Animation library for React.
- **React Router**: Library for routing in React applications.

## DevDependencies
- **ESLint**: Linter for identifying and fixing problems in JavaScript code.
- **PostCSS**: Tool for transforming CSS with JavaScript plugins.
- **Tailwind CSS**: Utility-first CSS framework.

## License
This project is licensed under the MIT License.
