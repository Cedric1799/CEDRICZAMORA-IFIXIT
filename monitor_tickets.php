<?php
    require_once('connection.php');
    if($_SESSION['name'] == null){
        header('location: index.php?error='.session_id());
    }
    if($_SESSION['role'] == 'Employee'){
        header('location: monitoring.php?accessdenied='.session_id());
    }
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
        <link rel="stylesheet" href="semantic/dist/semantic.css"/>
        <link rel="stylesheet" href="CSS/grid.css">
        <link rel="stylesheet" href="CSS/main.css">
        <link href="css_js/jquery.dataTables.min.css" rel="stylesheet" />
        <link href="css_js/dataTables.semanticui.min.css" rel="stylesheet"/>
    </head>
    <body>
        <div class="ui wide sidebar right inverted vertical menu sidebarmessage" id="sidebarmessage">
            <a class="item">
                <div class="ui threaded comments">
                    <h3 class="header itemr">Messages</h3>
                    <form class="ui reply form">
                        <div class="field">
                            <textarea name="msg"></textarea>
                        </div>
                        <button class="ui blue labeled icon button" type="submit" value="message">
                            <i class="send icon"></i> Send Reply
                        </button>
                    </form>     
                </div>
            </a>
        </div>
        <div class="ui inverted borderless fixed top menu">
        <div class="header item">
                <img src="ifixit logo.png">&nbsp; &nbsp;
               <b> i F i x I T </b>
            </div>
            <div class="right menu">
                <div class="item">
                    <div class="ui simple dropdown item">
                        <i class="user icon"></i>
                        <?php echo $_SESSION['name']; ?><i class="dropdown icon"></i>
                        <div class="menu">
                            <a class="item" style="text-align: right;" href="logout.php">
                            Log Out&nbsp;<i class="sign out alternate icon"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui grid">
            <div class="row">
                <div id="sidebar" class="column" style="overflow-y: scroll;">
                        <div class="ui secondary vertical fluid menu">
                            <br>
                            <div class="ui horizontal divider">
                                <i class="user icon"></i>
                                &nbsp;I.T. Staff
                            </div>
                            <?php while($row = mysql_fetch_assoc($get_it_list)) { ?>
                                <a class="item" style="color: white; font-size: 13px;">
                                    <div class="ui mini icon buttons">
                                        <button class="ui inverted blue icon button"><i class="mail icon"></i></button>
                                        <button class="ui inverted green icon button"><i class="tasks icon"></i></button>
                                    </div>&nbsp;
                                <?php echo $name = $row['firstname']. ' ' .$row['lastname']; ?>
                                </a>
                            <?php } ?>
                            <div class="ui horizontal divider">
                                Employees&nbsp;
                                <i class="user icon"></i>
                            </div>
                            <?php while($row = mysql_fetch_assoc($get_nonit_list)) { ?>
                                <a class="item" style="color: white; font-size: 13px; padding-bottom: 5px;">
                                    <button class="mini ui inverted blue icon button"><i class="mail icon"></i></button>
                                    &nbsp; <?php echo $name =  $row['firstname']. ' ' .$row['lastname']; ?>
                                </a>
                            <?php } ?>
                                <a class="item">Abi</a>
                                <a class="item">Abby</a>
                                <a class="item">Abigail</a>
                                <a class="item">Vargas</a>
                                <a class="item">Datu</a>
                                <a class="item">John</a>
                                <a class="item">Cedric</a>
                                <a class="item">Zamora</a>
                                <a class="item">Angelique</a>
                                <a class="item">Chryste</a>
                                <a class="item">Pascua</a>
                                <a class="item">Esguerra</a>
                                <a class="item">Ana</a>
                                <a class="item">Mikaela</a>
                                <a class="item">Quizon</a>
                        </div>      
                </div>
                <div id="content" class="column">
                    <br><br><br>
                    <div class="ui one column stackable grid container">
                        <table class="ui striped selectable celled table" id="monitor" name="monitor">
                            <thead>
                                <tr id="sorttable">
                                    <th>Ticket Number</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Assignee</th>
                                    <th>Date Created</th>
                                    <th>Actions</th>
                                    
                                </tr>
                            </thead>    
                            <tbody>
                                <tr id="tickets">
                                    <td style="text-align:right;">TN1001</td>
                                    <td>Hardware Problem</td>
                                    <td>May sira</td>
                                    <td>
                                    <select class="ui status dropdown" style="height: inherit;">    
                                        <option value="default text"> </option>
                                        <option value="Open">Open Ticket </option>
                                        <option value="Backlogs">Backlog Ticket </option>
                                        <option value="Closed">Closed Ticket</option>
                                        <option value="Ongoing">Ongoing Ticket</option>
                                    </select>
                                    
                                    </td>
                                    <td></td>
                                    <td>February 27, 2018</td>
                                    <td style="text-align:center;"><a class="ui circular icon blue button"><i class="write icon"></i></a></td>
                                    
                                </tr>
                                <tr>
                                    <td style="text-align:right;">TN1002</td>
                                    <td>Hardware Problem</td>
                                    <td>May sira</td>
                                    <td>
                                    <select class="ui status dropdown" style="height: inherit;">    
                                        <option value="default text"> </option>
                                        <option value="Open">Open Ticket </option>
                                        <option value="Backlogs">Backlog Ticket </option>
                                        <option value="Closed">Closed Ticket</option>
                                        <option value="Ongoing">Ongoing Ticket</option>
                                    </select>
                                    
                                    </td>
                                    <td></td>
                                    <td>February 27, 2018</td>
                                    <td style="text-align:center;"><a class="ui circular icon blue button"><i class="write icon"></i></a></td>
                                </tr>
                                <tr>
                                    <td style="text-align:right;">TN1001</td>
                                    <td>Hardware Problem</td>
                                    <td>May sira</td>
                                    <td>
                                    <select class="ui status dropdown" style="height: inherit;" >    
                                        <option value="default text"> </option>
                                        <option value="Open">Open Ticket </option>
                                        <option value="Backlogs">Backlog Ticket </option>
                                        <option value="Closed">Closed Ticket</option>
                                        <option value="Ongoing">Ongoing Ticket</option>
                                    </select>
                                    
                                    </td>
                                    <td></td>
                                    <td>February 27, 2018</td>
                                    <td style="text-align:center;"><a class="ui circular icon blue button"><i class="write icon"></i></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="ui large modal" id="request_modal">
            <i class="close icon"></i>
            <div class="header">Ticket Request</div>

            <div class="scrolling content">
                    <form class="ui form" method="POST" id="request_form">
                        <div class="field">
                            <div class="two fields">
                                <div class="eight wide field">
                                    <label>Employee Name</label>
                                    <div class="ui fluid left icon input focus">
                                        <input type="text" name="name" placeholder="Employee Name" name="Employee_name" value= "" />
                                        <i class="inverted circular user icon"></i>
                                    </div>
                                </div>
                                <div class="eight wide field">
                                    <label>Department</label>
                                    <div class="ui fluid left icon input focus">
                                        <input type="text" name="name" placeholder="Department" name="Department" value= ""/>
                                        <i class="inverted circular user icon"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="two fields">
                                <div class="eight wide field">
                                    <label>Category</label>
                                    <select class="ui dropdown" id="category">
                                        <option></option>
                                        <option value="Software Problem">Software Problem</option>
                                        <option value="Network Problem">Network Problem</option>
                                        <option value="Hardware Problem">Hardware Problem</option>
                                    </select>
                                </div>
                                
                                <div class="eight wide field">
                                    <label>Assigned To(Optional)</label>
                                    <select class="ui simple dropdown" id="assignee">
                                        <option value="default text"></option>
                                        <option value="Cedric Zamora">Cedric Zamora</div>
                                    </select>
                                </div>
                            </div>

                            <label><strong>Description</strong></label>
                            <textarea name="description" placeholder="Text here.." rows="5"></textarea><br>
                            </br>
                            <div class="ui error message"></div>
                            <div class="actions" align="right">
                                <div class="ui red deny button" id="cancel"><i class="remove icon"></i>Cancel</div>
                                <button class="ui green button" id="add_request">
                                    <i class="checkmark icon"></i>Submit
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>

        <div class="ui standard modal" id="edit_modal">
            <i class="close icon"></i>
            <div class="header">Edit Request</div>

            <div class="scrolling content">
                    <form class="ui form" method="POST" id="edit_form">
                        <div class="field">
                            <div class="two fields">
                                <div class="eight wide field">
                                    <label>Ticket Number</label>
                                    <div class="ui fluid left icon input focus">
                                        <input type="text" name="name" placeholder="Employee Name" name="Employee_name" value= "" readonly/>
                                        <i class="inverted circular user icon"></i>
                                    </div>
                                </div>
                                <div class="eight wide field">
                                    <label>Category</label>
                                    <div class="ui fluid left icon input focus">
                                        <input type="text" name="name" placeholder="Department" name="Department" value= "" readonly/>
                                        <i class="inverted circular user icon"></i>
                                    </div>
                                </div>
                            </div>

                            <div class="sixteen wide field">
                                <label>Assignee</label>
                                <div class="ui fluid left icon input focus">                  
                                    <input type="text" id="assignee" name="assignee" placeholder="Department" id="dept" value= "" readonly />
                                    <i class="inverted circular user icon"></i>
                                </div>
                            </div>
                           

                            <label><strong>Description</strong></label>
                            <textarea name="description" placeholder="Text here.." rows="5"></textarea><br>
                            </br>
                            <div class="actions" align="right">
                                <div class="ui red deny button" id="cancel"><i class="remove icon"></i>Cancel</div>
                                <button class="ui green button"><i class="checkmark icon"></i>Submit</button>
                            </div>
                        </div>
                    </form>
            </div>
        </div>

        <div class="ui standard modal" id="Closed">
            <i class="close icon"></i>
            <div class="header" style="background:#e2980e;">
                <h1>Ticket Details</h1>
            </div>
                <div class="scrolling content">
                    <div class="ui divided selection list">
                        <a class="item">Ticket Number : </a>
                        <a class="item">Creator : </a>
                        <a class="item">Department : </a>
                        <a class="item">Details : </a>
                    <div class="ui divider" style="text-align: left;">&nbsp;</div>
                        <div class="ui form">
                            <div class="field">
                            <label> Remarks : </label>
                            <textarea id="remarks" name="remarks"></textarea>
                        </div>
                    <div class="actions" align="right">
                        <div id="cancel" class="ui red deny button"><i class="remove icon"></i>Cancel</div>
                        <button type="submit" class="ui green submit button"><i class="checkmark icon"></i>Submit</div>
                    </div>
                    </div>
                </div>
        </div>

        <div class="ui standard modal" id="Backlogs">
            <i class="close icon"></i>
            <div class="header" style="background:#e2980e;">
                <h1>Backlog</h1>
            </div>
            <div class=" scrolling content">
            <div class = "ui divided selection list">
                <a class="item">Ticket Number : </a>
                <a class="item">Creator : </a>
                <a class="item">Department : </a>
                <a class="item">Details : </a>
            <div class="ui divider">&nbsp;</div>
            <div class="ui form">
                <div class="field">
                <label> Description : </label>
                <textarea id="remarks" name="remarks"></textarea>
                </div>
            <div class="actions" align= "right">
                <div id="cancel" class="ui red deny button"><i class="remove icon"></i>Cancel</div>
                    <button type="submit" class="ui green button"><i class="checkmark icon"></i>Submit</button>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="css_js/jquery-1.12.4.js"></script>
        <script type="text/javascript" src="semantic/dist/semantic.js"></script>
        <script type="text/javascript" src="Javascript/main.js"></script>
        <script type="text/javascript" src="css_js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="css_js/dataTables.semanticui.min.js"></script>
        <script type="text/javascript" src="Javascript/scripts.js"></script>
    </body>
</html>