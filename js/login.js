// פונקציה ליצירת טופס הרשמה
function create_log_in() {
    event.preventDefault()
    // מנקה את הדף
    document.getElementById('main').innerHTML = '';

    //יצירת טופס
    let f = document.createElement('form')
    let main = document.getElementById('main')
    main.appendChild(f)

    let Fname = document.createElement('input')
    Fname.placeholder = 'שם פרטי'
    Fname.type = 'text';
    f.appendChild(Fname)
    let m1 = document.createElement('h4')
    m1.innerText = "זהו שדה חובה"
    f.appendChild(m1)

    let Lname = document.createElement('input')
    Lname.type = 'text';
    Lname.placeholder = 'שם משפחה'
    f.appendChild(Lname)
    let m2 = document.createElement('h4')
    m2.innerText = "זהו שדה חובה"
    f.appendChild(m2)

    let Email = document.createElement('input')
    Email.type = 'email'
    Email.placeholder = 'כתובת מייל'
    f.appendChild(Email)
    let m3 = document.createElement('h4')
    m3.innerText = "זהו שדה חובה"
    f.appendChild(m3)

    let code = document.createElement('input')
    code.placeholder = 'הכנסי סיסמה'
    code.type = 'password'
    f.appendChild(code)
    let m4 = document.createElement('h4')
    m4.innerText = "זהו שדה חובה"
    f.appendChild(m4)

    let m5 = document.createElement('h4')
    m5.innerText = "משתמש קיים"
    f.appendChild(m5)

    let ok = document.createElement('button')
    ok.innerText = "אישור"
    ok.addEventListener('click', log_in)
    f.appendChild(ok)
}
//בדיקות
function log_in() {
    event.preventDefault()
    let index
    names = document.getElementsByTagName('input')
    let mes = document.getElementsByTagName('h4')
    let go = true
    // מוריד את האזהרות אם קיימות
    mes[0].style.display = 'none'
    mes[1].style.display = 'none'
    mes[2].style.display = 'none'
    mes[3].style.display = 'none'
    // אם שם פרטי ריק
    if (names[0].value == '') {
        mes[0].style.display = 'block'
        go = false
    }
    // אם שם משפחה ריק
    if (names[1].value == '') {
        mes[1].style.display = 'block'
        go = false
    }
    // אם מייל ריק
    em = document.getElementsByTagName('input')[2]
    if (em.value == '') {
        mes[2].style.display = 'block'
        go = false
    }
    // אם סיסמא ריק
    co = document.getElementsByTagName('input')[3]
    if (co.value == '') {
        mes[3].style.display = 'block'
        go = false
    }
    // אם הכל טוב
    if (go) {

        let inputs = document.getElementsByTagName('input')
        // יצירת אוביקט
        let obj = {
            FirstName: names[0].value,
            LastName: names[1].value,
            Email: em.value,
            code: co.value
        }
        // מקבלים מהLOCAL
        allPepole = localStorage.getItem('users')
        // אם ריק יוצרים מערך אחרת ממירים
        if (allPepole == null)
            allPepole = []
        else
            allPepole = JSON.parse(allPepole)
        // בדיקה אם קיים משתמש כזה
        let good = true
        // אם המערך ריק - אז לא קיים משתמש כזה
        if (allPepole == null) {
            let good = true

        }
        // אחרת עוברים על כל המערך ובודקים
        else {
            for (index = 0; index < allPepole.length; index++) {
                if (allPepole[index].Email == em.value) {
                    good = false
                    break
                }
            }
        }
        // אם לא קיים מוסיפים חדש
        if (good) {
            allPepole.push(obj)
            localStorage.setItem('users', JSON.stringify(allPepole))
            sessionStorage.setItem('userName', obj.FirstName)
             window.history.back();
        }
        // אם קיים מוסיפים כפתור מעבר לכניסה
        else {
            let mes = document.getElementsByTagName('h4')[4]
            mes.classList.add('show')
            if (!document.getElementById('toSignUp')) {
                let b1 = document.createElement('button')
                b1.textContent = "מעבר לכניסה"
                b1.id = "toSignUp"
                b1.addEventListener('click', create_entry)
                main.appendChild(b1)
            }

        }
    }
}
// יצירת טופס כניסה
function create_entry() {
    event.preventDefault()
    let index
    // לרוקן את המסמך
    document.getElementById('main').innerHTML = ''

    //יצירת טופס
    let f = document.createElement('form')
    let main = document.getElementById('main')
    main.appendChild(f)

    let Email = document.createElement('input')
    Email.type = 'email'
    Email.placeholder = 'כתובת מייל'
    f.appendChild(Email)
    let m1 = document.createElement('h4')
    m1.innerText = "זהו שדה חובה"
    f.appendChild(m1)



    let code = document.createElement('input')
    code.placeholder = 'הכנסי סיסמה'
    code.type = 'password'
    f.appendChild(code)
    let m4 = document.createElement('h4')
    m4.innerText = "זהו שדה חובה"
    f.appendChild(m4)

    let m5 = document.createElement('h4')
    m5.innerText = "משתמש לא קיים"
    f.appendChild(m5)

    let ok = document.createElement('button')
    ok.innerText = "אישור"
    ok.addEventListener('click', entry)
    f.appendChild(ok)

        // יצירת לינק לטופס הרשמה
    let m0 = document.createElement('h5')
    m0.innerText = "עוד לא נרשמת? "
    m0.id = "lk"
    let link = document.createElement('span')
    link.innerText = "הרשם"
    link.id = "lk"

    // עיצוב לינק
    link.style.color = "";
    link.style.cursor = "pointer";
    link.style.textDecoration = "underline";

    link.addEventListener('click', create_log_in);

    m0.appendChild(link)
    f.appendChild(m0)
}

// בדיקות כניסה
function entry() {
    event.preventDefault()
    let inputs = document.getElementsByTagName('input')
    let mess = document.getElementsByTagName('h4')
    // מוריד את האזהרות אם קיימות
    mess[0].style.display = 'none'
    mess[1].style.display = 'none'
    let go = true
    // אם המייל ריק
    if (inputs[0].value == '') {
        mess[0].style.display = 'block'
        go = false
    }
    // אם הקוד ריק
    if (inputs[1].value == '') {
        mess[1].style.display = 'block'
        go = false
    }
    // אם הכל טוב
    if (go) {
        // בודקים אם באמת קיים משתמש כזה
        let good = false
        allPepole = localStorage.getItem('users')
        // אם המערך ריק אז בטוח לא קיים
        if (allPepole == null) {
            good = false
        }
        // אחרת עוברים בלולאה
        else {
            allPepole = JSON.parse(allPepole)
            for (index = 0; index < allPepole.length; index++) {
                // אם קיים כזה משתמש
                if (allPepole[index].Email == inputs[0].value && allPepole[index].code == inputs[1].value) {
                    good = true
                    break
                }
                // אם קיים כזה מייל אבל לא כזו סיסמא
                if (allPepole[index].Email == inputs[0].value) {
                    good = null
                    break
                }
            }
        }
        // אם קיים
        if (good) {
            sessionStorage.setItem('userName', allPepole[index].FirstName)
              window.history.back();
        }
        // אם לא
        else if (good==false) {
            let mes = document.getElementsByTagName('h4')[2]
            mes.classList.add('show')
            if (!document.getElementById('toSignUp')) {
                let b1 = document.createElement('button')
                b1.textContent = "מעבר להרשמה"
                b1.id = "toSignUp"
                b1.addEventListener('click', create_log_in)
                main.appendChild(b1)
            }

        }
        // אם קיים כזה מייל אבל לא סיסמא
        else if (good == null) {
            let mes = document.getElementsByTagName('h4')[2]
            mes.classList.add('show')
            mes.innerText = "סיסמא שגויה"
        }
    }
}