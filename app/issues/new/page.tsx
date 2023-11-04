"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

// interface IssueForm {
//   title: string;
//   description: string;
// }
// we use this instead of interface to avoid redendants
// so now the tipe of IssueForm is the same as the type of createIssueForm
type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const {
    register,
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });
  //this is just writing the data in the console but we need to send the data to the api.
  //that why we will use axios.
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      setIsSubmiting(true);
      console.log("the data form the form : ", data);
      await axios.post("/api/issues", data);
      router.push("/issues");
      setIsSubmiting(false);
    } catch (error) {
      setIsSubmiting(false);
      console.log(error);
      setError("An unexpected error occurred!");
    }
  };
  // console.log(register('title'))
  // console.log("this is the watch title : "+watch("title")) // watch input value by passing the name of it

  return (
    <div className="max-w-xl space-y-3">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        {/* {errors.title && } */}
        {/* using the register directly with the simpleMDE does not work that why we need the Controller */}
        {/* <SimpleMDE placeholder="Description" {...register("description")} /> */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmiting}>Submit new Issue {isSubmiting&& <Spinner/>}</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
