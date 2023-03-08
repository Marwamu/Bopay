var fieldcurr = 0;
var fields = document.querySelectorAll('.step-img')
var titles = document.querySelectorAll('.steps-text')
var paras = document.querySelectorAll('.step-para ')
var fieldnext = 0
var fieldPre = 3
var moveForward = function () {

    fieldnext = fieldcurr + 1;
    if (fieldcurr == fields.length - 1) {
        fieldnext = 0
    }
    fields[fieldcurr].style.display = 'none';
    fields[fieldnext].style.display = 'block';
    titles[fieldcurr].style.display = 'none';
    titles[fieldnext].style.display = 'flex';
    paras[fieldcurr].style.display = 'none';
    paras[fieldnext].style.display = 'block';
    if (fieldcurr == 3) {
        fieldcurr = fieldnext
    } else {
        fieldcurr += 1;

    }
};
var movePrevious = function () {

    fieldPre = fieldcurr - 1;
    // console.log(fieldcurr, fieldPre);
    if (fieldcurr == 0) {
        fieldPre = 3
    }
    fields[fieldcurr].style.display = 'none';
    fields[fieldPre].style.display = 'block';
    titles[fieldcurr].style.display = 'none';
    titles[fieldPre].style.display = 'flex';
    paras[fieldcurr].style.display = 'none';
    paras[fieldPre].style.display = 'block';
    if (fieldcurr == 0) {
        fieldcurr = fieldPre
    }
    else {
        fieldcurr -= 1;

    }
    // console.log(fieldcurr, fieldPre);
}
// console.log(document.querySelector('.next'));
document.querySelector('.next').addEventListener('click', moveForward)
document.querySelector('.previous').addEventListener('click', movePrevious)