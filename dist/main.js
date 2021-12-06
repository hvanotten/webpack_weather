/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* @flow */\n/*::\n\ntype DotenvParseOptions = {\n  debug?: boolean\n}\n\n// keys and values from src\ntype DotenvParseOutput = { [string]: string }\n\ntype DotenvConfigOptions = {\n  path?: string, // path to .env file\n  encoding?: string, // encoding of .env file\n  debug?: string // turn on logging for debugging purposes\n}\n\ntype DotenvConfigOutput = {\n  parsed?: DotenvParseOutput,\n  error?: Error\n}\n\n*/\n\nconst fs = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'fs'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\nconst path = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))\n\nfunction log (message /*: string */) {\n  console.log(`[dotenv][DEBUG] ${message}`)\n}\n\nconst NEWLINE = '\\n'\nconst RE_INI_KEY_VAL = /^\\s*([\\w.-]+)\\s*=\\s*(.*)?\\s*$/\nconst RE_NEWLINES = /\\\\n/g\nconst NEWLINES_MATCH = /\\n|\\r|\\r\\n/\n\n// Parses src into an Object\nfunction parse (src /*: string | Buffer */, options /*: ?DotenvParseOptions */) /*: DotenvParseOutput */ {\n  const debug = Boolean(options && options.debug)\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split(NEWLINES_MATCH).forEach(function (line, idx) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(RE_INI_KEY_VAL)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n      // default undefined or missing values to empty string\n      let val = (keyValueArr[2] || '')\n      const end = val.length - 1\n      const isDoubleQuoted = val[0] === '\"' && val[end] === '\"'\n      const isSingleQuoted = val[0] === \"'\" && val[end] === \"'\"\n\n      // if single or double quoted, remove quotes\n      if (isSingleQuoted || isDoubleQuoted) {\n        val = val.substring(1, end)\n\n        // if double quoted, expand newlines\n        if (isDoubleQuoted) {\n          val = val.replace(RE_NEWLINES, NEWLINE)\n        }\n      } else {\n        // remove surrounding whitespace\n        val = val.trim()\n      }\n\n      obj[key] = val\n    } else if (debug) {\n      log(`did not match key and value when parsing line ${idx + 1}: ${line}`)\n    }\n  })\n\n  return obj\n}\n\n// Populates process.env from .env file\nfunction config (options /*: ?DotenvConfigOptions */) /*: DotenvConfigOutput */ {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding /*: string */ = 'utf8'\n  let debug = false\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = options.path\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n    if (options.debug != null) {\n      debug = true\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }), { debug })\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(\"MISSING_ENV_VAR\", key)) {\n        \"MISSING_ENV_VAR\"[key] = parsed[key]\n      } else if (debug) {\n        log(`\"${key}\" is already defined in \\`process.env\\` and will not be overwritten`)\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack://webpack_weather/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack_weather/./src/scss/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/dataFunctions */ \"./src/js/dataFunctions.js\");\n/* harmony import */ var _js_DomFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/DomFunction */ \"./src/js/DomFunction.js\");\n/* harmony import */ var _js_currentLocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/currentLocation */ \"./src/js/currentLocation.js\");\n\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config();\n\n\n\n\n\n\n\nconst currentLoc = new _js_currentLocation__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\nconst initApp = () => {\n  //add listeners\n  const geoButton = document.getElementById(\"getLocation\");\n  geoButton.addEventListener(\"click\", getGeoWeather);\n  const homeButton = document.getElementById(\"home\");\n  homeButton.addEventListener(\"click\", loadWeather);\n  const saveButton = document.getElementById(\"saveLocation\");\n  saveButton.addEventListener(\"click\", saveLocation);\n  const unitButton = document.getElementById(\"unit\");\n  unitButton.addEventListener(\"click\", setUnitPref);\n  const refreshButton = document.getElementById(\"refresh\");\n  refreshButton.addEventListener(\"click\", refreshWeather);\n\n  //search bar\n  const locationEntry = document.getElementById(\"searchBar_form\");\n  locationEntry.addEventListener(\"submit\", submitNewLocation);\n\n  // set up\n  (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.setPlaceholderText)();\n\n  // load default weather\n  loadWeather();\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", initApp);\n\nconst getGeoWeather = (event) => {\n  if (event) {\n    if (event.type === \"click\") {\n      //add spinner;\n      const mapIcon = document.querySelector(\".fa-map-marker-alt\");\n      (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(mapIcon);\n    }\n  }\n  if (!navigator.geolocation) geoError();\n  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);\n};\n\nconst geoError = (errObj) => {\n  const errMsg = errObj ? errObj.message : \"Geolocation not supported\";\n  (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.displayError)(errMsg, errMsg);\n};\n\nconst geoSuccess = (position) => {\n  const myCoordsObj = {\n    lat: position.coords.latitude,\n    lon: position.coords.longitude,\n    name: `Lat:${position.coords.latitude} Long:${position.coords.longitude}`,\n  };\n  // set location object\n  (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.setLocationObject)(currentLoc, myCoordsObj);\n  updateDataAndDisplay(currentLoc);\n  //update data and display\n};\n\nconst loadWeather = (event) => {\n  //local storage saved location or if no saved location\n  const savedLocation = (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.getHomeLocation)();\n  if (!savedLocation && !event) return getGeoWeather();\n  if (!savedLocation && event.type === \"click\") {\n    (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.displayError)(\n      \"No Home Location Saved.\",\n      \"Sorry. Please save your home location first\"\n    );\n  } else if (savedLocation && !event) {\n    displayHomeLocationWeather(savedLocation);\n  } else {\n    const homeIcon = document.querySelector(\".fa-home\");\n    (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(homeIcon);\n    displayHomeLocationWeather(savedLocation);\n  }\n};\n\nconst displayHomeLocationWeather = (home) => {\n  if (typeof home === \"string\") {\n    const locationJson = JSON.parse(home);\n    const myCoordsObj = {\n      lat: locationJson.lat,\n      lon: locationJson.lon,\n      name: locationJson.name,\n      unit: locationJson.unit,\n    };\n    (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.setLocationObject)(currentLoc, myCoordsObj);\n    updateDataAndDisplay(currentLoc);\n  }\n};\n\nconst saveLocation = () => {\n  if (currentLoc.getLat() && currentLoc.getLon()) {\n    const saveIcon = document.querySelector(\".fa-save\");\n    (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(saveIcon);\n    const location = {\n      name: currentLoc.getName(),\n      lat: currentLoc.getLat(),\n      lon: currentLoc.getLon(),\n      unit: currentLoc.getUnit(),\n    };\n    localStorage.setItem(\"defaultWeatherLocation\", JSON.stringify(location));\n    (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.updateScreenReaderConfirmation)(\n      `Saved ${currentLoc.getName()} as home location.`\n    );\n  }\n};\n\nconst setUnitPref = () => {\n  const unitIcon = document.querySelector(\".fa-chart-bar\");\n  (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(unitIcon);\n  currentLoc.toggleUnit();\n  updateDataAndDisplay(currentLoc);\n};\n\nconst refreshWeather = () => {\n  const refreshIcon = document.querySelector(\".fa-sync-alt\");\n  (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(refreshIcon);\n  updateDataAndDisplay(currentLoc);\n};\n\nconst submitNewLocation = async (event) => {\n  event.preventDefault();\n  const text = document.getElementById(\"searchBar_text\").value;\n  const entryText = (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.cleanText)(text);\n  if (!entryText.length) return;\n\n  const locationIcon = document.querySelector(\".fa-search\");\n  (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.addSpinner)(locationIcon);\n  const coordsData = await (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.getCoordsFromApi)(entryText, currentLoc.getUnit());\n\n  //work with API data here also add if else for if data does not appear.\n  if (coordsData) {\n    if (coordsData.cod === 200) {\n      const myCoordsObj = {\n        lat: coordsData.coord.lat,\n        lon: coordsData.coord.lon,\n        name: coordsData.sys.country\n          ? `${coordsData.name}, ${coordsData.sys.country}`\n          : coordsData.name,\n      };\n      (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.setLocationObject)(currentLoc, myCoordsObj);\n      updateDataAndDisplay(currentLoc);\n    } else {\n      (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.displayApiError)(coordsData);\n    }\n  } else {\n    (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.displayError)(\"Connection Error\", \"Connection Error\");\n  }\n};\n\nconst updateDataAndDisplay = async (locationObj) => {\n  // console.log(locationObj);\n  const weatherJson = await (0,_js_dataFunctions__WEBPACK_IMPORTED_MODULE_1__.getWeatherFromCoords)(locationObj);\n  // console.log(weatherJson);\n  if (weatherJson) (0,_js_DomFunction__WEBPACK_IMPORTED_MODULE_2__.updateDisplay)(weatherJson, locationObj);\n};\n\n\n//# sourceURL=webpack://webpack_weather/./src/index.js?");

/***/ }),

/***/ "./src/js/DomFunction.js":
/*!*******************************!*\
  !*** ./src/js/DomFunction.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setPlaceholderText\": () => (/* binding */ setPlaceholderText),\n/* harmony export */   \"addSpinner\": () => (/* binding */ addSpinner),\n/* harmony export */   \"displayError\": () => (/* binding */ displayError),\n/* harmony export */   \"displayApiError\": () => (/* binding */ displayApiError),\n/* harmony export */   \"updateScreenReaderConfirmation\": () => (/* binding */ updateScreenReaderConfirmation),\n/* harmony export */   \"updateDisplay\": () => (/* binding */ updateDisplay)\n/* harmony export */ });\nconst setPlaceholderText = () => {\n  const input = document.getElementById(\"searchBar_text\");\n  window.innerWidth < 400\n    ? (input.placeholder = \"City, State, Country\")\n    : (input.placeholder = \"City, State, Country, or Zip Code\");\n};\n\nconst addSpinner = (element) => {\n  animateButton(element);\n  setTimeout(animateButton, 1000, element);\n};\n\nconst animateButton = (element) => {\n  element.classList.toggle(\"none\");\n  element.nextElementSibling.classList.toggle(\"block\");\n  element.nextElementSibling.classList.toggle(\"none\");\n};\n\nconst displayError = (headerMsg, srMsg) => {\n  updateWeatherLocationHeader(headerMsg);\n  updateScreenReaderConfirmation(srMsg);\n};\n\nconst displayApiError = (statusCode) => {\n  const properMsg = toProperCase(statusCode.message);\n  updateWeatherLocationHeader(properMsg);\n  updateScreenReaderConfirmation(`${properMsg}. Please try again.`);\n  console.error();\n};\n\nconst toProperCase = (text) => {\n  const words = text.split(\" \");\n  const properWords = words.map((word) => {\n    return word.charAt(0).toUpperCase() + word.slice(1);\n  });\n  return properWords.join(\" \");\n};\n\nconst updateWeatherLocationHeader = (message) => {\n  const h1 = document.getElementById(\"currentForecast_location\");\n  if (message.indexOf(\"Lat:\") !== -1 && message.indexOf(\"Long:\") !== -1) {\n    const msgArray = message.split(\" \");\n    const mapArray = msgArray.map((msg) => {\n      return msg.replace(\":\", \": \");\n    });\n    const lat =\n      mapArray[0].indexOf(\"-\") === -1\n        ? mapArray[0].slice(0, 10)\n        : mapArray[0].slice(0, 11);\n    const lon =\n      mapArray[1].indexOf(\"-\") === -1\n        ? mapArray[1].slice(0, 11)\n        : mapArray[1].slice(0, 12);\n    h1.textContent = `${lat} • ${lon}`;\n  } else {\n    h1.textContent = message;\n  }\n};\n\nconst updateScreenReaderConfirmation = (message) => {\n  document.getElementById(\"confirmation\").textContent = message;\n};\n\nconst updateDisplay = (weatherJson, locationObj) => {\n  fadeDisplay();\n  clearDisplay();\n  const weatherClass = getWeatherClass(weatherJson.current.weather[0].icon);\n  setBGImage(weatherClass);\n  const screenReaderWeather = buildScreenReaderWeather(\n    weatherJson,\n    locationObj\n  );\n  updateScreenReaderConfirmation(screenReaderWeather);\n  updateWeatherLocationHeader(locationObj.getName());\n  //current conditions\n  const ccArray = createCurrentConditionsDivs(\n    weatherJson,\n    locationObj.getUnit()\n  );\n  displayCurrentConditions(ccArray);\n  //sixday forecast\n  displaySixDayForecast(weatherJson);\n  // set focus on search\n  setFocusOnSearch();\n  fadeDisplay();\n};\n\nconst fadeDisplay = () => {\n  const cc = document.getElementById(\"currentForecast\");\n  cc.classList.toggle(\"zero-vis\");\n  cc.classList.toggle(\"fade-in\");\n  const sixDay = document.getElementById(\"dailyForecast\");\n  sixDay.classList.toggle(\"zero-vis\");\n  sixDay.classList.toggle(\"fade-in\");\n};\n\nconst clearDisplay = () => {\n  const currentConditions = document.getElementById(\n    \"currentForecast_conditions\"\n  );\n  deleteContents(currentConditions);\n  const sixDayForecast = document.getElementById(\"dailyForecast_contents\");\n  deleteContents(sixDayForecast);\n};\n\nconst deleteContents = (parentElement) => {\n  let child = parentElement.lastElementChild;\n  while (child) {\n    parentElement.removeChild(child);\n    child = parentElement.lastElementChild;\n  }\n};\n\nconst getWeatherClass = (icon) => {\n  const firstTwoChars = icon.slice(0, 2);\n  const lastChar = icon.slice(2);\n  const weatherLookup = {\n    \"09\": \"snow\",\n    10: \"rain\",\n    11: \"rain\",\n    13: \"snow\",\n    50: \"fog\",\n  };\n  let weatherClass;\n  if (weatherLookup[firstTwoChars]) {\n    weatherClass = weatherLookup[firstTwoChars];\n  } else if (lastChar === \"d\") {\n    weatherClass = \"clouds\";\n  } else {\n    weatherClass = \"night\";\n  }\n  return weatherClass;\n};\n\nconst setBGImage = (weatherClass) => {\n  document.documentElement.classList.add(weatherClass);\n  document.documentElement.classList.forEach((img) => {\n    if (img !== weatherClass) document.documentElement.classList.remove(img);\n  });\n};\n\nconst buildScreenReaderWeather = (weatherJson, locationObj) => {\n  const location = locationObj.getName();\n  const unit = locationObj.getUnit();\n  const tempUnit = unit === \"imperial\" ? \"F\" : \"C\";\n  return `${weatherJson.current.weather[0].description} and ${Math.round(\n    Number(weatherJson.current.temp)\n  )}°${tempUnit} in ${location}`;\n};\n\nconst setFocusOnSearch = () => {\n  document.getElementById(\"searchBar_text\").focus();\n};\n\nconst createCurrentConditionsDivs = (weatherObj, unit) => {\n  const tempUnit = unit === \"imperial\" ? \"F\" : \"C\";\n  const windUnit = unit === \"imperial\" ? \"mph\" : \"m/s\";\n  const icon = createMainImgDiv(\n    weatherObj.current.weather[0].icon,\n    weatherObj.current.weather[0].description\n  );\n  const temp = createElem(\n    \"div\",\n    \"temp\",\n    `${Math.round(Number(weatherObj.current.temp))}°`\n  );\n  const properDesc = toProperCase(weatherObj.current.weather[0].description);\n  const desc = createElem(\"div\", \"desc\", properDesc);\n  const feels = createElem(\n    \"div\",\n    \"feels\",\n    `Feels like ${Math.round(Number(weatherObj.current.feels_like))}°`\n  );\n  const maxTemp = createElem(\n    \"div\",\n    \"maxTemp\",\n    `High ${Math.round(Number(weatherObj.daily[0].temp.max))}°`\n  );\n  const minTemp = createElem(\n    \"div\",\n    \"minTemp\",\n    `Low ${Math.round(Number(weatherObj.daily[0].temp.min))}°`\n  );\n  const humidity = createElem(\n    \"div\",\n    \"humidity\",\n    `Humidity ${weatherObj.current.humidity}%`\n  );\n  const wind = createElem(\n    \"div\",\n    \"wind\",\n    `Wind ${Math.round(Number(weatherObj.current.wind_speed))} ${windUnit}`\n  );\n  return [icon, temp, desc, feels, maxTemp, minTemp, humidity, wind];\n};\n\nconst createMainImgDiv = (icon, altText) => {\n  const iconDiv = createElem(\"div\", \"icon\");\n  iconDiv.id = \"icon\";\n  const faIcon = translateIconToFontAwesome(icon);\n  faIcon.ariaHidden = true;\n  faIcon.title = altText;\n  iconDiv.appendChild(faIcon);\n  return iconDiv;\n};\n\nconst createElem = (elemType, divClassName, divText, unit) => {\n  const div = document.createElement(elemType);\n  div.className = divClassName;\n  if (divText) {\n    div.textContent = divText;\n  }\n  if (divClassName === \"temp\") {\n    const unitDiv = document.createElement(\"div\");\n    unitDiv.classList.add(\"unit\");\n    unitDiv.textContent = unit;\n    div.appendChild(unitDiv);\n  }\n  return div;\n};\n\n//font awesome\nconst translateIconToFontAwesome = (icon) => {\n  const i = document.createElement(\"i\");\n  const firstTwoChars = icon.slice(0, 2);\n  const lastChar = icon.slice(2);\n  switch (firstTwoChars) {\n    case \"01\":\n      if (lastChar === \"d\") {\n        i.classList.add(\"far\", \"fa-sun\");\n      } else {\n        i.classList.add(\"far\", \"fa-moon\");\n      }\n      break;\n    case \"02\":\n      if (lastChar === \"d\") {\n        i.classList.add(\"far\", \"fa-cloud-sun\");\n      } else {\n        i.classList.add(\"far\", \"fa-cloud-moon\");\n      }\n      break;\n    case \"03\":\n      i.classList.add(\"fas\", \"fa-cloud\");\n      break;\n    case \"04\":\n      i.classList.add(\"fas\", \"fa-cloud-meatball\");\n      break;\n    case \"09\":\n      i.classList.add(\"fas\", \"fa-cloud-rain\");\n      break;\n    case \"10\":\n      if (lastChar === \"d\") {\n        i.classList.add(\"far\", \"fa-cloud-sun-rain\");\n      } else {\n        i.classList.add(\"far\", \"fa-cloud-moon-rain\");\n      }\n      break;\n    case \"11\":\n      i.classList.add(\"fas\", \"fa-poo-storm\");\n      break;\n    case \"13\":\n      i.classList.add(\"far\", \"fa-snowflake\");\n      break;\n    case \"50\":\n      i.classList.add(\"fas\", \"fa-smog\");\n      break;\n    default:\n      i.classList.add(\"far\", \"fa-question-circle\");\n  }\n  return i;\n};\n\nconst displayCurrentConditions = (currentConditionsArray) => {\n  const ccContainer = document.getElementById(\"currentForecast_conditions\");\n  currentConditionsArray.forEach((cc) => {\n    ccContainer.appendChild(cc);\n  });\n};\n\nconst displaySixDayForecast = (weatherJson) => {\n  for (let i = 1; i <= 6; i++) {\n    const dfArray = createDailyForecastDivs(weatherJson.daily[i]);\n    displayDailyForecast(dfArray);\n  }\n};\n\nconst createDailyForecastDivs = (dayWeather) => {\n  const dayAbbreviationText = getDayAbbreviation(dayWeather.dt);\n  const dayAbbreviation = createElem(\n    \"p\",\n    \"dayAbbreviation\",\n    dayAbbreviationText\n  );\n  const dayIcon = createDailyForecastIcon(\n    dayWeather.weather[0].icon,\n    dayWeather.weather[0].description\n  );\n  const dayHigh = createElem(\n    \"p\",\n    \"dayHigh\",\n    `${Math.round(Number(dayWeather.temp.max))}°`\n  );\n  const dayLow = createElem(\n    \"p\",\n    \"dayLow\",\n    `${Math.round(Number(dayWeather.temp.min))}°`\n  );\n  return [dayAbbreviation, dayIcon, dayHigh, dayLow];\n};\n\nconst getDayAbbreviation = (data) => {\n  const dateObj = new Date(data * 1000);\n  const utcString = dateObj.toUTCString();\n  return utcString.slice(0, 3).toUpperCase();\n};\n\nconst createDailyForecastIcon = (icon, altText) => {\n  const img = document.createElement(\"img\");\n  if (window.innerWidth < 768 || window.innerHeight < 1025) {\n    img.src = `https://openweathermap.org/img/wn/${icon}.png`;\n  } else {\n    img.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;\n  }\n  img.alt = altText;\n  return img;\n};\n\nconst displayDailyForecast = (dfArray) => {\n  const dayDiv = createElem(\"div\", \"forecastDay\");\n  dfArray.forEach((el) => {\n    dayDiv.appendChild(el);\n  });\n  const dailyForecastContainer = document.getElementById(\n    \"dailyForecast_contents\"\n  );\n  dailyForecastContainer.appendChild(dayDiv);\n};\n\n\n//# sourceURL=webpack://webpack_weather/./src/js/DomFunction.js?");

/***/ }),

/***/ "./src/js/currentLocation.js":
/*!***********************************!*\
  !*** ./src/js/currentLocation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CurrentLocation)\n/* harmony export */ });\nclass CurrentLocation {\n    constructor() {\n        this._name = \"Current Location\";\n        this._lat = null;\n        this._lon = null;\n        this._unit = \"imperial\";\n    }\n\n    getName() {\n        return this._name;\n    }\n\n    setName(name) {\n        this._name = name;\n    }\n\n    getLat() {\n        return this._lat;\n    }\n\n    setLat(lat) {\n        this._lat = lat;\n    }\n\n    getLon() {\n        return this._lon\n    }\n\n    setLon(lon) {\n        this._lon = lon;\n    }\n\n    getUnit() {\n        return this._unit;\n\n    }\n\n    setUnit(unit) {\n        this._unit = unit;\n    }\n\n    toggleUnit() {\n        this._unit = this._unit === \"imperial\" ? \"metric\" : \"imperial\";\n    }\n\n}\n\n//# sourceURL=webpack://webpack_weather/./src/js/currentLocation.js?");

/***/ }),

/***/ "./src/js/dataFunctions.js":
/*!*********************************!*\
  !*** ./src/js/dataFunctions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocationObject\": () => (/* binding */ setLocationObject),\n/* harmony export */   \"getHomeLocation\": () => (/* binding */ getHomeLocation),\n/* harmony export */   \"getWeatherFromCoords\": () => (/* binding */ getWeatherFromCoords),\n/* harmony export */   \"getCoordsFromApi\": () => (/* binding */ getCoordsFromApi),\n/* harmony export */   \"cleanText\": () => (/* binding */ cleanText)\n/* harmony export */ });\n\n\nconst setLocationObject = (locationObj, coordsObj) => {\n  const { lat, lon, name, unit } = coordsObj;\n  locationObj.setLat(lat);\n  locationObj.setLon(lon);\n  locationObj.setName(name);\n  if (unit) {\n    locationObj.setUnit(unit);\n  }\n};\n\nconst getHomeLocation = () => {\n  return localStorage.getItem(\"defaultWeatherLocation\");\n};\n\nconst getWeatherFromCoords = async (locationObj) => {\n  const lat = locationObj.getLat();\n  const lon = locationObj.getLon();\n  const units = locationObj.getUnit();\n  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=${units}&appid=${\"d0d332a66244b82bbb11b1927fdb2804\"}`;\n  try {\n    const weatherStream = await fetch(url);\n    const weatherJson = await weatherStream.json();\n    return weatherJson;\n  } catch (err) {\n    console.error(err);\n  }\n};\n\nconst getCoordsFromApi = async (entryText, units) => {\n  const regex = /^\\d+$/g;\n  const flag = regex.test(entryText) ? \"zip\" : \"q\";\n  const url = `https://api.openweathermap.org/data/2.5/weather?${flag}=${entryText}&units=${units}&appid=${\"d0d332a66244b82bbb11b1927fdb2804\"}`;\n  const encodedUrl = encodeURI(url);\n  try {\n    const dataStream = await fetch(encodedUrl);\n    const jsonData = await dataStream.json();\n    // console.log(jsonData);\n    return jsonData;\n  } catch (err) {\n    console.error(err.stack);\n  }\n};\n\nconst cleanText = (text) => {\n  const regex = / {2,}/g;\n  const entryText = text.replaceAll(regex, \" \").trim();\n  return entryText;\n};\n\n\n//# sourceURL=webpack://webpack_weather/./src/js/dataFunctions.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;