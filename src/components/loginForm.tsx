
"use client";

import React, {useState, useId} from "react";
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
import {toast} from "sonner";
import { Loader2 } from "lucide-react";
import { login } from "@/app/actions/auth-actions";
import { redirect } from "next/navigation";
// ✅ Define Zod schema
const formSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
  })

const LoginForm = () => {

  const [loading, setLoading] = useState(false);
 const toastId = useId();
  const form = useForm({
     resolver: zodResolver(formSchema),
     defaultValues: {
       email: "",
       password: "",

     },
   });
 
   // ✅ Correct `handleSubmit` function
   const onSubmit = async (data: z.infer<typeof formSchema>) => {
    toast.loading('Signing up...', {id: toastId} );
    setLoading(true);
    console.log("Sign Up Data:", data);

    const formData = new FormData();
  
    formData.append("email", data.email)
    formData.append("password", data.password)

    const {success,error} = await login(formData);
    if (!success) {
      form.reset();
      toast.error(error, {id: toastId});
      setLoading(false);
    }else{
      form.reset();
      toast.success('logged in successfully!', {id: toastId});
      setLoading(false);
      redirect("/dashboard");
      
    }
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
         <Button type="submit" disabled={loading} className="w-full">
           {loading ? <Loader2 className="h-4 w-4 animate-spin"/> : "Login"}
         </Button>
       </form>
       
     </Form>
   );
 };

export default LoginForm
