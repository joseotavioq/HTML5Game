function Missile()
{
    this.id = 'm' + ($missiles.length + 1);
    this.w = 2;
    this.h = 3;
    this.x = ($player.x + ($player.w / 2));
    this.y = $player.y;
    this.vY = -5;
    this.isDead = false;

    this.Move = function ()
    {
        this.y += this.vY;

        if (this.y < 0)
        {
            this.y = 0;
            this.isDead = true;
        }

        if (!this.isDead)
        {
            for (i = 0; i < $enemies.length; i++)
            {
                if (CheckImpact($enemies[i], this))
                {
                    this.isDead = true;
                    $enemies[i].isDead = true;
                    $player.IncreaseScore();
                    NewEnemy();
                    break;
                }
            }
        }
    };

    this.Draw = function ()
    {
        $backGroundContext.fillRect(this.x, this.y, this.w, this.h);
    };
}