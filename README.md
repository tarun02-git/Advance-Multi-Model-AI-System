# FlowBit - Visual Workflow Orchestration

FlowBit is a modern workflow orchestration system built with Next.js, LangFlow, and shadcn/ui. It provides a visual interface for creating and managing workflows using LangFlow's powerful flow editor.

## Features

- Visual workflow editor powered by LangFlow
- Real-time workflow execution monitoring
- Multiple execution methods (manual, webhook, cron)
- Modern and responsive UI with shadcn/ui
- Docker-based deployment with Redis for persistence

## Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flowbit.git
   cd flowbit
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the LangFlow and Redis services:
   ```bash
   docker-compose up -d
   ```

4. Create a `.env.local` file with the following content:
   ```
   NEXT_PUBLIC_LANGFLOW_URL=http://localhost:3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
flowbit/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Dashboard page
│   ├── workflow/          # Workflow pages
│   └── settings/          # Settings page
├── components/            # React components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── workflow-list.tsx # Workflow list component
│   └── execution-list.tsx # Execution list component
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/             # Global styles
```

## Development

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

## License

MIT 