const courseLib = document.getElementById("courseList");
const filter = document.getElementById("filter");
const budgetRange = document.querySelector('input[type="range"]');
const displayRange = document.getElementById("displayRange");
displayRange.innerHTML = "$0 - $" + budgetRange.value;

const homePage = document.getElementById("home")
const coursesPage = document.getElementById("coursesbtn")
const aboutPage = document.getElementById("about")

homePage.addEventListener("click", ()=>{
  window.location.href = "../index.html"
  console.log("hi")
})
coursesPage.addEventListener("click", ()=>{
  window.location.href = "../courses.html"
})
aboutPage.addEventListener("click", ()=>{
  window.location.href = "../about.html"
})

let courses = [
  {
    title: "Intro to JavaScript",
    img: "../img/courses/js1.png",
    category: "js",
    price:64
  },
  {
    title: "JavaScript Fundamentals",
    img: "../img/courses/js2.png",
    category: "js",
    price:80
  },
  {
    title: "Intro to css",
    img: "../img/courses/css.jpg",
    category: "css",
    price:54
  },
  {
    title: "Intro to html",
    img: "../img/courses/html1.jpeg",
    category: "html",
    price:34
  },
  {
    title: "Intro to php",
    img: "../img/courses/php2.jpg",
    category: "php",
    price:74
  },
  {
    title: "php oop",
    img: "../img/courses/php.jpg",
    category: "php",
    price:4
  },
  {
    title: "css tricks",
    img: "../img/courses/css2.jpg",
    category: "css",
    price:0
  },
  {
    title: "node js ",
    img: "../img/courses/html1.jpeg",
    category: "js",
    price:44
  },
  {
    title: "laravel",
    img: "../img/courses/laravel.png",
    category: "php",
    price:69
  },
];

window.addEventListener("DOMContentLoaded", () => {
  DisplayCards(courseLib, courses);
});

const DisplayCards = (parentElement, content) => {
  let newContent = content.map((element) => {
    const htmlContent = `
    
    <div class="card box" style="width: 100%;" >
  <img src="${element.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h7 class="card-title">$${element.price}</h7>
    <br>
    <h7 class="card-title">${element.title}</h7>
  </div>
</div>
    
    `;

    return htmlContent;
  });
  newContent = newContent.join("");
  parentElement.innerHTML = newContent;
};

budgetRange.addEventListener("input", () => {
  displayRange.innerHTML = "0 - " + budgetRange.value;

  const budgetCourses = courses.filter((course) => {
    return course.price < budgetRange.value;
  });
  DisplayCards(courseLib, budgetCourses);
});

const category = document.getElementById("category");
category.addEventListener("input", () => {
  if (category.value != "all") {
    const catCourses = courses.filter((course) => {
      return course.category == category.value;
    });
    DisplayCards(courseLib, catCourses);
  } else {
    DisplayCards(courseLib, courses);
  }
});
function isSubstring(string, substring) {
  return string.toLowerCase().includes(substring.toLowerCase());
}


const search = document.getElementById("search");
search.addEventListener("input", () => {
    const filCourses = courses.filter((course) => {
   if (isSubstring(course.title, search.value)) {
   return course 
   } 
    });
    DisplayCards(courseLib, filCourses);
});