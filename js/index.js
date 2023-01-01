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
const DisplayCards = (parentElement, content) => {
  let newContent = content.map((element) => {
    const htmlContent = `
    
    <div class="card box" style="width: 100%;">
  <img src="${element.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h7 class="  card-title">$${element.price}</h7>
    <br>
    <h7 style="font-family: 'Unbounded', cursive" class="card-title">${element.title}</h7>
  </div>
</div>
    
    `;

    return htmlContent;
  });
  newContent = newContent.join("");
  parentElement.innerHTML = newContent;
};






function getRandomCourses(listOfCourses) {
  var randomCourses = [];
  while (randomCourses.length < 3) {
    var index = Math.floor(Math.random() * listOfCourses.length);
    var course = listOfCourses[index];
    if (!randomCourses.find( randomCourse =>  randomCourse.title ==course.title &&  randomCourse.price ==course.price)) {
      randomCourses.push(course);
    }
  }
  return randomCourses;
}


let randCourses  = document.getElementById("randCourses")
const content = getRandomCourses(courses)
window.addEventListener("DOMContentLoaded", ()=>{
 DisplayCards(randCourses, content)

})