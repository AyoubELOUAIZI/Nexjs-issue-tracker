import { z } from "zod";
// this code was in the route.ts file in api for the essues and we did 
//a refactoring to make it in a saperate file and then we change its name
// and it porpos is to validate the data
export const createIssueSchema = z.object({
  title: z.string().min(1, "Title is required").max(255),
  description: z.string().min(1, "Description is required").max(255),
});
