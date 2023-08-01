/**
 * Transforms a multiline template literal string to a single line.
 *
 * @param {TemplateStringsArray} template
 * The multiline template literal string.
 *
 * @returns {string} The single-line string.
 */
export const tl = (template: TemplateStringsArray): string =>
  `${template.raw[0]}`.replace(/\s+/g, ` `).trim()
