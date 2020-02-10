// https://www.sitepoint.com/javascript-media-queries/

// if (matchMedia)

var btn = document.createElement("button");
var node = document.createTextNode("MENU");
btn.appendChild(node);

var attrAria = document.createAttribute('aria-expanded');
attrAria.value="false";
btn.setAttributeNode(attrAria);

var attrClass = document.createAttribute("class");       // Create a "class" attribute
attrClass.value = "mNav__button";                        // Set the value of the class attribute
btn.setAttributeNode(attrClass);    

var element = document.getElementById("mNav");          // I had to add the mNav id to get this working, I´d rather use a class or elementname.
element.prepend(btn);
// element.appendChild(btn);