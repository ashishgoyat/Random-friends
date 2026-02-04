# Find Friends - Random User App

A modern web application that displays random user profiles fetched from the Random User API. Built with React and Vite for a smooth, fast user experience.

## Features

- 🎲 **Random User Generation**: Fetch random user profiles with profile pictures
- 📄 **Pagination**: Load more users with an easy-to-use "Load More" button
- 🎨 **Beautiful UI**: Modern gradient theme with smooth animations
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and production builds
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🔄 **Real-time Data**: Uses the Random User API to fetch live user data

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.8
- **HTTP Client**: Axios 1.7.7
- **Styling**: Custom CSS with gradient effects and animations
- **Linting**: ESLint with React plugin support

## Project Structure

```
find-friends/
├── src/
│   ├── components/
│   │   ├── RandomUser.jsx      # Main component for displaying users
│   │   └── RandomUser.css      # Styling with gradient theme
│   ├── App.jsx                 # Root component
│   ├── App.css                 # App-level styles
│   ├── main.jsx                # Application entry point
│   ├── index.css               # Global styles
│   └── assets/                 # Static assets
├── public/                     # Public files
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # This file
```

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd find-friends
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Server

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).


## How It Works

1. **RandomUser Component** fetches user data from the [Random User API](https://randomuser.me/)
2. **Initial Load**: Fetches 7 random users on component mount
3. **Pagination**: Each "Load More" click fetches the next page of users
4. **Display**: Users are displayed in cards showing their profile picture, name, and email
5. **Loading State**: Button shows "Fetching..." while data is being loaded

## API Integration

The app uses the Random User API endpoint:
```
https://randomuser.me/api?page={pagenum}&results=7
```

- Returns 7 random user profiles per request
- Supports pagination through the `page` parameter
- Includes user details: name, email, and profile picture

## Author

Ashish - Web Development Assignment

---

**Enjoy discovering random friends!** 👥✨
