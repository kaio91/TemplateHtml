$(function(){$("#removeTip").css("cursor","pointer"),$("#removeTip").on("click",function(){$("#tip").hide()});var a="blueimp.github.io"===window.location.hostname?"//jquery-file-upload.appspot.com/":"server/php/",b=$("<button/>").addClass("btn btn-primary").prop("disabled",!0).text("Processing...").on("click",function(){var a=$(this),b=a.data();a.off("click").text("Abort").on("click",function(){a.remove(),b.abort()}),b.submit().always(function(){a.remove()})});$("#fileupload").fileupload({url:a,dataType:"json",autoUpload:!1,acceptFileTypes:/(\.|\/)(gif|jpe?g|png)$/i,maxFileSize:5e6,disableImageResize:/Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),previewMaxWidth:100,previewMaxHeight:100,previewCrop:!0}).on("fileuploadadd",function(a,c){c.context=$("<div/>").appendTo("#files"),$.each(c.files,function(a,d){var e=$("<p/>").append($("<span/>").text(d.name));a||e.append("<br>").append(b.clone(!0).data(c)),e.appendTo(c.context)})}).on("fileuploadprocessalways",function(a,b){var c=b.index,d=b.files[c],e=$(b.context.children()[c]);d.preview&&e.prepend("<br>").prepend(d.preview),d.error&&e.append("<br>").append(d.error),c+1===b.files.length&&b.context.find("button").text("Upload").prop("disabled",!!b.files.error)}).on("fileuploadprogressall",function(a,b){var c=parseInt(b.loaded/b.total*100,10);$("#progress .progress-bar").css("width",c+"%")}).on("fileuploaddone",function(a,b){$.each(b.files,function(a,c){var d=$("<a>").attr("target","_blank").prop("href",c.url);$(b.context.children()[a]).wrap(d)})}).on("fileuploadfail",function(a,b){$.each(b.files,function(a,c){var d=$("<span/>").text(c.error);$(b.context.children()[a]).append("<br>").append(d)})}).prop("disabled",!$.support.fileInput).parent().addClass($.support.fileInput?void 0:"disabled"),$("filePicker").on("click",function(){filepicker.pick(function(a){console.log(a.url)})})});