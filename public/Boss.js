/**
 * Oponente final al que tenemos que destruir
 */
class Boss extends Opponent {
    /**
     * @param game {Game} La instancia del juego al que pertenece el oponente
     */
    constructor (game) {
        super(game);
        this.speed = OPPONENT_SPEED * 2;
        this.image.src = this.myImage = BOSS_PICTURE;
        this.myImageDead = BOSS_PICTURE_DEAD;
    }
    
    /**
     * Mata al oponente final
     */
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
        }

    }
}