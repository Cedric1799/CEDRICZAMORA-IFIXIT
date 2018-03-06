<?php
    require_once('connection.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE-edge, chrome=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
        <link rel="shortcut icon" href="ifixit logo.png" type="image/x-icon">
        <title>i F i x I T</title>
        <meta name="keywords" content="html5, seamntic,ui, library, framework, javascript, jquery, admin, theme"/>
        <link rel="stylesheet" href="semantic/dist/semantic.css">
        <link rel="stylesheet" href="CSS/animate.css">
        <link rel="stylesheet" href="CSS/main.css">
        <link rel="stylesheet" href="CSS/index.css">
        <script type="text/javascript" src="JavaScript/jquery-2.1.4.min.js"></script>
        <script type="text/javascript" src="semantic/dist/semantic.js"></script>
        <script type="text/javascript" src="JavaScript/login.js"></script>
    </head>
    <body id="login">
        <div class="ui container">
            <div class="ttl animated slideInRight"><b>iFixIT</b></div>
            <div class="des animated fadeInDown">
                <a style="color:white;">Copyright by Code Black 2018</a>
            </div>
        </div>
        <div class="ui center aligned grid">
            <div class="column">
                <div class="ui segments">
                    <div class="ui segments">
                        <h1 class="ui header" style="text-align: center;">Login Here !</h1>
                    </div>
                    <?php
                        if(isset($_GET['invalid'])){ ?>
                            <center><div class="ui error message" style="width: 300px; margin: 2em; text-align: center;">
                                <?php echo 'Invalid Username or Password! Try Again!'; ?>
                            </div></center>
                    <?php } ?>
                    <form class="ui form segment form5" method="POST" action="login.php">
                        <p style="text-align:center">Let's go ahead and get started</p>
                        <div class="field">
                            <label style="color: white">Username</label>
                            <div class="ui left icon input focus">
                                <i class="inverted circular user icon"></i>
                                <input type="text" placeholder="Username" name="username">
                            </div>
                        </div>
                        <div class="field">
                            <label style="color: white">Password</label>
                            <div class="ui left icon input focus">
                                <i class="inverted circular lock icon"></i>
                                <input type="password" placeholder="Password" name="password">
                            </div>
                        </div><br>
                        <div class="ui fluid large yellow submit button" style="border-radius: 20px;">
                            Log In
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>