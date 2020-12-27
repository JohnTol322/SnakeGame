function Snake(){
    this.x = scale;
    this.y = scale;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.highscore = 0;
    left = false;
    right = true;
    up = false;
    down = false

    this.draw = function() {
        for(let i = 0; i < this.tail.length; i++){
            ctx.drawImage(tailimg, this.tail[i].x, this.tail[i].y, scale, scale);
        }
        if(right){
            ctx.drawImage(rightimg, this.x, this.y, scale, scale);
        }else if(left){
            ctx.drawImage(leftimg, this.x, this.y, scale, scale);
        }else if(down){
            ctx.drawImage(downimg, this.x, this.y, scale, scale);
        }else if(up){
            ctx.drawImage(upimg, this.x, this.y, scale, scale);
        }
    }

    this.update = function() {

        for(let i = 0; i < this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        }
        
        this.tail[this.total -1] = { x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x >= canvas.width){
            this.die();
        }
        else if(this.y >= canvas.height){   
            this.die()
        }
        else if(this.x < 0){   
            this.die();
        }
        else if(this.y < 0){   
            this.die();
        }
    }

    this.changeDirection = function(direction) {
        switch(direction){
            case "Up":
                if(this.ySpeed != 0){
                    break;
                }
                else{
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                up = true;
                down = false;
                left = false;
                right = false;
                break; 
                }    
            case "Down":
                if(this.ySpeed != 0){
                    break;
                }
                else{
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                up = false;
                down = true;
                left = false;
                right = false;
                break; 
                }    
            case "Left":
                if(this.xSpeed != 0){
                    break;
                }
                else{
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                up = false;
                down = false;
                left = true;
                right = false;
                break; 
                }    
            case "Right":
                if(this.xSpeed != 0){
                    break;
                }
                else{
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                up = false;
                down = false;
                left = false;
                right = true;
                break; 
                }
            case "w":
                if(this.ySpeed != 0){
                    break;
                }
                else{
                this.xSpeed = 0;
                this.ySpeed = scale * -1;
                up = true;
                down = false;
                left = false;
                right = false;
                break; 
                }    
            case "s":
                if(this.ySpeed != 0){
                    break;
                }
                else{
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                up = false;
                down = true;
                left = false;
                right = false;
                break; 
                }    
            case "a":
                if(this.xSpeed != 0){
                    break;
                }
                else{
                this.xSpeed = scale * -1;
                this.ySpeed = 0;
                up = false;
                down = false;
                left = true;
                right = false;
                break; 
                }    
            case "d":
                if(this.xSpeed != 0){
                    break;
                }
                else{
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                up = false;
                down = false;
                left = false;
                right = true;
                break; 
                }     
        }
    }

    this.eat = function(){
        if(this.x == fruit.x && this.y == fruit.y){
            this.total++
            return true;
        }
        return false;
    }

    this.checkCollision = function(){
        for(let i = 0; i < this.tail.length; i++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y){
                this.die();
            }
            
        }
    }

    this.die = function(){
        if(this.total > this.highscore){
            this.highscore = this.total;
        }
        this.total = 0;
        this.tail = [];
        this.x = scale;
        this.y = scale;
        this.xSpeed = 0;
        this.ySpeed = 0;
        up = false;
        down = false;
        left = false;
        right = true;
    }
}