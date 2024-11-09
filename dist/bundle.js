/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/country-list/country-list.js":
/*!***************************************************!*\
  !*** ./node_modules/country-list/country-list.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar data = __webpack_require__(/*! ./data.json */ \"./node_modules/country-list/data.json\")\n\n/** Precompute name and code lookups. */\nvar nameMap = {}\nvar codeMap = {}\ndata.forEach(mapCodeAndName)\n\nfunction mapCodeAndName (country) {\n  nameMap[country.name.toLowerCase()] = country.code\n  codeMap[country.code.toLowerCase()] = country.name\n}\n\nexports.overwrite = function overwrite (countries) {\n  if (!countries || !countries.length) return\n  countries.forEach(function (country) {\n    var foundIndex = data.findIndex(function (item) {\n      return item.code === country.code\n    })\n    data[foundIndex] = country\n    mapCodeAndName(country)\n  })\n}\n\nexports.getCode = function getCode (name) {\n  return nameMap[name.toLowerCase()]\n}\n\nexports.getName = function getName (code) {\n  return codeMap[code.toLowerCase()]\n}\n\nexports.getNames = function getNames () {\n  return data.map(function (country) {\n    return country.name\n  })\n}\n\nexports.getCodes = function getCodes () {\n  return data.map(function (country) {\n    return country.code\n  })\n}\n\nexports.getCodeList = function getCodeList () {\n  return codeMap\n}\n\nexports.getNameList = function getNameList () {\n  return nameMap\n}\n\nexports.getData = function getData () {\n  return data\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./node_modules/country-list/country-list.js?");

/***/ }),

/***/ "./src/Services/ContactService.ts":
/*!****************************************!*\
  !*** ./src/Services/ContactService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContactService: () => (/* binding */ ContactService)\n/* harmony export */ });\nclass ContactService {\n    constructor() {\n        this.storageKey = \"contacts\";\n    }\n    getContacts() {\n        const contacts = localStorage.getItem(this.storageKey);\n        return contacts ? JSON.parse(contacts) : [];\n    }\n    saveContacts(contacts) {\n        localStorage.setItem(this.storageKey, JSON.stringify(contacts));\n    }\n    addContact(contact) {\n        const contacts = this.getContacts();\n        contacts.push(contact);\n        this.saveContacts(contacts);\n    }\n    updateContact(updatedContact) {\n        const contacts = this.getContacts().map((contact) => contact.id === updatedContact.id ? updatedContact : contact);\n        this.saveContacts(contacts);\n    }\n    deleteContact(id) {\n        const contacts = this.getContacts().filter((contact) => contact.id !== id);\n        this.saveContacts(contacts);\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/Services/ContactService.ts?");

/***/ }),

/***/ "./src/Services/ValidationService.ts":
/*!*******************************************!*\
  !*** ./src/Services/ValidationService.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationService: () => (/* binding */ ValidationService)\n/* harmony export */ });\nclass ValidationService {\n    static isValidEmail(email) {\n        return /^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email);\n    }\n    static isValidName(name) {\n        return name.trim().length > 0;\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/Services/ValidationService.ts?");

/***/ }),

/***/ "./src/Utils/Countries.ts":
/*!********************************!*\
  !*** ./src/Utils/Countries.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   countries: () => (/* binding */ countries)\n/* harmony export */ });\n/* harmony import */ var country_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! country-list */ \"./node_modules/country-list/country-list.js\");\n\nconst countries = (0,country_list__WEBPACK_IMPORTED_MODULE_0__.getNames)();\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/Utils/Countries.ts?");

/***/ }),

/***/ "./src/components/ContactForm.ts":
/*!***************************************!*\
  !*** ./src/components/ContactForm.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FormView: () => (/* binding */ FormView)\n/* harmony export */ });\n/* harmony import */ var _models_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/Contact */ \"./src/models/Contact.ts\");\n/* harmony import */ var _Utils_Countries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/Countries */ \"./src/Utils/Countries.ts\");\n/* harmony import */ var _ContactList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactList */ \"./src/components/ContactList.ts\");\n/* harmony import */ var _Services_ValidationService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Services/ValidationService */ \"./src/Services/ValidationService.ts\");\n\n\n\n // Importamos el servicio de validación\nclass FormView {\n    constructor(container, contactService, contact = null) {\n        this.container = container;\n        this.contactService = contactService;\n        this.contact = contact;\n    }\n    render() {\n        var _a, _b, _c, _d;\n        this.container.innerHTML = `\r\n            <section>\r\n            <h2>${this.contact ? \"Edit\" : \"Add\"} Contact</h2>\r\n            <form id=\"contact-form\">\r\n                <input type=\"text\" id=\"first-name\" placeholder=\"First Name\" value=\"${((_a = this.contact) === null || _a === void 0 ? void 0 : _a.firstName) || \"\"}\" required>\r\n                <input type=\"text\" id=\"last-name\" placeholder=\"Last Name\" value=\"${((_b = this.contact) === null || _b === void 0 ? void 0 : _b.lastName) || \"\"}\" required>\r\n                <input type=\"text\" id=\"email\" placeholder=\"Email\" value=\"${((_c = this.contact) === null || _c === void 0 ? void 0 : _c.email) || \"\"}\" required>\r\n                <select id=\"country\" required>\r\n                    <option value=\"\">Select Country</option>\r\n                </select>\r\n                <button type=\"submit\">${this.contact ? \"Update\" : \"Add\"} Contact</button>\r\n            </form>\r\n            </section>\r\n        `;\n        // Poblar el dropdown de países\n        this.populateCountryDropdown();\n        (_d = document.getElementById(\"contact-form\")) === null || _d === void 0 ? void 0 : _d.addEventListener(\"submit\", (event) => {\n            event.preventDefault();\n            this.handleFormSubmit();\n        });\n    }\n    populateCountryDropdown() {\n        const countrySelect = document.getElementById(\"country\");\n        _Utils_Countries__WEBPACK_IMPORTED_MODULE_1__.countries.forEach(country => {\n            const option = document.createElement(\"option\");\n            option.value = country;\n            option.textContent = country;\n            countrySelect.appendChild(option);\n        });\n        // Si hay un contacto para editar, preseleccionamos el país\n        if (this.contact) {\n            const selectedOption = countrySelect.querySelector(`option[value=\"${this.contact.country}\"]`);\n            if (selectedOption) {\n                selectedOption.selected = true;\n            }\n        }\n    }\n    handleFormSubmit() {\n        const firstName = document.getElementById(\"first-name\").value.trim();\n        const lastName = document.getElementById(\"last-name\").value.trim();\n        const email = document.getElementById(\"email\").value.trim();\n        const country = document.getElementById(\"country\").value;\n        // Validaciones de los campos utilizando ValidationService\n        if (!_Services_ValidationService__WEBPACK_IMPORTED_MODULE_3__.ValidationService.isValidName(firstName) || !_Services_ValidationService__WEBPACK_IMPORTED_MODULE_3__.ValidationService.isValidName(lastName) || !_Services_ValidationService__WEBPACK_IMPORTED_MODULE_3__.ValidationService.isValidName(country)) {\n            alert(\"All fields are required and should not be empty.\");\n            return;\n        }\n        // Validación del correo electrónico\n        if (!_Services_ValidationService__WEBPACK_IMPORTED_MODULE_3__.ValidationService.isValidEmail(email)) {\n            alert(\"Please enter a valid email address.\");\n            return;\n        }\n        if (this.contact) {\n            // Actualizar contacto existente\n            this.contactService.updateContact(Object.assign(Object.assign({}, this.contact), { firstName,\n                lastName,\n                email,\n                country }));\n        }\n        else {\n            // Crear nuevo contacto\n            const newContact = new _models_Contact__WEBPACK_IMPORTED_MODULE_0__.Contact(Date.now().toString(), firstName, lastName, email, country);\n            this.contactService.addContact(newContact);\n        }\n        // Volver a mostrar la lista de contactos\n        new _ContactList__WEBPACK_IMPORTED_MODULE_2__.ListView(this.container, this.contactService).render();\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/components/ContactForm.ts?");

/***/ }),

/***/ "./src/components/ContactList.ts":
/*!***************************************!*\
  !*** ./src/components/ContactList.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ListView: () => (/* binding */ ListView)\n/* harmony export */ });\n/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactForm */ \"./src/components/ContactForm.ts\");\n\nclass ListView {\n    constructor(container, contactService) {\n        this.container = container;\n        this.contactService = contactService;\n    }\n    render() {\n        this.container.innerHTML = `\r\n      <section>\r\n        <h2>Contacts</h2>\r\n        <input type=\"text\" id=\"search\" placeholder=\"Search contacts...\" />\r\n        <button id=\"add-contact\">Add Contact</button>\r\n        <ul id=\"contact-list\"></ul>\r\n      </section>\r\n    `;\n        this.addEventListeners();\n        this.renderContactList(); // Inicializa la lista de contactos completa\n    }\n    renderContactList(filter = \"\") {\n        const contacts = this.contactService\n            .getContacts()\n            .filter((contact) => `${contact.firstName} ${contact.lastName} ${contact.email}`\n            .toLowerCase()\n            .includes(filter.toLowerCase()));\n        const contactList = this.container.querySelector(\"#contact-list\");\n        contactList.innerHTML = contacts\n            .map((contact) => `\r\n        <li>\r\n          ${contact.firstName} ${contact.lastName} - ${contact.email} (${contact.country})\r\n          <div>\r\n            <button class=\"edit\" data-id=\"${contact.id}\">Edit</button>\r\n            <button class=\"delete\" data-id=\"${contact.id}\">Delete</button>\r\n          </div>\r\n        </li>`)\n            .join(\"\");\n        this.addListEventListeners();\n    }\n    addEventListeners() {\n        var _a;\n        // Añadir nuevo contacto\n        (_a = document.getElementById(\"add-contact\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n            new _ContactForm__WEBPACK_IMPORTED_MODULE_0__.FormView(this.container, this.contactService, null).render();\n        });\n        // Búsqueda de contactos\n        const searchInput = document.getElementById(\"search\");\n        searchInput.addEventListener(\"input\", () => this.renderContactList(searchInput.value));\n    }\n    addListEventListeners() {\n        // Edición de contacto\n        this.container.querySelectorAll(\".edit\").forEach((button) => {\n            button.addEventListener(\"click\", (event) => {\n                const contactId = event.target.getAttribute(\"data-id\");\n                const contact = this.contactService.getContacts().find((c) => c.id === contactId) || null;\n                new _ContactForm__WEBPACK_IMPORTED_MODULE_0__.FormView(this.container, this.contactService, contact).render();\n            });\n        });\n        // Eliminar contacto\n        this.container.querySelectorAll(\".delete\").forEach((button) => {\n            button.addEventListener(\"click\", (event) => {\n                const contactId = event.target.getAttribute(\"data-id\");\n                if (contactId && window.confirm(\"Are you sure you want to delete this contact?\")) {\n                    // Si el usuario acepta, eliminamos el contacto\n                    this.contactService.deleteContact(contactId);\n                    this.render();\n                }\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/components/ContactList.ts?");

/***/ }),

/***/ "./src/components/Footer.ts":
/*!**********************************!*\
  !*** ./src/components/Footer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Footer: () => (/* binding */ Footer)\n/* harmony export */ });\nclass Footer {\n    constructor(container) {\n        this.container = container;\n    }\n    render() {\n        const footer = document.createElement('footer');\n        footer.innerHTML = `\r\n      <p>Natàlia Mas Gisbert</p>\r\n      <p>Front-End Developer</p>\r\n      <p>© ${new Date().getFullYear()}</p>\r\n    `;\n        this.container.appendChild(footer);\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/components/Footer.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_ContactList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ContactList */ \"./src/components/ContactList.ts\");\n/* harmony import */ var _Services_ContactService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/ContactService */ \"./src/Services/ContactService.ts\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.ts\");\n// src/index.ts\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const appContainer = document.getElementById(\"app\");\n    if (appContainer) {\n        const contactService = new _Services_ContactService__WEBPACK_IMPORTED_MODULE_1__.ContactService();\n        const listView = new _components_ContactList__WEBPACK_IMPORTED_MODULE_0__.ListView(appContainer, contactService);\n        listView.render();\n        const footerContainer = document.getElementById(\"footer-container\");\n        if (footerContainer) {\n            const footer = new _components_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer(footerContainer);\n            footer.render();\n        }\n    }\n});\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/index.ts?");

/***/ }),

/***/ "./src/models/Contact.ts":
/*!*******************************!*\
  !*** ./src/models/Contact.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Contact: () => (/* binding */ Contact)\n/* harmony export */ });\nclass Contact {\n    constructor(id, firstName, lastName, email, country) {\n        this.id = id;\n        this.firstName = firstName;\n        this.lastName = lastName;\n        this.email = email;\n        this.country = country;\n    }\n}\n\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./src/models/Contact.ts?");

/***/ }),

/***/ "./node_modules/country-list/data.json":
/*!*********************************************!*\
  !*** ./node_modules/country-list/data.json ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"code\":\"AD\",\"name\":\"Andorra\"},{\"code\":\"AE\",\"name\":\"United Arab Emirates\"},{\"code\":\"AF\",\"name\":\"Afghanistan\"},{\"code\":\"AG\",\"name\":\"Antigua and Barbuda\"},{\"code\":\"AI\",\"name\":\"Anguilla\"},{\"code\":\"AL\",\"name\":\"Albania\"},{\"code\":\"AM\",\"name\":\"Armenia\"},{\"code\":\"AO\",\"name\":\"Angola\"},{\"code\":\"AQ\",\"name\":\"Antarctica\"},{\"code\":\"AR\",\"name\":\"Argentina\"},{\"code\":\"AS\",\"name\":\"American Samoa\"},{\"code\":\"AT\",\"name\":\"Austria\"},{\"code\":\"AU\",\"name\":\"Australia\"},{\"code\":\"AW\",\"name\":\"Aruba\"},{\"code\":\"AX\",\"name\":\"Åland Islands\"},{\"code\":\"AZ\",\"name\":\"Azerbaijan\"},{\"code\":\"BA\",\"name\":\"Bosnia and Herzegovina\"},{\"code\":\"BB\",\"name\":\"Barbados\"},{\"code\":\"BD\",\"name\":\"Bangladesh\"},{\"code\":\"BE\",\"name\":\"Belgium\"},{\"code\":\"BF\",\"name\":\"Burkina Faso\"},{\"code\":\"BG\",\"name\":\"Bulgaria\"},{\"code\":\"BH\",\"name\":\"Bahrain\"},{\"code\":\"BI\",\"name\":\"Burundi\"},{\"code\":\"BJ\",\"name\":\"Benin\"},{\"code\":\"BL\",\"name\":\"Saint Barthélemy\"},{\"code\":\"BM\",\"name\":\"Bermuda\"},{\"code\":\"BN\",\"name\":\"Brunei Darussalam\"},{\"code\":\"BO\",\"name\":\"Bolivia, Plurinational State of\"},{\"code\":\"BQ\",\"name\":\"Bonaire, Sint Eustatius and Saba\"},{\"code\":\"BR\",\"name\":\"Brazil\"},{\"code\":\"BS\",\"name\":\"Bahamas\"},{\"code\":\"BT\",\"name\":\"Bhutan\"},{\"code\":\"BV\",\"name\":\"Bouvet Island\"},{\"code\":\"BW\",\"name\":\"Botswana\"},{\"code\":\"BY\",\"name\":\"Belarus\"},{\"code\":\"BZ\",\"name\":\"Belize\"},{\"code\":\"CA\",\"name\":\"Canada\"},{\"code\":\"CC\",\"name\":\"Cocos (Keeling) Islands\"},{\"code\":\"CD\",\"name\":\"Congo, Democratic Republic of the\"},{\"code\":\"CF\",\"name\":\"Central African Republic\"},{\"code\":\"CG\",\"name\":\"Congo\"},{\"code\":\"CH\",\"name\":\"Switzerland\"},{\"code\":\"CI\",\"name\":\"Côte d\\'Ivoire\"},{\"code\":\"CK\",\"name\":\"Cook Islands\"},{\"code\":\"CL\",\"name\":\"Chile\"},{\"code\":\"CM\",\"name\":\"Cameroon\"},{\"code\":\"CN\",\"name\":\"China\"},{\"code\":\"CO\",\"name\":\"Colombia\"},{\"code\":\"CR\",\"name\":\"Costa Rica\"},{\"code\":\"CU\",\"name\":\"Cuba\"},{\"code\":\"CV\",\"name\":\"Cabo Verde\"},{\"code\":\"CW\",\"name\":\"Curaçao\"},{\"code\":\"CX\",\"name\":\"Christmas Island\"},{\"code\":\"CY\",\"name\":\"Cyprus\"},{\"code\":\"CZ\",\"name\":\"Czechia\"},{\"code\":\"DE\",\"name\":\"Germany\"},{\"code\":\"DJ\",\"name\":\"Djibouti\"},{\"code\":\"DK\",\"name\":\"Denmark\"},{\"code\":\"DM\",\"name\":\"Dominica\"},{\"code\":\"DO\",\"name\":\"Dominican Republic\"},{\"code\":\"DZ\",\"name\":\"Algeria\"},{\"code\":\"EC\",\"name\":\"Ecuador\"},{\"code\":\"EE\",\"name\":\"Estonia\"},{\"code\":\"EG\",\"name\":\"Egypt\"},{\"code\":\"EH\",\"name\":\"Western Sahara\"},{\"code\":\"ER\",\"name\":\"Eritrea\"},{\"code\":\"ES\",\"name\":\"Spain\"},{\"code\":\"ET\",\"name\":\"Ethiopia\"},{\"code\":\"FI\",\"name\":\"Finland\"},{\"code\":\"FJ\",\"name\":\"Fiji\"},{\"code\":\"FK\",\"name\":\"Falkland Islands (Malvinas)\"},{\"code\":\"FM\",\"name\":\"Micronesia, Federated States of\"},{\"code\":\"FO\",\"name\":\"Faroe Islands\"},{\"code\":\"FR\",\"name\":\"France\"},{\"code\":\"GA\",\"name\":\"Gabon\"},{\"code\":\"GB\",\"name\":\"United Kingdom of Great Britain and Northern Ireland\"},{\"code\":\"GD\",\"name\":\"Grenada\"},{\"code\":\"GE\",\"name\":\"Georgia\"},{\"code\":\"GF\",\"name\":\"French Guiana\"},{\"code\":\"GG\",\"name\":\"Guernsey\"},{\"code\":\"GH\",\"name\":\"Ghana\"},{\"code\":\"GI\",\"name\":\"Gibraltar\"},{\"code\":\"GL\",\"name\":\"Greenland\"},{\"code\":\"GM\",\"name\":\"Gambia\"},{\"code\":\"GN\",\"name\":\"Guinea\"},{\"code\":\"GP\",\"name\":\"Guadeloupe\"},{\"code\":\"GQ\",\"name\":\"Equatorial Guinea\"},{\"code\":\"GR\",\"name\":\"Greece\"},{\"code\":\"GS\",\"name\":\"South Georgia and the South Sandwich Islands\"},{\"code\":\"GT\",\"name\":\"Guatemala\"},{\"code\":\"GU\",\"name\":\"Guam\"},{\"code\":\"GW\",\"name\":\"Guinea-Bissau\"},{\"code\":\"GY\",\"name\":\"Guyana\"},{\"code\":\"HK\",\"name\":\"Hong Kong\"},{\"code\":\"HM\",\"name\":\"Heard Island and McDonald Islands\"},{\"code\":\"HN\",\"name\":\"Honduras\"},{\"code\":\"HR\",\"name\":\"Croatia\"},{\"code\":\"HT\",\"name\":\"Haiti\"},{\"code\":\"HU\",\"name\":\"Hungary\"},{\"code\":\"ID\",\"name\":\"Indonesia\"},{\"code\":\"IE\",\"name\":\"Ireland\"},{\"code\":\"IL\",\"name\":\"Israel\"},{\"code\":\"IM\",\"name\":\"Isle of Man\"},{\"code\":\"IN\",\"name\":\"India\"},{\"code\":\"IO\",\"name\":\"British Indian Ocean Territory\"},{\"code\":\"IQ\",\"name\":\"Iraq\"},{\"code\":\"IR\",\"name\":\"Iran, Islamic Republic of\"},{\"code\":\"IS\",\"name\":\"Iceland\"},{\"code\":\"IT\",\"name\":\"Italy\"},{\"code\":\"JE\",\"name\":\"Jersey\"},{\"code\":\"JM\",\"name\":\"Jamaica\"},{\"code\":\"JO\",\"name\":\"Jordan\"},{\"code\":\"JP\",\"name\":\"Japan\"},{\"code\":\"KE\",\"name\":\"Kenya\"},{\"code\":\"KG\",\"name\":\"Kyrgyzstan\"},{\"code\":\"KH\",\"name\":\"Cambodia\"},{\"code\":\"KI\",\"name\":\"Kiribati\"},{\"code\":\"KM\",\"name\":\"Comoros\"},{\"code\":\"KN\",\"name\":\"Saint Kitts and Nevis\"},{\"code\":\"KP\",\"name\":\"Korea, Democratic People\\'s Republic of\"},{\"code\":\"KR\",\"name\":\"Korea, Republic of\"},{\"code\":\"KW\",\"name\":\"Kuwait\"},{\"code\":\"KY\",\"name\":\"Cayman Islands\"},{\"code\":\"KZ\",\"name\":\"Kazakhstan\"},{\"code\":\"LA\",\"name\":\"Lao People\\'s Democratic Republic\"},{\"code\":\"LB\",\"name\":\"Lebanon\"},{\"code\":\"LC\",\"name\":\"Saint Lucia\"},{\"code\":\"LI\",\"name\":\"Liechtenstein\"},{\"code\":\"LK\",\"name\":\"Sri Lanka\"},{\"code\":\"LR\",\"name\":\"Liberia\"},{\"code\":\"LS\",\"name\":\"Lesotho\"},{\"code\":\"LT\",\"name\":\"Lithuania\"},{\"code\":\"LU\",\"name\":\"Luxembourg\"},{\"code\":\"LV\",\"name\":\"Latvia\"},{\"code\":\"LY\",\"name\":\"Libya\"},{\"code\":\"MA\",\"name\":\"Morocco\"},{\"code\":\"MC\",\"name\":\"Monaco\"},{\"code\":\"MD\",\"name\":\"Moldova, Republic of\"},{\"code\":\"ME\",\"name\":\"Montenegro\"},{\"code\":\"MF\",\"name\":\"Saint Martin, (French part)\"},{\"code\":\"MG\",\"name\":\"Madagascar\"},{\"code\":\"MH\",\"name\":\"Marshall Islands\"},{\"code\":\"MK\",\"name\":\"North Macedonia\"},{\"code\":\"ML\",\"name\":\"Mali\"},{\"code\":\"MM\",\"name\":\"Myanmar\"},{\"code\":\"MN\",\"name\":\"Mongolia\"},{\"code\":\"MO\",\"name\":\"Macao\"},{\"code\":\"MP\",\"name\":\"Northern Mariana Islands\"},{\"code\":\"MQ\",\"name\":\"Martinique\"},{\"code\":\"MR\",\"name\":\"Mauritania\"},{\"code\":\"MS\",\"name\":\"Montserrat\"},{\"code\":\"MT\",\"name\":\"Malta\"},{\"code\":\"MU\",\"name\":\"Mauritius\"},{\"code\":\"MV\",\"name\":\"Maldives\"},{\"code\":\"MW\",\"name\":\"Malawi\"},{\"code\":\"MX\",\"name\":\"Mexico\"},{\"code\":\"MY\",\"name\":\"Malaysia\"},{\"code\":\"MZ\",\"name\":\"Mozambique\"},{\"code\":\"NA\",\"name\":\"Namibia\"},{\"code\":\"NC\",\"name\":\"New Caledonia\"},{\"code\":\"NE\",\"name\":\"Niger\"},{\"code\":\"NF\",\"name\":\"Norfolk Island\"},{\"code\":\"NG\",\"name\":\"Nigeria\"},{\"code\":\"NI\",\"name\":\"Nicaragua\"},{\"code\":\"NL\",\"name\":\"Netherlands\"},{\"code\":\"NO\",\"name\":\"Norway\"},{\"code\":\"NP\",\"name\":\"Nepal\"},{\"code\":\"NR\",\"name\":\"Nauru\"},{\"code\":\"NU\",\"name\":\"Niue\"},{\"code\":\"NZ\",\"name\":\"New Zealand\"},{\"code\":\"OM\",\"name\":\"Oman\"},{\"code\":\"PA\",\"name\":\"Panama\"},{\"code\":\"PE\",\"name\":\"Peru\"},{\"code\":\"PF\",\"name\":\"French Polynesia\"},{\"code\":\"PG\",\"name\":\"Papua New Guinea\"},{\"code\":\"PH\",\"name\":\"Philippines\"},{\"code\":\"PK\",\"name\":\"Pakistan\"},{\"code\":\"PL\",\"name\":\"Poland\"},{\"code\":\"PM\",\"name\":\"Saint Pierre and Miquelon\"},{\"code\":\"PN\",\"name\":\"Pitcairn\"},{\"code\":\"PR\",\"name\":\"Puerto Rico\"},{\"code\":\"PS\",\"name\":\"Palestine, State of\"},{\"code\":\"PT\",\"name\":\"Portugal\"},{\"code\":\"PW\",\"name\":\"Palau\"},{\"code\":\"PY\",\"name\":\"Paraguay\"},{\"code\":\"QA\",\"name\":\"Qatar\"},{\"code\":\"RE\",\"name\":\"Réunion\"},{\"code\":\"RO\",\"name\":\"Romania\"},{\"code\":\"RS\",\"name\":\"Serbia\"},{\"code\":\"RU\",\"name\":\"Russian Federation\"},{\"code\":\"RW\",\"name\":\"Rwanda\"},{\"code\":\"SA\",\"name\":\"Saudi Arabia\"},{\"code\":\"SB\",\"name\":\"Solomon Islands\"},{\"code\":\"SC\",\"name\":\"Seychelles\"},{\"code\":\"SD\",\"name\":\"Sudan\"},{\"code\":\"SE\",\"name\":\"Sweden\"},{\"code\":\"SG\",\"name\":\"Singapore\"},{\"code\":\"SH\",\"name\":\"Saint Helena, Ascension and Tristan da Cunha\"},{\"code\":\"SI\",\"name\":\"Slovenia\"},{\"code\":\"SJ\",\"name\":\"Svalbard and Jan Mayen\"},{\"code\":\"SK\",\"name\":\"Slovakia\"},{\"code\":\"SL\",\"name\":\"Sierra Leone\"},{\"code\":\"SM\",\"name\":\"San Marino\"},{\"code\":\"SN\",\"name\":\"Senegal\"},{\"code\":\"SO\",\"name\":\"Somalia\"},{\"code\":\"SR\",\"name\":\"Suriname\"},{\"code\":\"SS\",\"name\":\"South Sudan\"},{\"code\":\"ST\",\"name\":\"Sao Tome and Principe\"},{\"code\":\"SV\",\"name\":\"El Salvador\"},{\"code\":\"SX\",\"name\":\"Sint Maarten, (Dutch part)\"},{\"code\":\"SY\",\"name\":\"Syrian Arab Republic\"},{\"code\":\"SZ\",\"name\":\"Eswatini\"},{\"code\":\"TC\",\"name\":\"Turks and Caicos Islands\"},{\"code\":\"TD\",\"name\":\"Chad\"},{\"code\":\"TF\",\"name\":\"French Southern Territories\"},{\"code\":\"TG\",\"name\":\"Togo\"},{\"code\":\"TH\",\"name\":\"Thailand\"},{\"code\":\"TJ\",\"name\":\"Tajikistan\"},{\"code\":\"TK\",\"name\":\"Tokelau\"},{\"code\":\"TL\",\"name\":\"Timor-Leste\"},{\"code\":\"TM\",\"name\":\"Turkmenistan\"},{\"code\":\"TN\",\"name\":\"Tunisia\"},{\"code\":\"TO\",\"name\":\"Tonga\"},{\"code\":\"TR\",\"name\":\"Türkiye\"},{\"code\":\"TT\",\"name\":\"Trinidad and Tobago\"},{\"code\":\"TV\",\"name\":\"Tuvalu\"},{\"code\":\"TW\",\"name\":\"Taiwan, Province of China\"},{\"code\":\"TZ\",\"name\":\"Tanzania, United Republic of\"},{\"code\":\"UA\",\"name\":\"Ukraine\"},{\"code\":\"UG\",\"name\":\"Uganda\"},{\"code\":\"UM\",\"name\":\"United States Minor Outlying Islands\"},{\"code\":\"US\",\"name\":\"United States of America\"},{\"code\":\"UY\",\"name\":\"Uruguay\"},{\"code\":\"UZ\",\"name\":\"Uzbekistan\"},{\"code\":\"VA\",\"name\":\"Holy See\"},{\"code\":\"VC\",\"name\":\"Saint Vincent and the Grenadines\"},{\"code\":\"VE\",\"name\":\"Venezuela, Bolivarian Republic of\"},{\"code\":\"VG\",\"name\":\"Virgin Islands, British\"},{\"code\":\"VI\",\"name\":\"Virgin Islands, U.S.\"},{\"code\":\"VN\",\"name\":\"Viet Nam\"},{\"code\":\"VU\",\"name\":\"Vanuatu\"},{\"code\":\"WF\",\"name\":\"Wallis and Futuna\"},{\"code\":\"WS\",\"name\":\"Samoa\"},{\"code\":\"YE\",\"name\":\"Yemen\"},{\"code\":\"YT\",\"name\":\"Mayotte\"},{\"code\":\"ZA\",\"name\":\"South Africa\"},{\"code\":\"ZM\",\"name\":\"Zambia\"},{\"code\":\"ZW\",\"name\":\"Zimbabwe\"}]');\n\n//# sourceURL=webpack://JavaScriptChallengeNataliaMas/./node_modules/country-list/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;