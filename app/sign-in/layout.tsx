export const dynamicLayout = false; // Custom property to bypass layout
export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Custom layout for the /sign-in route
  return <div className="bg-red-500">{children}</div>;
}
