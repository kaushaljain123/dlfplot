function set_country_code(e){$("#hidden_country_code").val(e)}function mobile_no_enquiry(e,r,o){$(".loading").show();var l=$("#"+e).val(),a=$("#hidden_country_code").val(),t=$("#template").val(),_=$("#lead_source").val(),i=$("#property_id").val(),d=$("#city_id").val(),n=$("#lead_method").val(),u=$("#refer_url").val(),c=$("#lead_origin").val(),m=$("#request_url").val(),s=$("#domain_url").val(),v=$("#browser").val();$.ajax({type:"POST",url:s+"/index.php/Common/mobile_enquiry_validate",dataType:"json",data:{mobile:l,country_code:a,template:t,lead_source:_,property_id:i,city_id:d,lead_method:n,refer_url:u,lead_origin:c,request_url:m,browser:v,form_source:o},success:function(o){$(".loading").hide(),202==o.st?$("#"+e+"_error").html(o.mobile):200==o.st&&($("#"+r).html(o.msg),gtag_report_conversion(m+"/thanks"))}})}function complete_enquiry_form(e,r,o,l,a){$(".loading").show();var t=$("#"+e).val(),_=$("#"+r).val(),i=$("#"+o).val(),d=$("#hidden_country_code").val(),n=$("#template").val(),u=$("#lead_source").val(),c=$("#property_id").val(),m=$("#city_id").val(),s=$("#lead_method").val(),v=$("#refer_url").val(),p=$("#lead_origin").val(),y=$("#request_url").val(),h=$("#domain_url").val(),g=$("#browser").val();$.ajax({type:"POST",url:h+"/index.php/common/complete_enquiry_validate",dataType:"json",data:{mobile:i,country_code:d,template:n,lead_source:u,property_id:c,city_id:m,lead_method:s,refer_url:v,lead_origin:p,request_url:y,browser:g,name:t,email:_,form_source:a},success:function(a){$(".loading").hide(),202==a.st?($("#"+e+"_error").html(a.name),$("#"+r+"_error").html(a.email),$("#"+o+"_error").html(a.mobile)):200==a.st&&($("#"+l).html(a.msg),gtag_report_conversion(y+"/thanks"))}})}function gtag_report_conversion(e){}