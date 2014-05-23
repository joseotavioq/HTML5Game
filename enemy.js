function Enemy()
{
    this.id = 'i' + ($enemies.length + 1);
    this.w = 25;
    this.h = 25;
    this.x = Math.random() * $canvasBackGround.offsetWidth;
    this.y = 0;
    this.vX = (parseInt((Math.random() * 10) % 2) == 0) ? -1 : 1;
    this.vY = 4;
    this.isDead = false;

    this.MoveAhead = function ()
    {
        this.x += this.vX;
        this.y += this.vY;

        if ((this.x + this.w) > $canvasBackGround.offsetWidth)
        {
            this.vX *= -1;
            this.x = $canvasBackGround.offsetWidth - this.w;
        }

        if (this.x < 0)
        {
            this.vX *= -1;
            this.x = 0;
        }

        if ((this.y + this.h) > $canvasBackGround.offsetHeight)
        {
            this.vY *= -1;
            this.y = $canvasBackGround.offsetHeight - this.h;
        }

        if (this.y < 0)
        {
            this.vY *= -1;
            this.y = 0;
        }

        if (!this.isDead)
            if (CheckImpact($player, this))
                GameOver(true);
    };

    this.Draw = function ()
    {
        $backGroundContext.drawImage($imgEnemy, this.x, this.y, this.w, this.h);
    };
}