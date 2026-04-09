import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";
import "@/styles/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SINGAKBD",
    template: "%s – SINGAKBD",
  },
  openGraph: {
    title: "SINGAKBD Docs",
    description: "SINGAKBD documentation for each release of keyboards.",
  },
};

const navbar = (
  <Navbar
    logo={<span>SINGAKBD</span>}
    projectLink="https://github.com/amorino/singakbd"
    chatLink="https://discord.com/invite/53Z8QCha"
  />
);

const footer = (
  <Footer>
    <span>
      {new Date().getFullYear()}{" "}
      <a href="https://singakbd.com/" target="_blank" rel="noopener">
        SINGAKBD
      </a>
      .
    </span>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className={inter.className}>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/amorino/singakbd/tree/main/"
          sidebar={{ defaultMenuCollapseLevel: 2, toggleButton: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
