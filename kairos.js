/* * * Kairos Javascript SDK * * * *
* Authored by Eric Turner 
* http://kairos.com
*/




/* Constructor - Creates and returns an instance of the Kairos client
  @param app_id  : your app_id
  @param api_key : your api_key */
var Kairos = function(app_id, api_key) 
{
  this.app_id   = app_id;
  this.api_key  = api_key;
  this.api_host = 'https://api.kairos.com/';
};




/* Kairos requires jQuery */
function isJQueryAvailable() {
    
  if (typeof jQuery === 'undefined') {
      return false;
  } 

  return true;
}




/* Authentication checker */
Kairos.prototype.authenticationProvided = function() {
    
  if((!this.api_key) || (!this.app_id))
  {
      return false;
  }

  return true;
}



/* Detect faces in an image
  @param image_data : this is the base64 data of the image
  @param callback   : your callback function will be called when the request completes 
  @param options    : [Optional] an object containing any additional parameters you wish to append to the request */
Kairos.prototype.detect = function(image_data, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!image_data) {
    console.log('Kairos Error: the image_data parameter is required');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'detect';

	var data = { 'image' : image_data };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

	var header_settings = {
		"Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

  	jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};




/* Enroll an image
  @param image_data : this is the base64 data of the image
  @param gallery_id : the gallery name you want to enroll into
  @param subject_id : the subject id you want to enroll the image under
  @param callback   : your callback function will be called when the request completes 
  @param options    : [Optional] an object containing any additional parameters you wish to append to the request */
Kairos.prototype.enroll = function(image_data, gallery_id, subject_id, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!image_data) {
    console.log('Kairos Error: the image_data parameter is required');
    return;
  }

  if(!gallery_id) {
    console.log('Kairos Error: the gallery_id parameter is required');
    return;
  }

  if(!subject_id) {
    console.log('Kairos Error: the subject_id parameter is required');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'enroll';

  var data = { 'image' : image_data , 'gallery_name' : gallery_id, 'subject_id' : subject_id};

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};




/* Recognize faces in an image
  @param image_data : this is the base64 data of the image
  @param gallery_id : the gallery name you want to enroll into
  @param callback   : your callback function will be called when the request completes 
  @param options    : [Optional] an object containing any additional parameters you wish to append to the request */
Kairos.prototype.recognize = function(image_data, gallery_id, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!image_data) {
    console.log('Kairos Error: the image_data parameter is required');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'recognize';

  var data = { 'image' : image_data , 'gallery_name' : gallery_id };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};





/* Lists the names of all of your galleries
  @param callback   : your callback function will be called when the request completes 
  @param options    : [Optional] an object containing any additional parameters you wish to append to the request */
Kairos.prototype.viewGalleries = function(callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'gallery/list_all';

  var data = { };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};





/* Lists all subjects currently enrolled in a given gallery
  @param gallery_id : the gallery name for the gallery you wish to return info about
  @param callback   : your callback function will be called when the request completes 
  @param options    : [Optional] an object containing any additional parameters you wish to append to the request */
Kairos.prototype.viewSubjectsInGallery = function(gallery_id, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!gallery_id) {
    console.log('Kairos Error: the gallery_id parameter is required');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'gallery/view';

  var data = { 'gallery_name' : gallery_id };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};







/* Remove a gallery
  @param gallery_id : the gallery name you want to enroll into
  @param callback   : your callback function will be called when the request completes */
Kairos.prototype.removeGallery = function(gallery_id, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!gallery_id) {
    console.log('Kairos Error: the gallery_id parameter is required');
    return;
  }
  
  var url = this.api_host + 'gallery/remove';

  var data = { 'gallery_name' : gallery_id };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};




/* Remove a subject from a gallery
  @param subject_id : the subject id you want to enroll the image under
  @param gallery_id : the gallery name you want to enroll into
  @param callback   : your callback function will be called when the request completes */
Kairos.prototype.removeSubjectFromGallery = function(subject_id, gallery_id, callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!gallery_id) {
    console.log('Kairos Error: the gallery_id parameter is required');
    return;
  }

  if(!subject_id) {
    console.log('Kairos Error: the subject_id parameter is required');
    return;
  }
  
  var url = this.api_host + 'gallery/remove_subject';

  var data = { 'gallery_name' : gallery_id, 'subject_id' : subject_id};

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};

Kairos.prototype.checkAuthentication = function(callback, options) {

  if(this.authenticationProvided() == false) {
    console.log('Kairos Error: set your app_id and api_key before calling this method');
    return;
  }

  if(isJQueryAvailable() == false) {
    console.log('Kairos Error: jQuery is required to use Kairos');
    return;
  }

  if(!callback || !jQuery.isFunction(callback)) {
    console.log('Kairos Error: the callback parameter is required and must be of type [function]');
    return;
  }
  
  var url = this.api_host + 'gallery/list_all';

  var data = { };

  if(!jQuery.isEmptyObject(options)) {
      data = jQuery.extend(data, options);
  }

  var header_settings = {
    "Content-type"    : "application/json",
        "app_id"          : this.app_id,
        "app_key"         : this.api_key
      };

    jQuery.ajax(url, {
        headers  : header_settings,
        type     : "POST",
        dataType : "raw",
        data     : JSON.stringify(data),
        success  : callback,
        error    : callback
      });
};
