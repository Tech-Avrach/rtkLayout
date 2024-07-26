// import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
// import { Checkbox, Input, Label, Button } from "@/components/ui";
import {  Input, Button } from "@/components/ui";

// Define your form schema using Zod


const formSchema = z.object({
  email: z.string().email("Invalid email address").refine((value) => value !== "", {
    message: "Email is required",
    path: ["email"],
  }),
  password: z.string().refine((value) => value !== "", {
    message: "password is required",
    path: ["password"],
  }),
});

const Login = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="mb-6 text-center text-xl">Please sign in to your account below.</h2>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between mt-4">
            <Link to={""} className="text-primary hover:underline text-sm">Recover Password</Link>
            <Button type="submit" variant="default">Login to Dashboard</Button>
          </div>
      </form>
    </Form>
      </div>
    </div>
    
  );
};



export default Login;
