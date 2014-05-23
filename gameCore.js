function NewPlayer()
{
    var name;
    do
    {
        name = prompt('Name');
    } while (name == null || name.length < 3);
  
    $player = new Player(name);  
}

function NewEnemy(quantity)
{
    $enemies.push(new Enemy());

    if (quantity != null && quantity > 0)
        setTimeout('NewEnemy(' + (quantity - 1) + ');', 200);
}

function NewMissile()
{
    $missiles.push(new Missile());
    $lastMissile = new Date().getTime();
}

function NewGame()
{  
    GameOver(false);
    NewPlayer();
    NewEnemy(10);
}

function RefreshScreen()
{  
    GCCollect();
    MoveAll();
    DrawAll();
}

function GameOver(showPop)
{
    var scoreFinal = ($player != null) ? $player.score : 0;
    $player = null;

    for (var i = 0; i < $missiles.length; i++)
        $missiles[i].isDead = true;

    for (var i = 0; i < $enemies.length; i++)
        $enemies[i].isDead = true;

    GCCollect();

    if (showPop)
        alert('GAME OVER! Score: ' + scoreFinal);
}

function MoveAll()
{
    if ($player != null)
    {
        if ($leftPressed)
            $player.TurnLeft();

        if ($rightPressed)
            $player.TurnRight();

        if ($firePressed)
            $player.Fire();

        for (var i = 0; i < $missiles.length; i++)
            $missiles[i].Move();
    }

    for (var i = 0; i < $enemies.length; i++)
        $enemies[i].MoveAhead();
}

function DrawAll()
{
    $backGroundContext.clearRect(0, 0, $canvasBackGround.offsetWidth, $canvasBackGround.offsetHeight);

    var currentScore = ($player != null) ? $player.score : 0;
    $backGroundContext.fillText('Score: ' + currentScore, $canvasBackGround.offsetWidth - 60, 15);
  
    if ($player != null)
    {
        $player.Draw();
  
        for (var i = 0; i < $missiles.length; i++)
            $missiles[i].Draw();

        for (var i = 0; i < $enemies.length; i++)
            $enemies[i].Draw();
    }
}

function GCCollect()
{  
    for (var i = $missiles.length - 1; i >= 0; i--)
        if ($missiles[i].isDead)
            $missiles.splice(i, 1);

    for (var i = $enemies.length - 1; i >= 0; i--)
        if ($enemies[i].isDead)
            $enemies.splice(i, 1);

    if ($player != null && $player.isDead)
        $player = null;
}

function CheckImpact(a, b)
{  
    return a.x < (b.x + b.w) && (a.x + a.w) > b.x && a.y < (b.y + b.h) && (a.y + a.h) > b.y;  
}

window.onload = function ()
{
    $canvasBackGround = document.getElementById('canvasBackGround');
    $backGroundContext = $canvasBackGround.getContext('2d');
    $backGroundContext.fillStyle = "#FFFFFF";
    $backGroundContext.font = "12px Tahoma";

    document.onkeydown = function (e)
    {
        if (e.which == 37)
            $leftPressed = true;

        if (e.which == 39)
            $rightPressed = true;

        if (e.which == 70)
            $firePressed = true;
    };

    document.onkeyup = function (e)
    {
        if (e.which == 37)
            $leftPressed = false;

        if (e.which == 39)
            $rightPressed = false;

        if (e.which == 70)
            $firePressed = false;
    };

    setInterval('RefreshScreen()', 1000 / 30);
};