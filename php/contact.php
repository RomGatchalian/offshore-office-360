<?php

    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;

    // Load Composer's autoloader
    require '../vendor/autoload.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    //Server settings
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.1and1.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'technical.support@151272810036809.info';                     // SMTP username
    $mail->Password   = 'Kam0teQu3!!!';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('noreply@offshoreoffice360.com', 'OffshoreOffice360 Inquiry Mailer');
    $mail->addAddress('romgatchalian@gmail.com', 'OffshoreOffice360');     // Add a recipient

    $services = $_POST["services"];

    $service_output = array();
    foreach($services as $service){
      $service_output[] = $service;
    }

    $content  = "<b>Full Name: </b>"      . $_POST["name"]    . "<br>";
    $content .= "<b>Company: </b>" . $_POST["company"]   . "<br>";
    $content .= "<b>Email: </b>" . $_POST["email"]   . "<br>";
    $content .= "<b>Contact Number: </b>" . $_POST["contact_no"]   . "<br>";
    $content .= "<b>Address: </b>"     . $_POST["address"]   . "<br>";
    $content .= "<b>Company Related: </b>"     . $_POST["company_related"]   . "<br>";
    $content .= "<b>Services: </b>"     . implode(', ', $service_output) . "<br>";
   
    if(!empty($_POST["others_specify"]) && isset($_POST["others_specify"]))
    {
        $content .= "<b>Others: </b>"     . $_POST["others_specify"]   . "<br>";
    }
   
    $content .= "<b>Number of people looking to hire: </b>"     . $_POST["people_quantity"]   . "<br>";
    $content .= "<b>Best time to call: </b>"     . $_POST["call_time"]   . "<br>";
    $content .= "<b>Timezone: </b>"     . $_POST["call_timezone"]   . "<br>";
    
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'OFFSHORE OFFICE360 Contact Form Inquiry';
    $mail->Body    =  $content;

    if (!$mail->send()) {

        $result = array(
            "sendstatus" => 0
        );

        echo json_encode($result);

    } else {

        $result = array(
            "sendstatus" => 1
        );

        echo json_encode($result);

    }

?>