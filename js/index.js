

// בדיקה אם זה הביקור הראשון
const isFirstVisit = !sessionStorage.getItem('hasVisited');

let t1 = gsap.timeline();

if (isFirstVisit) {
// יצירת סל ריק
  let basket = []
localStorage.setItem('basket', JSON.stringify(basket))
  // ביקור ראשון - כל האנימציות המקוריות
  sessionStorage.setItem('hasVisited', 'true');
  
  t1.from(".imsrk", {
    opacity: 0,
    xPercent: -100,
    delay: 0.5,
    duration: 1,
    ease: "power1.out",
    yoyo: true,
  });
  
  t1.from(
    ".dot",
    {
      opacity: 0,
      yPercent: 100,
      delay: 0.5,
      repeatDelay: 1,
      duration: 1,
      ease: "power1.out",
    },
    0.01
  );

  t1.to(".dot", {
    x: 20,
    duration: 1,
    ease: "power1.out",
  });

  t1.to(".dot", {
    x: -10,
    duration: 0.5,
    ease: "power1.out",
  });

  t1.to(".imsrk", {
    opacity: 0,
    xPercent: -100,
    duration: 1,
    ease: "power1.out",
    yoyo: true,
  });

  t1.to(
    ".dot",
    {
      opacity: 0,
      duration: 1,
      ease: "expo.out",
    },
    3
  );

  t1.to(
    ".cover",
    {
      xPercent: -100,
      duration: 1,
      ease: "power1.out",
    },
    3
  );

  t1.to(
    ".cover-2",
    {
      xPercent: -100,
      duration: 1,
      ease: "power1.out",
    },
    3.2
  );

  t1.to(
    ".cover-3",
    {
      xPercent: -100,
      duration: 1,
      ease: "power1.out",
    },
    3.4
  );

  t1.to(
    ".cover-4",
    {
      xPercent: -100,
      duration: 1,
      ease: "power1.out",
    },
    3.6
  );

  t1.from(
    ".imsrk2",
    {
      xPercent: -100,
      duration: 1,
      ease: "power1.out",
      opacity: 0,
    },
    3.8
  );

  t1.from(".cover-5", {
    yPercent: -100,
    duration: 1,
    ease: "power1.out",
    delay: 0.4,
  });

  t1.from(".logo", {
    xPercent: -100,
    opacity: 0,
    duration: 1,
    ease: "power1.out",
  });

} else {
  // ביקורים הבאים - דילוג על כל האנימציות הארוכות
  gsap.set([".cover", ".cover-2", ".cover-3", ".cover-4"], {xPercent: -100});
  gsap.set([".imsrk", ".dot"], {opacity: 0});
  gsap.set(".cover-5", {yPercent: 0});
  gsap.set(".imsrk2", {xPercent: 0, opacity: 1});
  gsap.set(".logo", {xPercent: 0, opacity: 1});
}

const body = document.querySelector("body");
const img = document.querySelector(".header-img");

//הגדרת מערך האלמנטים הזזים פלוס כיתוב של דף הבית
let element = [
  {
    title: "אנשים בחיים שלי",
    text: "אנשים קרובים שמלווים אותי במסע החיים – בן/בת זוג אוהב/ת, ילדים, חברים וקהילה חמה שמעניקים לי ביטחון, שמחה ותחושת שייכות אמיתית.",
    pic: "./pic/משפחה.png"
  },
  {
    title: "סגנון חיים ומגורים",
    text: "הבית שלי נראה ומרגיש בדיוק כמו שאני צריכה – בין אם זה ליד הים או בטבע, בדירה או בקהילה. סביבה שמעוררת השראה ומאפשרת לי לחיות בנוחות ובשלווה.",
    pic: "./pic/בית.png"
  },
  {
    title: "גוף ונפש",
    text: "שגרה בריאה ומאוזנת שנותנת מקום לגוף שלי להיות חזק ולנפש שלי לנוח. פחות סטרס, יותר שלווה, תחושת חיוניות וביטחון עצמי בכל יום מחדש.",
    pic: "./pic/גוף ונפש.png"
  },
  {
    title: "תחביבים",
    text: "זמן איכות עם עצמי דרך הדברים שאני אוהבת לעשות – כתיבה, נגינה, טיולים, למידה או נתינה לאחר. תחביבים שנותנים לי משמעות, הנאה והתחדשות.",
    pic: "./pic/תחביבים.png"
  },
  {
    title: "ידע וכישורים",
    text: "עולם של ידע ויכולות שפיתחתי עם השנים – שפות, טכנולוגיה, הבנה באנשים ובחיים. כלים שמקדמים אותי קדימה ונותנים לי תחושת מסוגלות וצמיחה.",
    pic: "./pic/ידע.png"
  }
];

let back = document.createElement('div')
back.id = "background"
let cover = document.getElementsByClassName('cover-5')[0]
cover.appendChild(back)

// יצירת הדיבים להכנסת האלמנטים
let pic = document.createElement('div')
pic.id = "picElem"
back.appendChild(pic)

let title = document.createElement('div')
title.id = "titleElem"
back.appendChild(title)

let text = document.createElement('div')
text.id = "textElem"
back.appendChild(text)

let helo = document.createElement('div')
helo.id = "helo"
cover.appendChild(helo)

let head = document.createElement('h1')
head.innerText = "העתיד מחכה שתזמיני אותו"
helo.appendChild(head)

let shead = document.createElement('h4')
shead.innerText = "לא צריך לחכות לו – אפשר לבחור אותו"
helo.appendChild(shead)

let sshead = document.createElement('h4')
sshead.innerText = "ברוכה הבאה ל־FuturaWish – המקום שבו חלומות פוגשים עתיד, והכל מתחיל בלחיצה."
helo.appendChild(sshead)

let currentIndex = 0
let timeAutoNext = 8000 // כל כמה מילישניות התמונה תתחלף (כאן: 8 שניות)

//  /כפתןר ההזמנה/
let start = document.createElement('button')
start.id = "start"
start.innerText = "התחל להזמין"
start.addEventListener('click', function () {
  window.location.href = './html/product.html';
});

helo.appendChild(start)

function updateBackground() {
  // הסתרה עם אנימציית עמעום
  pic.style.transition = "opacity 0.8s ease";
  title.style.transition = "opacity 0.8s ease";
  text.style.transition = "opacity 0.8s ease";

  pic.style.opacity = 0;
  title.style.opacity = 0;
  text.style.opacity = 0;

  setTimeout(() => {
    // עדכון התוכן
    pic.style.backgroundImage = `url("${element[currentIndex].pic}")`;
    title.innerText = element[currentIndex].title;
    text.innerText = element[currentIndex].text;

    pic.style.opacity = 1;
    title.style.opacity = 1;
    text.style.opacity = 1;

    // עדכון האינדקס
    currentIndex = (currentIndex + 1) % element.length;
  }, 500); // הזמן שלוקח להיעלם לפני שמחליפים
}

pic.style.opacity = 1;
title.style.opacity = 1;
text.style.opacity = 1;

pic.style.backgroundImage = `url("${element[currentIndex].pic}")`
title.innerText = element[currentIndex].title;
text.innerText = element[currentIndex].text;

// עדכון אינדקס לפעם הבאה
currentIndex = (currentIndex + 1) % element.length;

if (isFirstVisit) {
  // ביקור ראשון - אנימציות התוכן בטיימינג המקורי  
  t1.from(
    "#picElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    6
  );

  t1.from(
    "#titleElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    6.2
  );
  
  t1.from(
    "#helo",
    {
      xPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    },
    6.2
  );
  
  t1.from(
    "#textElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 1.1,
      ease: "power1.out",
    },
    6.2
  );

  // מחכים ש־GSAP יסיים את כל האנימציות (10 שניות כמו במקור)
  setTimeout(() => {
    updateBackground(); // מעבר ראשון עם אנימציה
    setInterval(updateBackground, timeAutoNext); // ממשיכים כל 8 שניות
  }, 10000);
  
} else {
  // ביקורים הבאים - אנימציות מהירות ישר לתוכן
  t1.from(".logo", {
    xPercent: -100,
    opacity: 0,
    duration: 0.8,
    ease: "power1.out",
  });
  
  t1.from(
    "#helo",
    {
      xPercent: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    },
    0.2
  );
  
  // המערך נכנס כמעט ביחד עם ה-HELO
  t1.from(
    "#picElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    },
    0.3
  );

  t1.from(
    "#titleElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    },
    0.3
  );
  
  t1.from(
    "#textElem",
    {
      xPercent: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power1.out",
    },
    0.3
  );

  // התחלה מהירה של הרוטציה
  setTimeout(() => {
    updateBackground();
    setInterval(updateBackground, timeAutoNext);
  }, 2500);
}



