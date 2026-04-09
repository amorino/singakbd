# SINGAKBD Wiki

A community-maintained reference for [SINGAKBD](https://singakbd.com/) custom keyboards.

Browse the wiki at **[singakbd.vercel.app](https://singakbd.vercel.app)** | Join the [Discord](https://discord.com/invite/53Z8QCha)

## About

This wiki documents specifications, PCB layouts, changelogs, color options, and firmware/plate file downloads for every SINGAKBD keyboard release:

**SINGA** | **Jaguar** | **Kohaku** | **Neko** | **Ocelot** | **Unikorn** | **Stinga**

Information is gathered from [Geekhack](https://geekhack.org/index.php), [singakbd.com](https://singakbd.com/), and the [SINGAKBD Discord](https://discord.com/invite/53Z8QCha).

## How to Contribute

Many pages still have **WIP** placeholders — every bit of info helps.

### What you can help with

- Fill in missing specifications, dimensions, or typing angles
- Add colors, weight materials, or version details
- Correct inaccuracies in existing pages
- Add firmware, plate file, or VIA JSON download links
- Improve general information descriptions
- Add new keyboard releases

### Quick edits via GitHub

No dev setup needed. Just:

1. Find the file you want to edit in [`content/releases/`](https://github.com/amorino/singakbd/tree/main/content/releases)
2. Click the pencil icon to edit it directly on GitHub
3. Submit a pull request with your changes

The site auto-deploys from `main` via Vercel once your PR is merged.

### Page structure

Every keyboard page follows this template:

```mdx
---
description: "Keyboard Name — form factor and mount type by SINGAKBD. Specs, layouts, and colors."
---

import { DownloadIcon } from "@radix-ui/react-icons";
import { Cards, Callout, Tabs } from "nextra/components";

# Keyboard Name

<Callout type={"warning"}>This page is a work in progress.</Callout>

## General Information

Description of the keyboard.

## Specifications

| Spec               | Details      |
| ------------------ | ------------ |
| **Form factor**    | 65%          |
| **Mounting Style** | Gasket mount |
| **Typing Angle**   | 8°           |
| **Dimensions**     | WIP          |
| **Front height**   | 19mm         |

## Layout

Images of PCB layouts. Use Tabs when multiple versions exist:

<Tabs items={["R1", "R2"]}>
  <Tabs.Tab>
    ![Keyboard R1 Layout](/KeyboardR1_Solder.png)
  </Tabs.Tab>
  <Tabs.Tab>
    ![Keyboard R2 Layout](/KeyboardR2_Solder.png)
  </Tabs.Tab>
</Tabs>

## Changelog

### R1 (Year)

#### Features

- Feature details

#### Colors

- Color list

## Downloads

<Cards>
  <Cards.Card
    icon={<DownloadIcon />}
    title="Plate files"
    href="https://dropbox-link"
  />
</Cards>
```

### Formatting reference

| What | How |
| --- | --- |
| Specs table | Standard markdown table with bold labels in the first column |
| Multi-version layouts | `<Tabs items={["R1", "R2"]}>` with `<Tabs.Tab>` children |
| Download links | `<Cards.Card>` with `<DownloadIcon />` icon and Dropbox/VIA href |
| Notices | `<Callout type={"warning"}>Text</Callout>` |
| Images | Place `.png` in `/public/`, reference as `![Alt](/Filename.png)` |
| Image naming | PascalCase: `KohakuR2_Solder.png`, `OcelotR1.png` |
| Content files | Lowercase: `kohaku.mdx`, `stinga.mdx` |

### Adding a new keyboard

1. Create `content/releases/keyboard-name.mdx` following the template above
2. Add an entry to `content/releases/_meta.js`:
   ```js
   export default {
     // ...existing entries
     "keyboard-name": "Keyboard Name",
   };
   ```
3. Add a card to `content/index.mdx`:
   ```mdx
   <Cards.Card title="Keyboard Name" href="/releases/keyboard-name" />
   ```

## Development Setup

Requires [Bun](https://bun.sh/).

```bash
bun install      # Install dependencies
bun run dev      # Start dev server at localhost:3000
bun run lint     # Check formatting and linting (Biome)
bun run format   # Auto-fix formatting
```

[Husky](https://typicode.github.io/husky/) pre-commit hooks run Biome checks automatically before each commit.

## Community & Resources

- [SINGAKBD Discord](https://discord.com/invite/53Z8QCha)
- [singakbd.com](https://singakbd.com/)
- [Geekhack](https://geekhack.org/index.php)
- [Compatible PCB List (Notion)](https://quick-seeder-8b6.notion.site/SINGAKBD-Wiki-2897c6dbd9df4365a496a237dd1a01da)

## Tech Stack

[Next.js](https://nextjs.org/) + [Nextra 4](https://nextra.site/) | [Tailwind CSS](https://tailwindcss.com/) | [Vercel](https://vercel.com/) | [Bun](https://bun.sh/) | [Biome](https://biomejs.dev/)
