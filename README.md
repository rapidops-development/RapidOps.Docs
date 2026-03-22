# RapidOps Docs

This is the documentation website for RapidOps. This is the one stop area for all tutorials, how-tos, reference and explanations on the RapidOps platform.
Information is organised as an Obsidian knowledge base so that related items can be easily found. The Quartz project is used to convert the Obsidian document store into
a static webpage for hosting in Github pages.

## Adding Content

All content in the RapidOps Docs website is compiled from markdown and stored in the "content" folder. We recommend installing the Obsidian desktop client to manage the content of the website,
this can be downloaded from here: https://obsidian.md/download

Quartz supports all standard markdown syntax, as well as GitHub markdown and Obsidian markdown extensions.

Before adding content, please consult this guide to writing documentation from Divio: https://docs.divio.com/documentation-system/. The RapidOps Docs website uses the structure outlined by Divio to target content at different user levels. Ensure you know the purpose of the content you are writing, and who you are writing it for.

Be sure to make good use of the wikilinks capabilities of Obsidian to link your new content to the existing content of the Docs website.

## Running the Website Locally

It can be useful to run the website locally to see how changes will be reflected in the end webpage. To do this, simply execute the following command:

```bash
npm run serve
```

This will host the website on your development machine at: https://localhost:30000
