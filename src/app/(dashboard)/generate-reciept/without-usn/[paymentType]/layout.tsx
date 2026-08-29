import WithoutUSNLayout from "@/components/layouts/WithoutUSNLayout";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function GenerateRecieptRootLayout(props: {
  children: React.ReactNode;
}) {
  return <WithoutUSNLayout>{props?.children}</WithoutUSNLayout>;
}
