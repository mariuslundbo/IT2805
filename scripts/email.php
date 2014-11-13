<?php
	$to = "";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$msg = $_POST["message"];
	
	$message = $subject."\n\n".
		"From: ".$name."\n".
		"Email: ".$email."\n\n".
		"Message:\n\n".$msg;

	// send email
	if(!filter_var("someone@example....com", FILTER_VALIDATE_EMAIL) || strlen($to) < 1 || strlen($name) < 1 || strlen($subject) < 1 || strlen($msg) < 1) {		// Not valid input
		header("Location: ../contact/after.html");
	}
	else {
		
		mail($to,$subject,$message);				// Send email
		
		header("Location: ../contact/after.html");	// Send user to page after mail is sent
	}
?>


