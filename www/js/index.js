
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

document.getElementById("openDeviceCamera").addEventListener("click", openDeviceCamera);
document.getElementById("openDeviceFilePicker").addEventListener("click", openDeviceFilePicker);

// Function to Set Camera Options
function setOptions(srcType) {
    var options = {
        // Common settings are 20, 50, and 100
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        //mediaType: Camera.MediaType.PICTURE,
        //allowEdit: true,
        correctOrientation: true,
        targetHeight: 1000, 		// Scale image height to 1000 px with aspect ratio remaining constant.
        targetWidth: 1000,           // Scale image width to 1000 px with aspect ratio remaining constant.
    }
    return options;
}

// Function to open device Camera
function openDeviceCamera() {

    var srcType = Camera.PictureSourceType.CAMERA;
    var options = setOptions(srcType);

   
navigator.camera.getPicture(function cameraSuccess(imageData) {

        displayImage(imageData);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");

    }, options);
}

// Function to open device media library
function openDeviceFilePicker() {
    var srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
    var options = setOptions(srcType);

   
navigator.camera.getPicture(function cameraSuccess(imageData) {

        // Display image
        // Add image data in a hidden field
        displayImage(imageData);

    }, function cameraError(error) {
        console.debug("Unable to obtain picture: " + error, "app");
		alert("Unable to obtain picture: " + error);

    }, options);
}

// Function to display photo/image
function displayImage(imageData) {
	// Display image
    var image = document.getElementById('displayImage');
    image.src = "data:image/jpeg;base64," + imageData;
             
    // Save Image data in hidden text field
    var image = document.getElementById('imageString');
    image.value = "data:image/jpeg;base64," + imageData;
}

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
