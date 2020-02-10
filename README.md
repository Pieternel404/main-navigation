# main-navigation
Accessible and responsive main navigation

REQUIREMENTS:
Accessibility
- De navigatie dient te voldoen aan de WAI ARIA specificatie

De opzet van de navigatie dient rekening te houden met de volgende situaties:
- primary input device
- breedte scherm
- mogelijkheden / onmogelijkheden browser

Als button niet beschikbaar is (deze wordt door JS toegevoegd) dan mag er geen gebruik worden gemaakt van:
- display: none;
- visibility: hidden;
- hidden;

De button dient toegevoegd te worden door javascript, gebaseerd op de breedte van scherm
https://davidwalsh.name/css-variables-javascript
https://css-tricks.com/updating-a-css-variable-with-javascript/

Variabelen dienen uitgewisseld te worden, of beschikbaar te zijn voor zowel CSS als JS
https://github.com/css-modules/css-modules/issues/106

*********************************

I used the peudo-class focus-within in order to keep the submenu-list visible when tabbing the sublist-items.

TODO:
- implement a polyfill to mimick :focus-within for the browsers that don´t support it.


