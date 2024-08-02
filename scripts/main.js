document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("#maintable td div");

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

    const titleElement = document.getElementById("title-element");
    const atomicNoElement = document.getElementById("atomicNo");
    const positionElement = document.getElementById("position");
    const stateElement = document.getElementById("state");
    const boilingPtElement = document.getElementById("boilingPt");
    const meltingPtElement = document.getElementById("meltingPt");
    const atomicRadElement = document.getElementById("atomicRad");
    const link = document.getElementById("myLink");

    if (
      titleElement &&
      atomicNoElement &&
      positionElement &&
      stateElement &&
      boilingPtElement &&
      meltingPtElement &&
      atomicRadElement
    ) {
      titleElement.textContent = elementData.fullName;
      atomicNoElement.textContent = elementData.atomicNumber;
      positionElement.textContent = elementData.position;
      stateElement.textContent = elementData.state;
      boilingPtElement.innerHTML = elementData.boilingPoint;
      meltingPtElement.innerHTML = elementData.meltingPoint;
      atomicRadElement.innerHTML = elementData.atomicRadius;
      link.href = elementData.link;
    } else {
      console.error("One or more elements not found in the DOM");
    }
  } else {
    console.log(`No data found for: ${elementId}`);
  }
}

function nxtpage() {
  atag.href = "https://www.w3schools.com/js/js_events.asp";
}
