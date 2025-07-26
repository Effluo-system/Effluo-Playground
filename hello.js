<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World Counter</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        
        .container {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            padding: 40px;
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        h1 {
            font-size: 2.5em;
            margin-bottom: 30px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .counter-display {
            font-size: 3em;
            font-weight: bold;
            margin: 30px 0;
            color: #ffd700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
        }
        
        button {
            padding: 12px 24px;
            font-size: 1.1em;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .increment {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
        }
        
        .decrement {
            background: linear-gradient(45deg, #74b9ff, #0984e3);
            color: white;
        }
        
        .reset {
            background: linear-gradient(45deg, #00b894, #00a085);
            color: white;
        }
        
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        button:active {
            transform: translateY(0);
        }
        
        .counter-info {
            margin-top: 20px;
            font-size: 0.9em;
            opacity: 0.8;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World! 🌍</h1>
        
        <div class="counter-display" id="counterDisplay">0</div>
        
        <div class="buttons">
            <button class="increment" onclick="incrementCounter()">+1</button>
            <button class="decrement" onclick="decrementCounter()">-1</button>
            <button class="reset" onclick="resetCounter()">Reset</button>
        </div>
        
        <div class="counter-info">
            <p>Click the buttons to change the counter!</p>
        </div>
    </div>

    <script>
        // Initialize counter variable
        let counter = 0;
        
        // Get the display element
        const counterDisplay = document.getElementById('counterDisplay');
        
        // Function to update the display
        function updateDisplay() {
            counterDisplay.textContent = counter;
            
            // Add a little animation effect
            counterDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
                counterDisplay.style.transform = 'scale(1)';
            }, 150);
        }
        
        // Function to increment counter
        function incrementCounter() {
            counter++;
            updateDisplay();
            console.log(`Counter incremented to: ${counter}`);
        }
        
        // Function to decrement counter
        function decrementCounter() {
            counter--;
            updateDisplay();
            console.log(`Counter decremented to: ${counter}`);
        }
        
        // Function to reset counter
        function resetCounter() {
            counter = 0;
            updateDisplay();
            console.log('Counter reset to 0');
        }
        
        // Keyboard shortcuts
        document.addEventListener('keydown', function(event) {
            switch(event.key) {
                case 'ArrowUp':
                case '+':
                    incrementCounter();
                    break;
                case 'ArrowDown':
                case '-':
                    decrementCounter();
                    break;
                case 'r':
                case 'R':
                    resetCounter();
                    break;
            }
        });
        
        // Welcome message
        console.log('Hello World Counter loaded! 🎉');
        console.log('Use the buttons or keyboard shortcuts:');
        console.log('↑ or + to increment');
        console.log('↓ or - to decrement'); 
        console.log('R to reset');
    </script>
</body>
</html>
