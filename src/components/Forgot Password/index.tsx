import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input, Button } from "@/components/ui";

// Define your form schema using Zod
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = z.object({
  email: z
    .string()
    .regex(emailRegex, { message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="mb-6 text-center text-xl">Forgot your Password?</h2>
        <h6 className="mt-1 mb-0 opacity-8 text-center">
          Enter the email address below to recover it.
        </h6>
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
            <div className="flex items-center justify-between mt-6">
              <Link
                to="/login"
                className="text-primary hover:underline text-sm"
              >
                Sign in to your existing account
              </Link>
              <Button type="submit" variant="default">
                Send Reset Code
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ForgotPassword;
