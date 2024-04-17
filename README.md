# My Pokemon App

Welcome to My Pokemon App, a React-based application designed to help users manage and explore information about Pokemon. Whether you're a seasoned Pokemon trainer or just starting your journey, this app provides you with the tools you need to discover, search, and learn about your favorite Pokemon creatures.

## Getting Started

To get started with My Pokemon App, follow these simple steps:
    **Ready App**: Open your browser and visit https://pokeapi-tawny.vercel.app/ to start exploring the app.

1. **Clone the repository**: Start by cloning this repository to your local machine using your preferred Git client or by running the following command:

    ```
    git clone <repository-url>
    ```

2. **Install dependencies**: Navigate to the project directory and install the necessary dependencies by running:

    ```
    npm install
    ```

3. **Run the development server**: Once the dependencies are installed, start the development server by running:

    ```
    npm run dev
    ```

4. **Explore the app**: Open your favorite web browser and visit `http://localhost:3000` to start exploring the My Pokemon App.

## Project Structure

The project follows a structured organization to maintain clarity and modularity:

```
my-pokemon-app/
│
├── src/
│ ├── components/
│ │ ├── Layout.tsx
│ │ ├── Group.tsx
│ │ └── ...
│ │
│ ├── pages/
│ │ ├── App.tsx
│ │ ├── Pokemons.tsx
│ │ ├── Pokemon.tsx
│ │ └── ...
│ │
│ ├── hooks/
│ │ ├── useDebounce.ts
│ │ └── ...
│ │
│ ├── store/
│ │ ├── api/
│ │ │ └── ...
│ │
│ │ ├── pokemon/
│ │ │ └── ...
│ │
│ │ ├── pokemons/
│ │ │ └── ...
│ │
│ │ └── index.ts
│ │
│ ├── styles/
│ │ ├── variables.scss
│ │ └── ...
│ ├── App.tsx
│ ├── index.css
│ └── index.tsx
├── .gitignore
├── package.json
├── README.md
└── ...
```

- **components/**: Contains reusable UI components used throughout the application.
- **pages/**: Contains top-level page components, such as `App`, `Pokemons`, and `Pokemon`.
- **store/**: Houses Redux-related logic, including slices for `pokemon` and `pokemons`, as well as API services.
- **styles/**: Contains global styles and SCSS variables used for styling.
- **App.tsx**: Main entry point of the application, rendering the root component.
- **index.tsx**: Entry point for the React application.
- **package.json**: Configuration file for npm dependencies and scripts.
- **README.md**: Detailed documentation providing instructions and information about the project.

## Technologies Used

My Pokemon App is built using the following technologies and libraries:

- **React**: A popular JavaScript library for building user interfaces, providing a fast and efficient way to create interactive components and manage state.
- **Redux Toolkit**: A powerful toolset for managing application state in React applications, making it easier to write scalable and maintainable code.
- **Ant Design (AntD)**: A comprehensive UI library for React that offers a wide range of customizable components and design patterns.
- **React Router**: A routing library for React applications, enabling easy navigation and management of different views and pages.
- **Axios**: A promise-based HTTP client for making asynchronous requests, allowing the app to fetch data from external APIs and services.
- **Lodash**: A utility library that provides helpful functions for working with arrays, objects, and other data structures, enhancing productivity and code readability.
- **Sass**: A powerful CSS extension language that adds features such as variables, mixins, and nesting, making styling more maintainable and organized.
- **ESLint & Prettier**: Tools for enforcing code quality and style conventions, ensuring consistency and reliability across the codebase.
- **TypeScript**: A typed superset of JavaScript that adds static typing and other advanced features to the language, enhancing developer productivity and code safety.

## Methodologies

My Pokemon App follows industry best practices and methodologies to ensure a robust and maintainable codebase:

- **Composition Components**: The app utilizes the composition component pattern to break down complex UIs into smaller, reusable components, promoting code reuse and modularity.
- **Pure Functions**: Wherever possible, the app employs pure functions to handle data transformations and logic, ensuring predictable behavior and facilitating unit testing.
- **Responsive Design**: The app is designed with responsiveness in mind, ensuring a seamless user experience across various devices and screen sizes.
- **Accessibility**: Accessibility best practices are followed to ensure that the app is usable by individuals with disabilities, adhering to WCAG guidelines and standards.