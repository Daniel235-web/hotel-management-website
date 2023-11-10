import { defineField } from "sanity";

const user  = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField ({
            name: "isAdmin",
            title: "Is Admin",
            type: "boolen",
            description: "check if the user is admin",
            initialValue: false,
            validation: Rule => Rule.required(),
           // readOnly: true,
          // hidden: true,
        }),
    ],
};

export default user ;