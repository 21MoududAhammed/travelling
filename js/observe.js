const displayContainer = document.getElementById("section-heading-display");
const displayDateContainer = document.getElementById('section-date-display');



const targetElementOne = document.getElementById("item-one-heading");

// observer one
const observerOne = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { top } = entry.boundingClientRect;
      const viewportTop =
        window.innerHeight || document.documentElement.clientHeight;
      if (top <= 200 && top >= -entry.boundingClientRect.height) {
        const content = targetElementOne.innerText;
        displayContainer.innerText = '';
        displayContainer.innerText = content;
      }
    });
  },
  { rootMargin: `-${50}px 0px 0px 0px`, threshold: [1.0] }
);

observerOne.observe(targetElementOne);

// observer 2

const targetElementTwo = document.getElementById("item-two-heading");
const itemTwoDate = document.getElementById('item-two-date');

const observerTwo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const { top } = entry.boundingClientRect;
      const viewportTop =
        window.innerHeight || document.documentElement.clientHeight;
      if (top <= 200 && top >= -entry.boundingClientRect.height) {
        console.log('heading-2')
        const content = targetElementTwo.innerText;
        const dateInfo = itemTwoDate.innerText;
        displayContainer.innerText = '';
        displayDateContainer.innerText = '';
        displayContainer.innerText = content;
        displayDateContainer.innerText = itemTwoDate.innerText;
      }
    });
  },
  { rootMargin: `-${50}px 0px 0px 0px`, threshold: [1.0] }
);

observerTwo.observe(targetElementTwo);






// const targetElement = document.getElementById("simple-list-item-3");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       const { top } = entry.boundingClientRect;
//       const viewportTop =
//         window.innerHeight || document.documentElement.clientHeight;
//       if (top <= 200 && top >= -entry.boundingClientRect.height) {
//         console.log("Element is at the top of the display.");
//         targetElement.style.backgroundColor = "lightgreen"; // Change color when at the top
//       } else {
//         targetElement.style.backgroundColor = "lightcoral"; // Revert color when not at the top
//       }
//     });
//   },
//   { rootMargin: `-${50}px 0px 0px 0px`, threshold: [1.0] }
// );

// observer.observe(targetElement);
