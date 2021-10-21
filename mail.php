<?php

if (isset($_POST['name']) && isset($_POST['message']) && isset($_POST['email'])) {

	$subject = htmlspecialchars($_POST['subject']);
	$message = htmlspecialchars($_POST['message']);
	$email = htmlspecialchars($_POST['email']);
	$name = htmlspecialchars($_POST['name']);

	$response = mail('jonathan.viault86@gmail.com', $subject, $message, 'From : ' . $email);
	if ($response) {
		echo '<p>Votre message a bien été envoyé.</p>';
	}
	else {
		echo 'L\'envoi a échoué';
	}
}

?>