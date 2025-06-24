This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies:

```bash
pnpm i
```

Then, sign up to `sanity.io`. You'll need to create a project there.
Every project has an `id` and `dataset`. You may have up to 2 datasets on a free plan.

Create a `development` dataset and then and API token with a `read/write` permission.

Now, armed with an id, new dataset and token, copy the `env.example` and populate three variables you see.

You should be all set.

Lastly, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the pages with Sanity CMS content.

Open [http://localhost:3000/studio](http://localhost:3000/studio) with your browser to see the sanity studio and manage content.

Documents and schemas are prepared for you, but there is no data in the dataset you just created. 
Before you see anything displayed on the page, make sure to create a page using sanity studio url above. Once you have the page ready and `published`, assign it as a homepage in the `Site Settings` document.

Enjoy editing content, expanding schemas and experimenting further :)