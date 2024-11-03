# Scrollz Frontend Monorepo

Welcome to the Scrollz frontend monorepo! This project uses pnpm workspaces and Turborepo to manage multiple Next.js applications and shared packages in a single repository.

## Overview

This monorepo contains:

- Multiple Next.js frontend applications (website and admin)
- Shared packages (UI components, configurations, etc.)
- Unified build and development setup

The goal is to keep all frontend-related projects in one place, making development and maintenance easier.

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- pnpm (our package manager of choice)

### Installation

1. Install pnpm globally:

   ```
   npm install -g pnpm
   ```

2. Clone the repository:

   ```
   git clone https://github.com/your-username/scrollz-monorepo.git
   cd scrollz-monorepo
   ```

3. Install dependencies:
   ```
   pnpm install
   ```

## Project Structure

- `apps/`: Contains standalone Next.js applications
  - `web/`: The main website
  - `admin/`: The admin dashboard
- `packages/`: Shared packages used across applications
  - `ui/`: Shared UI components (using shadcn/ui)
  - `config/`: Shared configurations
  - `eslint-config/`: ESLint configurations
  - `typescript-config/`: TypeScript configurations
  - `lib/`: Shared utilities and functions
  - `providers/`: Shared providers (e.g., React Query, Tooltip)

## Development

To start all applications:

```
pnpm run dev
```

To start a specific application:

```
pnpm run dev:web    # For the website
pnpm run dev:admin  # For the admin dashboard
```

## Adding Dependencies

To add a package to a specific app:

```
pnpm add <package-name> --filter <app-name>
```

Example:

```
pnpm add react-icons --filter web
```

## Using Shared Packages

To use a shared package in an app, add it to the app's `package.json`:

```json
{
  "dependencies": {
    "@scrollz/ui": "workspace:*",
    "@scrollz/config": "workspace:*"
  }
}
```

Then run `pnpm install` to link the packages.

## Why pnpm and Turborepo?

- **pnpm**: Efficient package management, perfect for monorepos. It saves disk space and speeds up installation. [Learn more about pnpm](https://pnpm.io/)
- **Turborepo**: Optimizes build times by caching and parallel execution. It only rebuilds what's necessary, improving developer experience. [Learn more about Turborepo](https://turbo.build/repo)

## Troubleshooting

If you encounter any issues:
Clean and reinstall dependencies: `pnpm clean && pnpm install`,
This might solve might fix the issue.

Remember, we're all working together to build amazing product called Scrollz. Happy coding!
