# $KITTY - Cryptocurrency Landing Page

A modern, responsive landing page built with Next.js for the $KITTY cryptocurrency token.

## Features

- 🎨 Modern design with custom animations
- 📱 Fully responsive layout
- 🎯 Interactive contract address copying
- 🌟 Custom typography with Stopbuck font
- 🎭 Animated UI components
- 🔗 Social media integration
- 💰 Exchange links and information

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Font**: Custom Stopbuck font
- **Icons**: Custom SVG components
- **Deployment**: Ready for Vercel, Netlify, or similar platforms

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone [your-repo-url]
cd kitty-landing-page
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── (landing)/
│   │   ├── _components/     # Landing page components
│   │   └── page.js         # Main landing page
│   ├── fonts/              # Custom fonts
│   ├── globals.css         # Global styles
│   └── layout.js           # Root layout
├── components/             # Reusable components
│   ├── flags/              # Flag animations
│   ├── icons/              # SVG icon components
│   └── [other components]
├── constants/              # App constants
└── public/                 # Static assets
```

## Components

### Landing Page Sections

- **Hero**: Main title with contract address
- **About**: Information about the project
- **Exchanges**: Available trading platforms
- **Tokenomics**: Token distribution details
- **How to Buy**: Step-by-step purchase guide
- **Footer**: Links and additional information

### Reusable Components

- **Icons**: Custom SVG icon set
- **Cards**: Various card layouts
- **Flags**: Animated flag components

## Customization

### Contract Address

Update the contract address in `constants/index.js`:

```javascript
export const contractAddress = "your-contract-address-here";
```

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Custom colors and fonts are configured in the Tailwind config

### Content

All content can be modified in the respective component files under `app/(landing)/_components/`.

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

This project is ready to deploy on:

- **Vercel** (recommended)
- **Netlify**
- **Any static hosting service**

Simply connect your repository to your preferred hosting platform.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support, please open an issue in the repository or contact the development team.
