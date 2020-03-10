
var Player1Score
var Player2Score
var Player1Strike
var Player2Strike

case 1:
    newRef= "strike.png"; 
    addStrike ()
    break
case 2:
    newRef= "plusOne.png"; 
    addScore ()
    break
case 3:
    newRef= "plusOne.png"; 
    addScore ()
    break
case 4:
    newRef= "d1.png"; 
    break
case 5:
    newRef= "d1.png"; 
    break
case 6: 
    newRef= "d1.png"; 
    break

func addScore (){
    if (p1Turn){
        Player1Score++
        updateScoreDisplay()
    }
     if (p2Turn){
        Player1Score++
        updateScoreDisplay()
    }
}

func addStrike (){
    if (p1Turn){
        Player1Strike++
        updateScoreDisplay()
        if (Player1Strike >= 3)
        {
            strikeOut();
        }
    }
     if (p2Turn){
       Player2Strike++
        updateScoreDisplay()
        if (Player2Strike >= 3)
        {
            strikeOut();
        }
    }
}

func strikeOut {

}