<?php

  $from_name = $_POST['name'];
  $from_email = $_POST['email'];
  $phone = $_POST['phone'];
  if($from_name && $from_email && $phone){
 //$email="rkant9596@gmail.com";
 $email="form.shivali@gmail.com";
 //$email="rkant9596@gmail.com";
  $subject="Contact Info";
  $msg="Hi,<br>
  Contact information:<br>
  Name: ".$from_name."<br>Email: ".$phone."<br>Email: ".$from_email;
      $headers = "From: info@smartworldonline.in\r\n";
      $headers .= "Reply-To: info@smartworldonline.in\r\n";
      $headers .= "MIME-Version: 1.0\r\n";
      $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
      mail($email, $subject, $msg, $headers); 
echo "success";
  }else{
    echo "error";
  }
?>