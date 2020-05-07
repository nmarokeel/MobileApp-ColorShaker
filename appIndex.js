/*
 * index.js
 */

"use strict";

var buttonNode
var rgbNode
var shakeNode;		// if on mobile, show user shaking is an option

/* wait until all phonegap/cordova is loaded then call onDeviceReady*/
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){

	buttonNode			= document.getElementById('buttonId')
	rgbNode 			= document.getElementById('rgbId')
	shakeNode			= document.getElementById('shakeId');
	
	buttonNode.addEventListener('click', changeColor, true)


	changeColor()


	// https://github.com/leecrossley/cordova-plugin-shake
	// place <plugin name="cordova-plugin-shake"/> in config.xml
	// shake object will exist onDeviceReady()

	if (typeof shake !== 'undefined') {
		// watch for device shaking, if we hit the unit threshold, call onShake
		shakeNode.innerHTML = "shake me!"
		shake.startWatch(onShake, 30, onShakeError);
	}
}

function changeColor() {
	var r = randomColorComponent()
	var g = randomColorComponent()
	var b = randomColorComponent()

	var rgbString = "rgb(" + r + "," + g + "," + b + ")"
	console.log(rgbString)

	rgbNode.innerHTML = rgbString
	document.body.style.backgroundColor = rgbString
}

var onShakeError = function() {
	alert("onShakeError occurred");
}

var onShake = function() {
	changeColor()
}

function randomColorComponent() {
	return Math.floor(Math.random() * 256) //make a random int from 0 - 255
}
