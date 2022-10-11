class Card{
    
    constructor(x,y,type){

        this.body = createSprite(200,200,50,50);
        switch(type){
            case 1:
                this.body.addImage(card_image);
        
            }

        this.body.scale = 0.15
    }

}