var $canvasBackGround = null;
var $backGroundContext = null;

var $firePressed = false;
var $leftPressed = false;
var $rightPressed = false;

var $player = null;
var $enemies = [];
var $missiles = [];

var $lastMissile = new Date().getTime();

var $imgEnemy = new Image();
$imgEnemy.src = 'http://4.bp.blogspot.com/-ejYlk6jp0lU/ULZFZvz1t-I/AAAAAAAAAOU/5YD1DHEmMuY/s400/inimigo.png';

var $imgPlayer = new Image();
$imgPlayer.src = 'http://4.bp.blogspot.com/-z_GyWwHvBRU/ULZFaF4Hy7I/AAAAAAAAAOg/cli9rduX-Lg/s400/player.png';