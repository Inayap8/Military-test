var lbullet,lwall

function collided(lbullet,lwall)
{
    bulletright=lbullet.x+lbullet.width;
    wallleft=lwall.x;
    if (bulletright>=wallleft)
    {

        return true
    }
        return false;  
 }