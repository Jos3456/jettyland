<?php
// Redirect Apache / XAMPP traffic (localhost/jettyland) to the Node dev server on port 8080
header("Location: http://localhost:8080/");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=http://localhost:8080/">
    <title>Redirecting to App...</title>
    <script>
        window.location.href = "http://localhost:8080/";
    </script>
</head>
<body style="font-family: sans-serif; text-align: center; padding: 50px;">
    <h2>Starting GERO App...</h2>
    <p>If you are not redirected automatically, please click below:</p>
    <p><a href="http://localhost:8080/" style="font-size: 18px; color: #2563eb;">Open http://localhost:8080</a></p>
</body>
</html>
