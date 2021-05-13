class Game
{

    constructor()
{

}
getState()
    {
      var playerCountref=database.ref("gameState");
      playerCountref.on("value",function(data)
      {
        gameState=data.val();
      })

    }

    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }

   async  start()
    
    {

        if(gameState == 0)
        {

            player=new Player();
            var playerCountref=await database.ref("playerCount").once("value");
            if(playerCountref.exists())
            {
                playerCount=playerCountref.val();

                player.getCount();

            }
            
           
            form=new Form ();
            form.display();
        }
    }

    play()
    
    {

        form.hide();
        text("Game Start",120,100);
        Player.getplayerInfo();
        if(allplayers !== undefined)
        {
            var display_position=130;
            for(var plr in allplayers)
            {

                if(plr=="player"+player.Index)
                {

                    fill(red);
                }

                display_position=display_position+20;
                text(allplayers[plr].name + ": " + allplayers[plr].distance, 120,display_position)
            }

            if(keyIsDown(UP_ARROW) && player.index!==null)
            {
                player.distance=player.distance+15;
                player.update();
            }
        }

        


    }
}