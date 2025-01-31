
"use client";

import React from "react";
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

// ✅ Define Zod schema
const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })

const LoginForm = () => {
  const form = useForm({
     resolver: zodResolver(formSchema),
     defaultValues: {
       email: "",
       password: "",

     },
   });
 
   // ✅ Correct `handleSubmit` function
   const onSubmit = async (data: any) => {
     console.log("Sign Up Data:", data);
   };
 
   return (
     <Form {...form}>
       <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
        
 
         {/* Email */}
         <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
             <FormItem>
               <FormLabel>Email</FormLabel>
               <FormControl>
                 <Input {...field} type="email" placeholder="name@example.com" className={`border ${form.formState.errors.email ? "border-red-500" : "border-gray-300"} focus:ring-0`}/>
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
                 <Input {...field} type="password" placeholder="Password" className={`border ${form.formState.errors.password ? "border-red-500" : "border-gray-300"} focus:ring-0 `}/>
               </FormControl>
               <FormMessage />
             </FormItem>
           )}
         />
 
       
 
         {/* Submit Button */}
         <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
           {form.formState.isSubmitting ? "Logging In..." : "Login"}
         </Button>
       </form>
     </Form>
   );
 };

export default LoginForm
