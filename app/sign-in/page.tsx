import { SignIn } from "@clerk/nextjs";
export const metadata = {
  title: "Sign In",
};

export const dynamicLayout = false;
export default function Page() {
  return <SignIn />;
}
