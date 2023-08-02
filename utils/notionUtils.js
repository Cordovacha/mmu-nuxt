export const extractTextWithAnnotation = (richText) => {
  if (richText.length === 0) {
    return "<p></p>";
  }

  const toString = richText.map((elem) => {
    let finalText = elem.plain_text;
    if (elem.annotations.bold) {
      finalText = `<strong>${finalText}</strong>`;
    }
    if (elem.annotations.italic) {
      finalText = `<em>${finalText}</em>`;
    }
    if (elem.annotations.underline) {
      finalText = `<span style="text-decoration: underline;">${finalText}</span>`;
    }
    if (elem.annotations.strikethrough) {
      finalText = `<span style="text-decoration: line-through;">${finalText}</span>`;
    }
    return finalText;
  });

  return toString.join("").toString();
};
export const extractText = (content) => {
  switch (content.type) {
    case "heading_1":
      return content.heading_1.rich_text[0].plain_text;
    case "heading_2":
      return content.heading_2.rich_text[0].plain_text;
    case "heading_3":
      return content.heading_3.rich_text[0].plain_text;
    case "paragraph":
      return extractTextWithAnnotation(content.paragraph.rich_text);
    default:
      return "problems with format";
  }
};
