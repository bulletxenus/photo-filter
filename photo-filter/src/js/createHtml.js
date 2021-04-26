export default function createHtml(tagName, className, parent, src, ...attributes) {
    const tag = document.createElement(tagName);
    className.split(', ').forEach(el => {
        tag.classList.add(el)
    });
    parent.append(tag);
    if (tag === 'a') tag.href = src;
    if (tag === 'img') tag.src = src;
    attributes.forEach(el => {
        const string = el.split(', ');
        tag.setAttribute(string[0], string[1]);
    });

    return tag;
}
