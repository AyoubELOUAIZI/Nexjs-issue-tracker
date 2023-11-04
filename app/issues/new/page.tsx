"use client";
import { TextField, Button, Callout } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    // watch,
    control,
    formState: { errors },
  } = useForm<IssueForm>();
  //this is just writing the data in the console but we need to send the data to the api.
  //that why we will use axios.
  const onSubmit: SubmitHandler<IssueForm> = async (data) => {
    try {
      console.log("the data form the form : ", data);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
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
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" >
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {/* using the register directly with the simpleMDE does not work that why we need the Controller */}
        {/* <SimpleMDE placeholder="Description" {...register("description")} /> */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <Button>Submit new Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
