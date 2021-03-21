/*
  protoast-3d 1.0.0
  License: MIT
  Copyright (c) 2021, Jordan jerlends_0x0@protonmail.com
*/
import * as THREE from 'three';
import './hmr.js'

/**
  * @desc Expects DOM element. Sets scene properties from 
  * dimensions of elm. If no element is passed in the 
  * scene will be set to page dimensions
*/
var testingElm = document.getElementById('3dast');

let elementHeight;
let elementWidth;
let elementAspect;

function setSize(elm) {
    if (elm) {

        elementHeight = elm.clientHeight;
        elementWidth = elm.clientWidth;
        // console.log("elm", elementHeight, elementWidth)

    } else {

        elementHeight = window.innerHeight;
        elementWidth = window.innerWidth;
        // console.log(elementHeight, elementWidth)

    }

    elementAspect = elementWidth / elementHeight;
    // console.log(elementAspect)
}

setSize(testingElm)


/**
  * @desc No arguments creates default perspective camera. Sets
  * the viewing frustum to sane values with optional overrides.
  * @parameters camType: "perspective" || "orthographic"   
*/
var camera;
const perspectiveDefaults = {
    fov: 45,
    aspect: 1,
    near: 1,
    far: 800
}
const orthographicDefaults = {
    left: elementWidth / -2,
    right: elementWidth / 2,
    top: elementHeight / 2,
    bottom: elementHeight / -2,
    near: 1,
    far: 1000,
}
/**
  * @desc No arguments creates default perspective camera. Sets
  * the viewing frustum to sane values with optional overrides.
  * @parameters camType: "perspective" || "orthographic"
*/
function createCamera(...camSettings) {
    var fca; // fca == Final Cam Args
    var cSettings = camSettings;

    if (cSettings.length <= 1) {
        if (cSettings[0] === "orthographic") { // default orthographic camera

            camera = new THREE.OrthographicCamera(
                orthographicDefaults["left"],
                orthographicDefaults["right"],
                orthographicDefaults["top"],
                orthographicDefaults["bottom"],
                orthographicDefaults["near"],
                orthographicDefaults["far"])
            return camera
        } else { // default perspective camera

            camera = new THREE.PerspectiveCamera(
                perspectiveDefaults["fov"],
                perspectiveDefaults["aspect"],
                perspectiveDefaults["near"],
                perspectiveDefaults["far"])
            return camera
        }
    } else { // Update default values to what's set, values not set revert to defaults

        if (cSettings[0] === "orthographic") {

            cSettings.shift()
            fca = Object.keys(orthographicDefaults).map(key => orthographicDefaults[key])

            for (var i = 0; i < cSettings.length; i++) {

                fca[i] = cSettings[i]
            }

            camera = new THREE.OrthographicCamera(fca[0], fca[1], fca[2], fca[3], fca[4], fca[5])
            return camera
        } else {

            cSettings.shift()
            fca = Object.keys(perspectiveDefaults).map(key => perspectiveDefaults[key])

            for (var i = 0; i < cSettings.length; i++) {

                fca[i] = cSettings[i]
            }

            camera = new THREE.PerspectiveCamera(fca[0], fca[1], fca[2], fca[3])
            return camera
        }
    }
}


createCamera("perspective")

// TODO...
function constructSceneLayout() {

}

function constructRenderer() {

}


function parseAstNodes() {

}

function groupAstNodes() {

}


function createRoundedRectangle() {

}

function createAstGeometry(nodes) {

}

function createAstGraph() {

}