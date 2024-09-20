// components/email-submit.tsx
//from components/email-submit.tsx how to state email in redux
"use client"
import Link from 'next/link';
import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from '../app/redux/features/email/emailSlice';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import { useToast } from "@/components/ui/use-toast"

export default function EmailSubmit() {
  // const [email, setEmail] = useState("")
  // const { toast } = useToast()
  const dispatch = useDispatch();
  const email = useSelector((state) => state.email.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your server
      console.log("Email submitted:", email)
      toast({
        title: "Email Submitted",
        description: `We've received your email: ${email}`,
      })
      setEmail("")
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
    }
  }

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange} 
          // onChange={(e) => setEmail(e.target.value)}
          className="flex-grow"
          required
        />
        <Link href="/payment">
        <Button type="submit" className="w-full sm:w-auto">
          Submit
        </Button>
      </Link>
      </div>
    </form>
  )
}