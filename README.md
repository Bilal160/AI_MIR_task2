# Employee Survey Analytics Dashboard

A modern React-based **UI-only** dashboard for analyzing and visualizing employee survey data with multiple analytical views and comprehensive filtering capabilities. This is a frontend-only application that uses mock data for demonstration purposes.

## Project Approach

This is a **UI-only application** (frontend-only) that provides a comprehensive analytics platform for employee engagement surveys. The project is built with a component-based architecture using React and TypeScript, focusing on:

- **Multi-View Analysis**: Multiple visualization views including Comments Report, Heatmap View, and Priority Matrix View to analyze survey data from different perspectives
- **Advanced Filtering**: Filter data by location, department, gender, tenure, and age to drill down into specific segments
- **Scoring System**: Calculates net scores, favorable percentages, and correlation metrics for various drivers (Leadership, Teamwork, Meaningfulness, etc.)
- **Data Visualization**: Uses Recharts for interactive charts and visualizations
- **Modern UI/UX**: Built with Tailwind CSS for a clean, responsive interface with intuitive navigation

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository 

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

#### Build for Production

Create an optimized production build:
```bash
npm run build
```

The built files will be in the `dist` directory.

#### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

#### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

- `src/` - Source code
  - `components/` - Reusable UI components (Layout, FilterBar)
  - `views/` - Main view components (CommentsView, HeatmapView, PriorityMatrixView)
  - `utils/` - Utility functions (scoring calculations)
  - `data/` - Mock data for development
  - `types.ts` - TypeScript type definitions
  - `constants.tsx` - Application constants and configuration

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Charting library
- **Lucide React** - Icon library
