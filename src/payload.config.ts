import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { project } from "./constants/settings";
import path from "path";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [],
  routes: {
    admin: "/sell",
  },
  admin: {
    bundler: webpackBundler(), // this is just for the cms... nextjs still bundles on its own
    meta: {
      titleSuffix: `- ${project.name}`,
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.png" // when you share a link to your app
    }
  },
  rateLimit: {
    max: 2000
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGO_DB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts")
  }
})