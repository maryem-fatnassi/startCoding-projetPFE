// Section Two :
  // AOS to Definition Section ..
const htmlDefinition = document.getElementById('html-definition').setAttribute('data-aos','fade-right');
const javascriptDefinition = document.getElementById('javascript-definition').setAttribute('data-aos','fade-left');
const htmlRelationship = document.getElementById('html-relationship').setAttribute('data-aos','fade-left');
const javascriptRelationship = document.getElementById('javascript-relationship').setAttribute('data-aos','fade-right');

// Section Four : 
  // AOS to the section four (VsCode & NotePad++ Container)
const vsCodeContainer = document.getElementById('vs-code_container').setAttribute('data-aos','fade-right');
const notePadContainer = document.getElementById('notepad++_container').setAttribute('data-aos','fade-left');

AOS.init(
    {
        duration:2500,
    }
);