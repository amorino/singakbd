import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – SINGAKBD",
      };
    }
  },
  logo: <span>SINGAKBD</span>,
  project: {
    link: "https://github.com/amorino/singakbd",
  },
  chat: {
    link: "https://discord.com/invite/53Z8QCha",
  },
  // eslint-disable-next-line unicorn/prevent-abbreviations
  docsRepositoryBase: "https://github.com/amorino/singakbd/tree/main/",
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()}{" "}
        <a href="https://singakbd.com/" target="_blank">
          SINGAKBD
        </a>
        .
      </span>
    ),
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="SINGAKBD Docs" />
      <meta
        property="og:description"
        content="SINGAKBD documentation for each release of keyboards."
      />
    </>
  ),
  primaryHue: {
    light: 270,
    dark: 303,
  },
};

export default config;
