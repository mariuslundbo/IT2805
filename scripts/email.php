<?php
	$to = "";//"andrkje@stud.ntnu.no";
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$msg = $_POST["message"];
	
	$message =
		"Subject: ".$subject."\n".
		"From: ".$name."\n".
		"Email: ".$email."\n\n".
		"Message:\n\n".$msg;

	// send email
	if(!filter_var($email, FILTER_VALIDATE_EMAIL) || !filter_var($to, FILTER_VALIDATE_EMAIL) || strlen($name) < 1 || strlen($subject) < 1 || strlen($msg) < 1) {		// Not valid input
		header("Location: ../contact/error.html");	// Send user to error page
	}
	else {
		mail($to,$subject,$message);				// Send email
		
		header("Location: ../contact/after.html");	// Send user to page after mail is sent
	}
?>
