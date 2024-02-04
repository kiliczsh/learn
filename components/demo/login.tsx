"use client";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Separator } from "@/components/ui/separator";

export default function Login() {
    return (
        <div className="rounded-lg border w-full md:w-1/2">
            <div className="flex flex-col p-6 space-y-2">
                <Label>Login</Label>
                <Label className="text-sm text-muted-foreground">Please login to your account.</Label>
            </div>
            <div className="p-6 pt-0 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <Badge>Google</Badge>
                    <Badge>GitHub</Badge>
                </div>
                <div className="flex items-center">
                    <Separator className="flex-grow border-muted-foreground w-1/3" />
                    <Label className="text-muted-foreground pr-2 pl-2">or</Label>
                    <Separator className="flex-grow border-muted-foreground w-1/3" />
                </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
                <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" />
                </div>
                <div className="flex items-center">
                    <Button onClick={() => toast("Logged in succesfully",{
                        description: "You have been logged in",
                        action: {
                            label: "Undo",
                            onClick: () => toast("Undoing login")
                        },
                        cancel: {
                            label: "Dismiss",
                            onClick: () => toast("Dismissed")
                        }
                    })} className="w-full toaster">Login</Button>
                </div>
            </div>
        </div>
    );
}