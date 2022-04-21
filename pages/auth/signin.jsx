import { getProviders, signIn, getSession } from "next-auth/react"
import Head from "next/head";
import Link from 'next/link'
import { GithubIcon } from "../../components/icons/GithubIcon";
import { GoogleIcon } from "../../components/icons/GoogleIcon";

export default function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>{`Sign In | ${process.env.NEXT_PUBLIC_COMPANY_NAME}`}</title>
        <meta name="description" content="E-commerce general store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen flex w-full items-center justify-center bg-gray-50">
        <div className="w-2/12 min-w-[330px] rounded border p-4 bg-white shadow-md">

          <div className="flex flex-wrap space-y-8 w-full items-center justify-center pb-8">
            <Link href='/' passHref>
              <div className="full-rounded bg-primary-background border border-secondary-background p-4 rounded-full">
                <img
                  src={'/common/logo.svg'}
                  className="rounded-full h-48 w-full cursor-pointer"
                  alt="Return Home"
                />
             </div>  
            </Link>
            <h1 className="text-2xl">{process.env.NEXT_PUBLIC_COMPANY_NAME}</h1>
            <p>{process.env.NEXT_PUBLIC_COMPANY_SLOGAN}</p>
          </div>

          <div className="flex w-full flex-wrap justify-center p-2 space-y-4">
              <button
                className="inline-flex items-center justify-center space-x-2 w-full border rounded-full p-2 text-lg border-black text-black hover:bg-black hover:text-white"
                onClick={() => signIn("github")}>
                <p>Sign in with Github</p>
                <GithubIcon className="h-5 w-5 hover:cursor-pointer" />
              </button>

              <button
                className="inline-flex items-center justify-center space-x-2 w-full border rounded-full p-2 text-lg border-black text-black hover:bg-black hover:text-white"
                onClick={() => signIn("google")}>
                <p>Sign in with Google</p>
                <GoogleIcon className="h-5 w-5 hover:cursor-pointer" />
              </button>

             <div className="flex items-center w-full">
                <div className="h-px flex-1 bg-primary-link"></div>
                <p className="pl-2 pr-2">or</p>
                <div className="h-px flex-1 bg-primary-link"></div>
              </div>

              <button
                className="w-full border rounded-full p-2 text-lg border-primary-link text-primary-link hover:bg-primary-link hover:text-white"
                onClick={() => signIn('credentials')}>
                Demo Account
              </button>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps({ req, res}) {
  const session = await getSession({ req });
  const providers = await getProviders()

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: { providers },
  };
}