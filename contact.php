<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "jouw-email@example.com";  // Vervang dit met het MEES contact e-mailadres
    $subject = "Nieuw bericht van $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Bedankt! Je bericht is verzonden.";
}
?>