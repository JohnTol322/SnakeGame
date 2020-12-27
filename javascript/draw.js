const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const upimg = document.getElementById('up-img');
const downimg = document.getElementById('down-img');
const rightimg = document.getElementById('right-img');
const leftimg = document.getElementById('left-img');
const fruitimg = document.getElementById('fruit-img');
const tailimg = document.getElementById('tail-img');
const scale = (canvas.width + canvas.height) / 40;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();

    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
            fruit.draw();
        }

        snake.checkCollision();
        document.querySelector("#score").innerHTML = "score: " + snake.total;
        document.querySelector("#highscore").innerHTML = "highscore: " + snake.highscore;
    }, 150);
}());

window.addEventListener('keydown', function(evt){
    const direction = evt.key.replace("Arrow", "");
    snake.changeDirection(direction);
});

