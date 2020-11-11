
<!DOCTYPE>
<html>
    <head>

    </head>
    <body>
        <audio id="som" src="audio/som.mp3"></audio>
    </body>
</html>



<?php
//include_once 'secao.php';
    
        
    //if(isset($_POST['btn-cadastrar'])): method="POST"
    $GLOBALS = false;
    if(isset($_POST['btn'])){
        $_SESSION['som'];
        //$GLOBALS = TRUE;
        header('Location: secao.php');

        
    
    }
?>

