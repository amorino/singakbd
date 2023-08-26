export default {
  logo: <span>SINGAKBD</span>,
  project: {
    link: "https://github.com/amorino/singakbd",
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
    defaultMenuCollapseLevel: 1,
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
};
