<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="refresh" content="5">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <audio id="som" src="audio/som.mp3" style="display: none;"></audio>
    <h1>Script de Som !</h1>

    <?php
        echo 'OLá';
    ?>
    
    <input type="button" value="Clique aqui" id="som" onclick="som()">
    <script>

        function som() {
        /*var context = new AudioContext()
        oscillator = context.createOscillator()
        oscillator.type = 'sine'   //sine, square, triangle, sawtooth
        oscillator.connect(context.destination)
        oscillator.start()*/

        document.getElementById('som').play()
        
    
        
        
        
       
        }
    </script>
</body>
</html>