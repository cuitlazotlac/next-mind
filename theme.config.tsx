import React from "react";
import Image from "next/image";
import { DocsThemeConfig } from "nextra-theme-docs";
import logo from "./components/assets/images/logo.png"

const config: DocsThemeConfig = {
  logo: (
    <span style={{}}>
      <Image
        src={logo}
        alt="Next Mind Logo"
        width={133}
      />
    </span>
  ),
  project: {
    link: "https://github.com/cuitlazotlac/next-mind",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
