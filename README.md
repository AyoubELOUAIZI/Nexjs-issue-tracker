This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

<!-- start the project notes here -->
# How do I will follow the cours
1-watch wih focus 
2- take notes
3- try to anderstand it very will may be repeat the moment of the video and some search
4-try to make it all my self
5- back to the video to correct or now action

<!-- notes of the Project -->
1- installing the extentions tailwind css,typescript ,prisma
2-sart the virsion 13.4.19
3-starting with the navbar we create the component in the app folder not in the component folder because it is not a reausebel component.
<!--  -->
we added an icon using react-icons library
<!-- the second solution for the hyliting the active link -->
# import classNames from 'classnames';
with the use of the classnames library we can use the function classNames and give it the classes we want to render and the condition to render and then it returns a string of the class names depending on the condition.

# Interaction with data base:
to allow Our application to interact with the data base we are going to use prisma
    1-to install it we use: npm install prisma
    2-to initialize it we use: npx prisma init
    3-we change the provider to mysql
    4-we can run the command npx prisma format to format the file.
# building an api
    1-we also used zod for data validation and then if the validation fails it will return an error ,but if the validation succeeds it should store the data in the database ,but how?
    2-for storing the data in the database will use the prisma client so we need to stall it first.
    3-we go to this site:"Best practice for instantiating PrismaClient with Next.js"
    4-and we copie the code .

# Sitting up Radix ui:
    1-the first we install it using the command : npm install @radix-ui/themes
    2-of course we are going to import it and use it ahah,but first we need to wrapp the lyout with the Theme from Radix UI.
    3-
# Building the new Issue page:
    1-we just want to build a page that has tow input fields maybe one for the titil and the other for the description.
# Adding a markdown editor for the description field:
    1-for that we are going to use React SimpleMDE (EasyMDE) Markdown Editor.
    2-we run the commmand: npm install --save react-simplemde-editor easymde
    3-it is very easy to to use we just import and use the component
# Handling form submission:
    1-we will use the react hook form:
    2-run the command npm install react-hook-form
    3-then we use the register the most important thing
    4-and of course we need to create an interface for the useForm hook
    5-also we take looks in the example existing in the documentation of the form-hook
    6-using the register directly with the simpleMDE does not work that why we need the Controller
    7-

