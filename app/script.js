const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  const splitText = label.innerHTML.split("");
  const addedTags = splitText.map(
    (char, i) =>
      `<span style="transition-delay: ${(i + 1) * 50}ms">${char}</span>`
  );
  const joinedTags = addedTags.join("");
  label.innerHTML = joinedTags;
});
