function Player(n)
{
    this.id = 'p1';
    this.name = n;
    this.w = 40;
    this.h = 40;
    this.x = ($canvasBackGround.offsetWidth / 2) - (this.w / 2);
    this.y = $canvasBackGround.offsetHeight - this.h - 20;
    this.score = 0;

    this.TurnLeft = function ()
    {
        if (this.x < 0)
            this.x = 0;
        else
            this.x -= 5;
    };

    this.TurnRight = function ()
    {
        if (this.x + this.w > $canvasBackGround.offsetWidth)
            this.x = $canvasBackGround.offsetWidth - this.w;
        else
            this.x += 5;
    };

    this.Fire = function ()
    {
        if (new Date(new Date().getTime() - $lastMissile).getMilliseconds() > 200)
            NewMissile(this.id);
    };

    this.IncreaseScore = function ()
    {
        this.score++;
    };

    this.Draw = function ()
    {
        $backGroundContext.drawImage($imgPlayer, this.x, this.y, this.w, this.h);
        $backGroundContext.fillText(this.name, this.x, this.y + this.h + 10);
    };
}