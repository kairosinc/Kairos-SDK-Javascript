Kairos-SDK-Javascript
=====================

Kairos is the easist way add **Face-Recognition** to your web applications. Our API provides a full-featured and robust Face-Recognition backend, right out of the box. This is the Javascript wrapper for the [Kairos Facial Recognition API](https://www.kairos.com). The package includes a **client** _(kairos.js)_ you can use as an easy client to the API. Continue reading to learn how to integrate Kairos into your web application.

_Thanks to contributions by some of our customers, we also have [Ruby](https://github.com/kany/kairos-api) and [.NET](https://github.com/humbywan/Kairos.Net) wrappers available. Also see our [PHP SDK](https://github.com/kairosinc/Kairos-SDK-iOS), our [Android SDK](https://github.com/kairosinc/Kairos-SDK-Android) and our [iOS SDK](https://github.com/kairosinc/Kairos-SDK-iOS)._

## What You'll Need

* jQuery.
* A web browser.
* Basic knowledge of Javascript and HTML5.



---



## How to Do a Quick Demo
If you just want to do a quick test run, open one of the **example scripts** included with the SDK and follow these steps:

1. [Create your free developer account](https://www.kairos.com/signup)
2. Log into the Kairos Developer Dashboard
3. Create an application and copy your **App Id** & **App Key**
3. Paste them into the constructor method in example.html 
4. Open the script in your **browser**.
4. Drag an image into the drop zone and wait for the response.



---


## How to Install Kairos in Your Own Web Project

1. [Create your free Kairos developer account](https://www.kairos.com/signup) if you don't already have one.
2. Log into the [dashboard](https://www.kairos.com/login) and create a new app.
3. Copy your **App ID** & **App Key** (you'll need them later).
4. [Download](https://github.com/kairosinc/Kairos-SDK-Javascript) the SDK and unzip the package.
5. Open the folder named **Kairos-SDK-Javascript** and locate the kairos.js file.
6. Place the client file _(kairos.js)_ somewhere within your project.
7. Include kairos.js where needed in your project.


```
 <script src="assets/js/kairos.js"></script>
```

## Authenticate Once

Before you can make API calls you'll need to pass Kairos your credentials **App Id** and **App Key** (You only need to do this once). Paste your App Id and App Key into the constructor method like so:

```
// instantiates a new instance of the Kairos client
  var kairos = new Kairos("app_id", "api_key");
```




## Enroll an Image Using Data

The **Enroll** method **registers a face for later recognitions**. Here's an example of enrolling a face (subject) using a method that accepts image data in base64 format, and enrolls it as a new subject into your specified gallery:    

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
var base64_data = 'iVBORw0KGgoAAA ... ABJRU5ErkJggg==\r\n';
var subject_id  = 'eric';
var gallery_id  = 'friends1';


// (3) pass your params and callback to the function
kairos.enroll(image_data, gallery_id, subject_id, myCallback);
```




## Recognize an Image Using Data

The **Recognize** method takes an image of a subject and **attempts to match it against a given gallery of previously-enrolled subjects**. Here's an example of recognizing a subject using a method that accepts image data in base64 format, sends it to the API, and returns a match and confidence value:    

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
base64_data = 'iVBORw0KGgoAAA ... ABJRU5ErkJggg==\r\n';
gallery_id  = 'friends1';

// (3) ... as well as any optional parameters you wish to send
var options = { "threshold" : 0.75 };


// (4) pass your params and callback to the function
kairos.recognize(image_data, gallery_id, myCallback, options);
```



    
## Detect Image Attributes Using Image Data

The **Detect** method takes an image of a subject and **returns various attributes pertaining to the face features**. The detect methods also accept an optional 'selector' parameter, allowing you to tweak the scope of the response ([see docs](https://www.kairos.com/docs/face-recognition) for more info on the detect selector). Here's an example of using detect via method that accepts image data in base64 format, sends it to the API, and returns face attributes:    

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
base64_data = 'iVBORw0KGgoAAA ... ABJRU5ErkJggg==\r\n';


// (3) ... as well as any optional parameters you wish to send
var options = { "selector" : "FULL" };


// (4) pass your params and callback to the function
kairos.detect(image_data, myCallback, options);
```


    
## List Your Galleries

This method returns a list of all galleries you've created:

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) pass your callback to the function
kairos.viewGalleries(myCallback);
```

## List Your Subjects

This method returns a list of all subjects for a given gallery:

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
var gallery_id = 'friends1';

// (3) pass your params and callback to the function
kairos.viewSubjectsInGallery(gallery_id, myCallback);
```

## Remove a Gallery

This method removes a given gallery:

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
var gallery_id = 'friends1';

// (3) pass your params and callback to the function
kairos.removeGallery(gallery_id, myCallback);
```



## Remove a Subject

This method removes a subject from given gallery:

```
// (1) set up your callback method
function myDetectCallback(response)
{
   alert(response.responseText);
}

// (2) prepare your parameters  
var subject_id = 'sam';
var gallery_id = 'friends1';

// (3) pass your params and callback to the function
kairos.removeSubjectFromGallery(subject_id, gallery_id, myCallback);
```

    
    
## Optional Parameters

Many of the Kairos API methods expose optional parameters for customizing the api response to fit your use-case. Here is an example of sending custom options in the detect call to limit the response to attributes pertaining to the eyes:

```
//...
var options = { "threshold" : 0.75, "minHeadScale" : 0.5, "selector" : "FACE" };
kairos.recognize(image_data, gallery_id, myCallback, options);
```


[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/kairos-api/kairos-facial-recognition-api)

##Support 
Have an issue? Visit our [Support page](http://www.kairos.com/support) or [create an issue on GitHub](https://github.com/kairosinc/Kairos-SDK-Javascript)
