import LoggedInButton from "../auth/LoggedInButton";
import { SignInButton } from "../auth/SignInButton";

export async function Header() {
  return (
    <div className="flex items-center gap-4">
        <h1 className="font-bold text-lg flex-1">get-testimonials.com</h1>
        <SignInButton/>
        <LoggedInButton/>
    </div>
  )
}
