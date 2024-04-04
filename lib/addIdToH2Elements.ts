export default function addIdToH2Elements(h2Elements: HTMLHeadingElement[]) {
  let count = 1;
  h2Elements.forEach((h2) => {
    h2.id = `h2-${count}`;
    count += 1;
  });
}
