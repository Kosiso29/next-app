import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
    branch,
    clientId: "7efe41ff-65ac-493b-ad01-bf79108a20dc", // Get this from tina.io
    token: "1a2b37a2bdc9e7fe274b7d6a59e37c0eca080c78", // Get this from tina.io

    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [
            {
                name: "page",
                label: "Pages",
                path: "content/posts",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Bag",
                        name: "bag",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
                ui: {
                    // This is an DEMO router. You can remove this to fit your site
                    router: ({ document }) => `/demo/blog/${document._sys.filename}`,
                },
            },
            {
                name: "post",
                label: "Posts",
                path: "content/pages",
                fields: [
                    {
                        type: "string",
                        name: "title",
                        label: "Title",
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: "string",
                        label: "Bag",
                        name: "bag",
                    },
                    {
                        type: "rich-text",
                        name: "body",
                        label: "Body",
                        isBody: true,
                    },
                ],
                ui: {
                    // This is an DEMO router. You can remove this to fit your site
                    router: ({ document }) => `/demo/blog/${document._sys.filename}`,
                },
            },
        ],
    },
});
