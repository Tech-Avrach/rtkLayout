// import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { Checkbox, Input, Button } from "@/components/ui";

// Define your form schema using Zod

const formSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email address"),
  password: z.string().nonempty("Password is required"),
  remeberMe: z.boolean().default(false).optional(),
});

const Login = () => {

  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remeberMe: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    navigate('/dashboard')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient w-full">
      <div className="bg-background p-5 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="mb-5 text-center text-xl">Please sign in to your account below.</h2>
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
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="remeberMe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-1 space-y-0 pt-3">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                    Keep me logged in
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
              
        <div className="flex items-center justify-between mt-4 border-t pt-4 bg">
            <Link to={"/forgot-password"} className="text-primary hover:underline text-sm">Recover Password</Link>
            <Button type="submit" variant="default">Login to Dashboard</Button>
          </div>
      </form>
    </Form>
      </div>
    </div>
    
  );
};



export default Login;
