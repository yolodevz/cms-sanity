# Next.js + Sanity CMS Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and integrated with Sanity CMS.

## Getting Started

### 1. Install Dependencies

First, install the project dependencies:

```bash
pnpm i
```

### 2. Set Up Sanity CMS

1. Sign up for an account at [sanity.io](https://sanity.io)
2. Create a new project in your Sanity dashboard
3. Note your project's `ID` and create a `dataset` (you can have up to 2 datasets on the free plan)
4. Create a `development` dataset
5. Generate an API token with `read/write` permissions

### 3. Configure Environment Variables

1. Copy the `env.example` file to `.env.local`
2. Populate the three required variables with your Sanity project details:
   - NEXT_PUBLIC_SANITY_PROJECT_ID
   - NEXT_PUBLIC_SANITY_DATASET
   - SANITY_API_READ_WRITE_TOKEN

### 4. Start the Development Server

Run the development server:

```bash
pnpm dev
```

### 5. Access Your Application

- **Main site**: Open [http://localhost:3000](http://localhost:3000) to view your pages with Sanity CMS content
- **Sanity Studio**: Open [http://localhost:3000/studio](http://localhost:3000/studio) to access the content management interface

## Initial Setup

The project comes with pre-configured documents and schemas, but your newly created dataset will be empty. To see content on your site:

1. Navigate to the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio)
2. Create your first page using the studio interface
3. **Publish** the page once you're satisfied with the content
4. In the `Site Settings` document, assign your newly created page as the homepage

## Next Steps

You're now ready to:
- Edit content through the Sanity Studio
- Expand and customize the existing schemas
- Experiment with additional features

Enjoy building with Sanity CMS :)
