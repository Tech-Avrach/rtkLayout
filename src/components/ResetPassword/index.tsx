import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams, Link } from "react-router-dom";
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
const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, { message: "Password must contain a minimum of 8 characters" })
      .regex(/(?=.*?[A-Z])/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/(?=.*?[a-z])/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/(?=.*?[0-9])/, {
        message: "Password must contain at least one digit",
      })
      .regex(/(?=.*?[#?!@$%^&*-])/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Confirm password doesn't match",
  });

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <div className="flex items-center justify-center min-h-screen bg-login-gradient">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="mb-6 text-center text-xl">Reset your password</h2>
        <h6 className="mt-1 mb-0 opacity-8 text-center">
          Enter the new and confirm password to reset it.
        </h6>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="New password here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm password here..."
                      {...field}
                    />
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
                {loading ? "Loading..." : "Reset Password"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
