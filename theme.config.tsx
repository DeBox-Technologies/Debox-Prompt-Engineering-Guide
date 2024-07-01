import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'
import { Pre } from './components/pre'

const config: DocsThemeConfig = {
  // Add this line to set the primary color
  primaryHue: 170, // This is approximately the hue of #19A890

  logo: (
    <>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Baobab Prompt Engineering Guide
      </span>
    </>
  ),
  i18n: [
    { locale: 'en', text: 'English' },
    // { locale: 'zh', text: '中文' },
    // { locale: 'jp', text: '日本語'},
    // { locale: 'pt', text: 'Português' },
    // { locale: 'it', text: 'Italian' },
    // { locale: 'tr', text: 'Türkçe' },
    // { locale: 'es', text: 'Español' },
    // { locale: 'fr', text: 'Français' },
    // { locale: 'kr', text: '한국어' },
    // { locale: `ca`, text: `Català` },
    // { locale: 'fi', text: 'Finnish' },
    // { locale: 'ru', text: 'Русский' },
    // { locale: 'de', text: 'Deutsch' },
    // { locale: 'ar', text: 'العربية' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
    <>
      <title>{title ? title + ' | Baobab Prompt Engineering Guide': 'Baobab Prompt Engineering Guide'} </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Prompt Engineering Guide" />
      <meta property="og:description" content="A Comprehensive Overview of Prompt Engineering" />
      <meta
          name="og:title"
          content={title ? title + ' | Baobab Prompt Engineering Guide' : 'Baobab Prompt Engineering Guide'}
        />
      <link rel="icon" href="/144-favicon.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/144-favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
    </>
  )},
  // project: {
  //   link: 'https://github.com/dair-ai/Prompt-Engineering-Guide',
  // },
  // chat: {
  //   link: 'https://discord.gg/FUyz9vPAwf',
  // },
  // docsRepositoryBase: 'https://github.com/dair-ai/Prompt-Engineering-Guide/tree/main/',
  // footer: {
  //   text: 'Copyright © 2024 DAIR.AI',
  // },
  // search: {
  //   placeholder: 'Search...',
  // },
  components: {
    pre: Pre,
  },
}

export default config
