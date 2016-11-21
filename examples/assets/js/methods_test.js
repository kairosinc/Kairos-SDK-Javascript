var methods_test = methods_test || {}

methods_test = {
    init: function () {
      $("#apiMethodsTests").hide();
      this.setActions();
    },
    setActions: function () {
      	var self = this;
      	$("#enterApiKeys").click(function () {
      		$("#loader").show();
      		if ($("#app_id").val() != "" && $("#app_key").val() != "") {
            	self.kairos = new Kairos($("#app_id").val(), $("#app_key").val());
              	self.kairos.checkAuthentication(function(cb){
              		if (cb.statusText != "error") {
              			$("#loader").hide();
              			$("#apiMethodsTests").show();
              		}
              		else {
              			$("#loader").hide();
              			$("#apiMethodsTests").hide();
              			$("#authenticationError").html("Authentication Error")
              		}
              	});
            }
            else {
            	$("#loader").hide();
           		$("#apiMethodsTests").hide();
          		$("#authenticationError").html("Plese enter your API keys")
            }
    	});
      	$("#testViewGalleries").click(function () {
      		$("#loader").show();
      		$("#view_data").empty();
            self.kairos.viewGalleries(self.success_cb);
        });
        $("#testEnroll").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#enrollForm input")) == true) {
        		$("#loader").show();
            	var image = $("#enrollForm .image").val();
            	var subject_id = $("#enrollForm .subject_id").val();
            	var gallery_name = $("#enrollForm .gallery_name").val();
            	self.kairos.enroll(image, gallery_name, subject_id, self.success_cb);
        	}
        });

        $("#testViewSubjectsInGallery").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#viewSubjectsInGalleryForm input")) == true) {
        		$("#loader").show();
            	var gallery_name = $("#viewSubjectsInGalleryForm .gallery_name").val();
            	self.kairos.viewSubjectsInGallery(gallery_name, self.success_cb);
        	}
        });

        $("#testRemoveSubjectFromGallery").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#removeSubjectFromGalleryForm input")) == true) {
        		$("#loader").show();
            	var subject_id = $("#removeSubjectFromGalleryForm .subject_id").val();
            	var gallery_name = $("#removeSubjectFromGalleryForm .gallery_name").val();
                self.kairos.removeSubjectFromGallery(subject_id, gallery_name, self.success_cb);
        	}
        });

        $("#testRemoveGallery").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#removeGalleryForm input")) == true) {
        		$("#loader").show();
            	var gallery_name = $("#removeGalleryForm .gallery_name").val();
                self.kairos.removeGallery(gallery_name, self.success_cb);
        	}
        });

        $("#testRecognize").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#recognizeForm input")) == true) {
        		$("#loader").show();
            	var image = $("#recognizeForm .image").val();
                var gallery_name = $("#recognizeForm .gallery_name").val();
                self.kairos.recognize(image, gallery_name, self.success_cb);
        	}
        });

        $("#testDetect").click(function () {
        	$("#view_data").empty();
        	if (self.validateMe($("#detectForm input")) == true) {
        		$("#loader").show();
            	var image = $("#detectForm .image").val();
                self.kairos.detect(image, self.success_cb);
        	}
        });	

      $("#testVerify").click(function () {
        $("#view_data").empty();
        if (self.validateMe($("#verifyForm input")) == true) {
          $("#loader").show();
            var image = $("#verifyForm .image").val();
        	var subject_id = $("#verifyForm .subject_id").val();
        	var gallery_name = $("#verifyForm .gallery_name").val();
            self.kairos.verify(image, gallery_name, subject_id, self.success_cb);
        }
      });
    },
    validateMe: function(obj) {
    	var isValid = true;
    	errorAlert = "";
		obj.each(function () {
    		if($(this).attr("type") == "text") {
    			if($(this).val() == "") {
    				isValid = false;
    				errorAlert = errorAlert + "Please enter a value for " + $(this).attr("name") + "\n";
    			}
    		}
    	});
    	if (isValid == false) {
    		alert(errorAlert)
    	}
    	return isValid;
    },
    success_cb: function(data){
      $("#view_data").empty();
      $("#view_data").html(data.responseText);
      $("#loader").hide();
      $("input:text").val("");
      // console.log(data)
  	}
    
}
$(function () {
  methods_test.init()
});