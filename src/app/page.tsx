import { Suspense } from "react";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ModeToggle";

export default function Home() {
    return (
        <div>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
                <Suspense>
                    <Show when="signed-out">
                        <SignInButton mode="modal">
                            <Button>Sign In</Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button variant={"secondary"}>Sign Up</Button>
                        </SignUpButton>
                    </Show>
                    <Show when="signed-in">
                        <UserButton />
                    </Show>
                </Suspense>
                <ModeToggle />
            </header>
        </div>
    );
}
