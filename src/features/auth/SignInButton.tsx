import { Button } from "@/components/ui/button";
import { signIn } from "@/auth/auth";
export const SignInButton = () => {

    return (
        <form>
          <Button 
          variant="secondary"
          formAction={async () => {
            "use server";
            await signIn()
          }}
          >
            Sign in
        </Button>
        </form>
    )
}