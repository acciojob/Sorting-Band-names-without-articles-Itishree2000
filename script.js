//your code here
function removeArticles(bandName) {
    return bandName.replace(/^(a |an |the )/i, "").trim();
  }

  // Sort the band names without articles
  bandNames.sort((a, b) => {
    const bandNameA = removeArticles(a);
    const bandNameB = removeArticles(b);
    return bandNameA.localeCompare(bandNameB);
  });

  // Get the ul element with id 'bands'
  const bandList = document.getElementById("bands");

  // Create and append list items for each band name
  bandNames.forEach((bandName) => {
    const li = document.createElement("li");
    li.textContent = bandName;
    bandList.appendChild(li);
  });
});
