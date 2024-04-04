export default function addH2LinksToSidebar(
  h2Elements: HTMLHeadingElement[],
  sidebar: HTMLElement | null
) {
  let count = 1;
  h2Elements.forEach((h2) => {
    sidebar?.insertAdjacentHTML(
      "beforeend",
      `<a href="#h2-${count}" class="sidebarLink">${h2.innerHTML}</a>`
    );
    count += 1;
  });
}
