export class StringFromMarkdown {
  text: string;
  markdown: string;
  private constructor(plainText: string, markdownText: string) {
    this.text = plainText;
    this.markdown = markdownText;
  }

  static createStringFromMarkdown(markdownText: string) {
    const plainText = StringFromMarkdown.converter(markdownText);
    return new StringFromMarkdown(plainText, markdownText);
  }

  static converter(markdownText: string) {
    let plainText = markdownText;

    plainText = StringFromMarkdown.removeMarkdownLinks(plainText);
    plainText = StringFromMarkdown.removeMarkdownImages(plainText);
    plainText = StringFromMarkdown.removeBoldAndItalic(plainText);
    plainText = StringFromMarkdown.removeInlineCode(plainText);
    plainText = StringFromMarkdown.removeCodeBlocks(plainText);
    plainText = StringFromMarkdown.removeHeadings(plainText);
    plainText = StringFromMarkdown.removeHorizontalRules(plainText);
    plainText = StringFromMarkdown.removeBlockquotes(plainText);
    plainText = StringFromMarkdown.removeStrikethroughs(plainText);
    plainText = StringFromMarkdown.removeListMarkers(plainText);
    plainText = StringFromMarkdown.removeExtraNewlines(plainText);

    return plainText;
  }

  static removeMarkdownLinks(text: string) {
    return text.replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1');
  }

  static removeMarkdownImages(text: string) {
    return text.replace(/!\[([^\]]*)\]\([^\)]+\)/g, '');
  }

  static removeBoldAndItalic(text: string) {
    let formattedText = text.replace(/(\*\*|__)(.*?)\1/g, '$2'); // bold
    formattedText = text.replace(/(\*|_)(.*?)\1/g, '$2'); // italic
    return formattedText;
  }

  static removeInlineCode(text: string) {
    return text.replace(/`(.*?)`/g, '$1');
  }

  static removeCodeBlocks(text: string) {
    return text.replace(/```[\s\S]*?```/g, '');
  }

  static removeHeadings(text: string) {
    return text.replace(/^(#+)\s+(.*)/gm, '$2');
  }

  static removeHorizontalRules(text: string) {
    return text.replace(/^-{3,}/g, '');
  }

  static removeBlockquotes(text: string) {
    return text.replace(/^\s*>+\s?/gm, '');
  }

  static removeStrikethroughs(text: string) {
    return text.replace(/~~(.*?)~~/g, '$1');
  }

  static removeListMarkers(text: string) {
    let formattedText = text.replace(/^\s*[-+*]\s+/gm, ''); // unordered list
    formattedText = text.replace(/^\s*\d+\.\s+/gm, ''); // ordered list
    return formattedText;
  }

  static removeExtraNewlines(text: string) {
    return text.replace(/\n{2,}/g, '\n\n');
  }
}
