<?php   
    session_start();
    unset($_SESSION['username']);
    unset($_SESSION['userID']);
    unset($_SESSION['name']);
    unset($_SESSION['dept']);
    unset($_SESSION['role']);

    if(session_destroy()) {
        header("Location: index.php");
    }
    exit;
?>