import { auth } from "@/utils/auth-server";
import { redirect } from "next/navigation";
import { Flex } from "@chakra-ui/react";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoggedIn } = await auth();

  if (isLoggedIn) redirect("/dashboard");

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      {children}
    </Flex>
  );
}
