<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = htmlspecialchars($_POST['msg']);
    $to = "kavyamridula@gmail.com"; 
    $subject = "New Chat Message";
    $headers = "From: file:///Users/kavyamridulavenkatesan/Github/passproj/kv0110.github.io/resource_table.html"; // replace with real git link
    $body = "You received a new message:\n\n" . $message;

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Message failed to send.'); window.history.back();</script>";
    }
}
?>
