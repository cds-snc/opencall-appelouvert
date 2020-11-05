export async function getMarkdown(markdownFile, updateState) {
    markdownFile = await fetch(markdownFile);
    markdownFile = await markdownFile.text();
    updateState(markdownFile);
}

export function getPageLink(locale, path) {
    return locale != "en" ? `/${locale}/#/${path}` : `/#/${path}`;
}