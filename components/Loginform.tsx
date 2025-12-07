"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/app/api/methods";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await loginUser({ email, password });

      // Handle backend response format
      const token = result?.token || result?.data?.token;

      if (!token) {
        console.error("Token not found in response");
        return;
      }

      // Save JWT token
      localStorage.setItem("token", token);

      // Redirect user
      router.push("/");            // NEXT.JS WAY ✔
      // OR window.location.href = "/" (works too)

    } catch (error) {
      console.error("LOGIN ERROR:", error);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleLogin}>
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your{" "}
                  <span className="text-[#224FA2] font-bold">Cloud62</span>{" "}
                  account
                </p>
              </div>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>

              <Field>
                <Button
                  className="bg-[#224FA2] hover:bg-[#3A63B0]"
                  type="submit"
                >
                  Login
                </Button>
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account?{" "}
                <a href="/signup" className="text-[#0000FF]">
                  Sign up
                </a>
              </FieldDescription>
            </FieldGroup>
          </form>

          <div className="bg-muted relative hidden md:flex items-center justify-center">
            <Image
              src="/placeholder.jpg"
              alt="Login background"
              width={500}
              height={500}
              className="object-cover h-full w-full"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
