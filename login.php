<?php
    require_once('connection.php');

    $username = $_POST['username'];
    $password = $_POST['password'];

    $username = mysql_real_escape_string(stripcslashes($username));
    $password = mysql_real_escape_string(stripcslashes($password));

    $user_login = mysql_query("SELECT * FROM users a INNER JOIN department b ON a.dept_ID = b.deptID INNER JOIN roles c ON a.role_ID = c.roleID
                                WHERE username = '$username' AND password = '$password'") OR DIE("Failed to query database".mysql_error());

    $row = mysql_fetch_assoc($user_login);
    if($row['username'] == $username && $row['password'] == $password)
    {
        $_SESSION['userID'] = $row['userID'];
        $_SESSION['name'] = $row['firstname']. ' '.$row['lastname'];
        $_SESSION['department'] = $row['dept'];
        $_SESSION['role'] = $row['role'];

        if($row['role'] == 'Employee')
        {
            header("location: monitoring.php");
        }
        else
        {
            header('location: monitor_tickets.php');
        }
    }
    else
    {
        header('location: index.php?invalid='.session_id());
    }
?>