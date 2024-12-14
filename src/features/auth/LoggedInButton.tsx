import { SignInButton } from "./SignInButton"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { auth } from "@/auth/auth"

async function LoggedInButton() {

  const session = await auth()
  if(!session?.user) {
    return <SignInButton/>
  }

  return (
    <Button>
        <Avatar>
            <AvatarFallback>{session.user.name?.[0]}</AvatarFallback>
            {session.user.image ? 
            (<AvatarImage src={session.user.image} alt={session.user.name || ""}/>) 
            : null}
        </Avatar>
    </Button>
  )
}


export default LoggedInButton
