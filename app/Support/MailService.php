<?php


namespace App\Support;


use PHPMailer\PHPMailer\PHPMailer;

class MailService
{
    public function sendMailContact($name, $email, $phone, $message)
    {

        // Instantiation and passing `true` enables exceptions
        $mail = new PHPMailer(false);

        $nameE = substr_count($name, ' ') >= 1 ? explode(' ', $name)[0] :  $name;

        $template = file_get_contents(base_path('resources/views/mail/contact.html'));
        $template = str_replace('%name%', $nameE, $template);
        $template = str_replace('%name_complete%', $name, $template);
        $template = str_replace('%email%', $email, $template);
        $template = str_replace('%phone%', $phone, $template);
        $template = str_replace('%message%', $message, $template);

        try {
            //Server settings
            $mail->SMTPDebug = 0;                                       // Enable verbose debug output
            $mail->isSMTP();                                            // Set mailer to use SMTP
            $mail->CharSet = 'UTF-8';
            $mail->Host       = config('mail.host');  // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = config('mail.username');                    // SMTP username
            $mail->Password   = config('mail.password');                               // SMTP password
            $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom(config('mail.username'), 'Administração Renovare Urologia');
            $mail->addAddress('contato@renovareurologia.com.br');     // Add a recipient

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Nova mensagem de contato do site Renovare Urologia';
            $mail->Body    = $template;

            $mail->send();
        } catch (\Exception $e) {
            \Log::info($e->getMessage());
        }
    }
}
