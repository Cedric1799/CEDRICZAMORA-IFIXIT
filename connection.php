<?php
    session_start();

    $conn = new mysqli("localhost", "root", "", "ifixit");

    mysql_connect("localhost", "root", "");
    mysql_select_db("ifixit");

    $get_it_list = mysql_query("SELECT * FROM users WHERE role_ID = '2' ") or die("Failed to query database".mysql_error());

    $get_nonit_list = mysql_query("SELECT * FROM users WHERE role_ID = '3' ")or die("Failed to query database".mysql_error());

?>