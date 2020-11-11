<?php

include_once 'server.php';
session_start();

?>

<html>
    <head>
        <meta http-equiv="refresh" content="5">
    </head>
</html>

<?php



//$GLOBALS = TRUE;
if(isset($_SESSION['som'])){
    clicou();

}



function clicou(){
        
    ?>
<script>
window.document.getElementById('som').play()
</script>
<?php
}
?>


