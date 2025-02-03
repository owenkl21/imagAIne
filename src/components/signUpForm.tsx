"use client";
import React, { useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { signup } from "@/app/actions/auth-actions";
import { toast } from "sonner";


const passwordValidationRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
;
// ✅ Define Zod schema
const formSchema = z
  .object({
    fullname: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long").regex(passwordValidationRegex, 'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'),
    confirmPassword: z.string().min(8, "Confirm Password must match Password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const [loading, setLoading] = useState(false);
  const toastId = useId();
  // ✅ Initialize `useForm` correctly
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // ✅ Correct `handleSubmit` function
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.loading('Signing up...', {id: toastId} );
    setLoading(true);
    console.log("Sign Up Data:", data);

    const formData = new FormData();
    formData.append('full_name', data.fullname)
    formData.append("email", data.email)
    formData.append("password", data.password)

    ;(await signup(formData)).success
    
    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your full name"  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="name@example.com" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="Password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input {...field} type="password" placeholder="Confirm password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader2 className='mr-2 h-4 w-4 animate-spin'/> : 'Sign Up'} 
        </Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
