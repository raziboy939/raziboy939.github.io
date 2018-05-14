<?php
// check if fields passed are empty

if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['graduatingyear'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
   

	
$name = $_POST['name'];
$email_address = $_POST['email'];
$graduatingyear = $_POST['graduatingyear'];
$terms= $_POST['terms'];
	
// create email body and send it	
$to = 'support@collegebetter.com'; // PUT YOUR EMAIL ADDRESS HERE
$email_subject = "CollegeBetter Testimonial form:  $name"; // EDIT THE EMAIL SUBJECT LINE HERE
$email_body = "You have received a new message from the Testimonial form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: $email_address\n\nGraduating Year:\n$graduatingyear\n\nTerms participated:\n$terms
";
$headers = "From: support@collegebetter.com\n";
$headers .= "Reply-To: $email_address";	

	$headers .= "Return-Path: support@collegebetter.com\r\n";
	$headers .= "X-Mailer: PHP \r\n";
mail($to,$email_subject,$email_body,$headers);

echo "Thank you for submitting your testimonial!";
return true;			
?>