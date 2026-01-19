import Link from "next/link"


const AuthButtons = () => {
  return (
    <div>
      <Link href="/SignIn">
        <button className="font-bold py-2 px-4 rounded hover:cursor-pointer">
          Sign In/Sign Up
        </button>
      </Link>
    </div>
  )
}

export default AuthButtons
