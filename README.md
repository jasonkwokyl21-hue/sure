# Sure - Basketball Training App

A React app for basketball skill development, workouts, challenges, and performance tracking.

## Features

- **Training Programs**: Structured workout programs with detailed drills and instructions
- **Challenges**: Compete in community challenges and track your progress
- **AI Shot Tracker**: Real-time shot tracking using camera
- **Wearable Integration**: Connect Apple Watch, Fitbit, and Oura Ring for heart rate and metrics
- **Leaderboards**: Compete on tier-based leaderboards in Hustle Arena Labs
- **Profile & Stats**: Track your stats, rank, and performance metrics

## Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.4
- **Icons**: Lucide React 0.467.0
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
# Build the project
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel: https://vercel.com
3. Vercel will automatically detect the Vite configuration and deploy

**Live App**: https://sure-neon.vercel.app

### Environment Variables

For production, you may need to set environment variables in Vercel:

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add any required variables (see `.env.example` for reference)

## Project Structure

```
.
├── src/
│   └── main.jsx          # App entry point
├── App.jsx               # Main app component
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── vercel.json           # Vercel deployment config
├── package.json          # Dependencies
└── README.md             # This file
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

MIT
