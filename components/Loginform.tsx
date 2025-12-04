import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground text-balance">
                  Login to your <span className="text-[#224FA2] font-bold">Cloud62</span> account
                </p>
              </div>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
                <div className="flex items-center">

                  <a
                    href="#"
                    className="ml-auto text-[#0000FF] text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </Field>

              <Field>
                <Button className="bg-[#224FA2] hover:bg-[#3A63B0]" type="submit">Login</Button>
              </Field>

              <FieldDescription className="text-center">
                Don&apos;t have an account? <a href="#" className="text-[#0000FF]">Sign up</a>
              </FieldDescription>
            </FieldGroup>
          </form>
          <div className="bg-muted relative hidden h-full md:block">
            <Image
              src="/placeholder.jpg"
              alt="Login background"
              width={500}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
