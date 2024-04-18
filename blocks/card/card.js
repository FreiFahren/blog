export default function decorate(block) {
  // Find the <strong> element inside the specified <p> tag
  const strong = block.querySelector('.card div div:nth-child(2) p:nth-child(2) strong');

  // If the <strong> element is found, replace the <p> tag with an <h1> tag
  if (strong) {
    const h1 = document.createElement('h1');
    h1.textContent = strong.textContent;
    const parentP = strong.parentElement;

    parentP.parentNode.replaceChild(h1, parentP);
  }
}
