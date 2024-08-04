document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("#elements-table td div");

  elements.forEach((element) => {
    element.addEventListener("click", function () {
      const elementId = this.id;
      console.log(`Clicked element ID: ${elementId}`);
      displayElementProperties(elementId);
    });
  });
});

function displayElementProperties(elementId) {
  const elementData = properties[elementId];

  if (elementData) {
    console.log(`Displaying data for: ${elementId}`);

    const fullNameElement = document.getElementById("fullName");
    const atomicNoElement = document.getElementById("atomicNo");
    const positionElement = document.getElementById("position");
    const stateElement = document.getElementById("state");
    const boilingPtElement = document.getElementById("boilingPt");
    const meltingPtElement = document.getElementById("meltingPt");
    const atomicRadElement = document.getElementById("atomicRad");
    const urlElement = document.getElementById("link");

    if (
      fullNameElement &&
      atomicNoElement &&
      positionElement &&
      stateElement &&
      boilingPtElement &&
      meltingPtElement &&
      atomicRadElement
    ) {
      fullNameElement.textContent = elementData.fullName;
      atomicNoElement.textContent = elementData.atomicNumber;
      positionElement.textContent = elementData.position;
      stateElement.textContent = elementData.state;
      boilingPtElement.innerHTML = elementData.boilingPoint;
      meltingPtElement.innerHTML = elementData.meltingPoint;
      atomicRadElement.innerHTML = elementData.atomicRadius;
      urlElement.href = elementData.url;
    } else {
      console.error("One or more elements not found in the DOM");
    }
  } else {
    console.log(`No data found for: ${elementId}`);
  }
}

function handleSelection(event) {
  const selectedValue = event.target.value;
  const options = document.querySelectorAll("#elements-list option");
  let elementId = "";

  options.forEach((option) => {
    if (option.value === selectedValue) {
      elementId = option.getAttribute("data-id");
    }
  });
  displayElementProperties(elementId);
}