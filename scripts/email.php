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
	mail($to,$subject,$message);
	
	// Send user to page after mail is sent
	header("Location: ../contact/after.html");
?>


