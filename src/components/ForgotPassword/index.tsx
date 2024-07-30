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
import { Input, Button } from "@/components/ui";

// Define your form schema using Zod


const formSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email address"),
});

const ForgotPassword = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient">
      <div className="bg-background p-5 rounded-lg shadow-2xl max-w-lg w-full items-center">
        <h2 className="mb-1 text-center text-xl">Forgot your Password?</h2>
        <span className="">Enter your email to receive a password reset email</span>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between mt-4 border-t pt-4 bg">
            <Link to={"/login"} className="text-primary hover:underline text-sm">Sign in with your exesting account</Link>
            <Button type="submit" variant="default">Send Reset Code</Button>
          </div>
      </form>
    </Form>
      </div>
    </div>
    
  );
};



export default ForgotPassword;
