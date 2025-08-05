# React Portfolio

A modern, responsive portfolio website built with React and Tailwind CSS, inspired by Brittany Chiang's design.

## Features

- 🎨 Modern, clean design with dark theme
- 📱 Fully responsive layout
- ⚡ Smooth scrolling and animations
- 🎯 Interactive navigation with active section highlighting
- 💫 Hover effects and transitions
- 🔧 Built with React hooks and modern JavaScript

## Tech Stack

- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

Make sure you have Node.js installed (version 14 or higher).

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:

```bash
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## Customization

### Personal Information

Update the following in `src/App.js`:

1. **Hero Section**: Change name, title, and description
2. **About Section**: Update bio and technologies
3. **Experience**: Modify the `experiences` array with your work history
4. **Projects**: Update the `projects` array with your projects
5. **Contact**: Change email and social links

### Styling

- Colors and themes can be modified in `tailwind.config.js`
- Custom CSS can be added to `src/App.css`
- Fonts can be changed in `src/index.css`

### Adding New Sections

1. Create a new section in the JSX
2. Add the section ID to the navigation array
3. Update the scroll handling logic if needed

## Project Structure

```
src/
├── App.js          #