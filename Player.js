class Player{
constructor(x,y){
this.x=x;
this.y=y;
this.spt=createSprite(this.x,this.y,50,50);
this.spt.shapeColor="orange";
player.spt.addAnimation(player,playerAnimation);
}

move(xdir,ydir){
this.spt.x+=xdir*grid
this.spt.x+=ydir*grid
}
keyPressed()
}


