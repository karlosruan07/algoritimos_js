<?php
    session_start();
?>
<!DOCTYPE HTML> 

<html>  
    <head>
        <title>Página cliente !</title>

    </head>
    <style>
        body{
            background: blueviolet;
            text-align: center;
            padding: 200px;
            
        }
    </style>
    <body>
        <form action="server.php" method="POST">
            
            <button type="submit" name="btn" class="btn">Clique aqui !</button>
            <!--<input id="btn" name="btn" type="button" value="Clique aqui !">
            <input type="button" value="Clique aqui2 !" id="btn"> -->
        </form>
    </body>
    

</html>