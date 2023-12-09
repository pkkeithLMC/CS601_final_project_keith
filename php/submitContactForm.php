<?php
/*submitContactForm.php
Processes feedback form data 
*/

//Construct message to be sent 
$message = 
    "From: $_POST[salute] $_POST[firstName] $_POST[lastName]\r\n".
    "E-mail address: $_POST[email]\r\n".
    "Phone number: $_POST[phone]\r\n".
    "Subject: $_POST[subject]\r\n".
    "$_POST[message]\r\n". 
    "Contact Preference:";

if( !empty($_POST['by_mail'])){
    $message .= " By e-mail";
}

if( !empty($_POST['by_text'])){
    $message .= " By e-text";
}

if( !empty($_POST['by_call'])){
    $message .= " By calling";
}

$message .= "\r\n";

//Send e-mail to me
$header = "From: $_POST[email]\r\n";
mail("pkkeith@bu.edu", $_POST['subject'],
    $message, $header);

//E-mail message for the user,
$messageToUser =
    "Dear $_POST[salute] $_POST[firstName] $_POST[lastName]:\r\n".
    "The following message was received from you 
    by P. Kevin Keith:\r\n\r\n".
    $message.
    "------------------------\r\n".
    "Thank you for the feedback.\r\n".
    "I will respond shortly\r\n".
    "------------------------\r\n";


//Sends e-mail confirmation 
$headerToUser = "From: pkkeith@bu.edu\r\n";
mail($_POST['email'], "Re: $_POST[subject]",
    $messageToUser, $headerToUser);

//Transforms confirmation message to HTML 5 format for
//display in the client's browser
$display = str_replace("\r\n", "\r\n<br>", $messageToUser);
$display = "<!DOCTYPE html>
    <html lang='en'>
    <head>
        <meta charset='utf-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <!-- fontawesome cdn -->
        <link href='../css/globals.css' rel='stylesheet'>
        <link href='../css/style.css' rel='stylesheet'>
        <script src='../js/nav-script.js' defer></script>
        <title>Kevin Keith</title></head>
    <body>
        <nav class = 'nav'></nav>
        <section class='php_response container'>
            <h1>Contact Reponse</h1>
            <div class='response'>$display</div>
        </section>
    </body>
    </html>";
echo $display;

//Logs the message in data/feedback.txt on the web server
$fileVar = fopen("../data/feedback.txt", "a")
    or die("Error: Could not open the log file.");
fwrite($fileVar,
    "\n-------------------------------------------------------\n")
    or die("Error: Could not write divider to the log file.");
fwrite($fileVar, "Date received: ".date("jS \of F, Y \a\\t H:i:s\n"))
    or die("Error: Could not write date to the log file.");
fwrite($fileVar, $message)
    or die("Error: Could not write message to the log file.");
?>
