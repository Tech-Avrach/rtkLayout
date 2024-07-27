import React from "react";

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
import { Input, Button, Checkbox } from "@/components/ui";
import { Link, useNavigate } from "react-router-dom";
// Define your form schema using Zod
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

const formSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(passwordRegex, {
      message:
        "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
  keepMeLoggedIn: z.boolean().optional(),
});

const Login = () => {
  // 1. Define your form.
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      keepMeLoggedIn: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    navigate("/dashboard");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="mb-6 text-center text-xl">
          Please sign in to your account below.
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-4"></div>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mb-4"></div>
            <FormField
              control={form.control}
              name="keepMeLoggedIn"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div>
                      <Checkbox id="keepMeLoggedIn" />
                      <FormLabel htmlFor="keepMeLoggedIn" className="ml-2">
                        Keep me logged in
                      </FormLabel>
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between mt-6">
              <Link
                to="/forgot-password"
                className="text-primary hover:underline text-sm"
              >
                Recover Password
              </Link>
              <Button type="submit" variant="default">
                Login to Dashboard
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
