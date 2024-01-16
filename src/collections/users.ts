import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML({ token }) {
        return `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify account</a>`    
      },
    }
  },
  access: {
    read: () => true,
    create: () => true
  },
  fields: [
    {
      name: 'firstName',
      type: 'text', 
    },
    {
      name: 'lastName',
      type: 'text', 
    },
    {
      name: 'img',
      type: 'text', 
    },
    {
      name: "role",
      required: true,
      defaultValue: "user",
      admin: {
        // condition: ({req}) => req.user.role === "admin"
      },
      type: "select",
      options: [
        { label: "Admin", value: "admin"},
        { label: "User", value: "user"}
      ]
    },
  ]
}