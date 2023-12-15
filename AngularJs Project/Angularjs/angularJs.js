// Create an AngularJS module
angular.module('passwordGeneratorApp', []).controller('PasswordGeneratorController', function ($scope) {
    $scope.password = '';
    $scope.passwordLength = 10;
    $scope.checkCount = 1;
    $scope.symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';
    $scope.uppercaseCb = true;
    $scope.lowercaseCb = false;
    $scope.numberCb = false;
    $scope.symbolCb = false;
    $scope.copyMsg = '';
    $scope.copyMsgActive = false;
    $scope.indicatorColor = '#ccc';

    // Set password length input slider background
    $scope.handleSlider = function () {
        // Update passwordLength and adjust the slider background
        $scope.passwordLength = parseInt($scope.passwordLength);
        var min = 1;
        var max = 20;
        var backgroundSize = (($scope.passwordLength - min) * 100) / (max - min) + '% 100%';
        $scope.lengthSliderStyle = { 'background-size': backgroundSize };
    };

    // Handle input event on checkboxes
    $scope.countCheckedCb = function () {
        $scope.checkCount = 0;
        if ($scope.uppercaseCb) $scope.checkCount++;
        if ($scope.lowercaseCb) $scope.checkCount++;
        if ($scope.numberCb) $scope.checkCount++;
        if ($scope.symbolCb) $scope.checkCount++;

        if ($scope.passwordLength < $scope.checkCount) {
            $scope.passwordLength = $scope.checkCount;
            $scope.handleSlider();
        }
    };

    // Copy password to clipboard
    $scope.copyContent = function () {
        if ($scope.password === '') {
            alert('First Generate Password to copy');
            return;
        }

        if (navigator.clipboard) {
            navigator.clipboard.writeText($scope.password).then(function () {
                $scope.copyMsg = 'Copied';
                $scope.copyMsgActive = true;
                setTimeout(function () {
                    $scope.copyMsgActive = false;
                    $scope.$apply();
                }, 1000);
            }).catch(function (error) {
                $scope.copyMsg = error;
                $scope.copyMsgActive = true;
            });
        }
    };

    // Generate a random integer between min and max (exclusive)
    $scope.getRandomInteger = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    // Generate a random number from 0 to 9
    $scope.generateNumber = function () {
        return $scope.getRandomInteger(1, 10);
    };

    // Generate a random lowercase letter
    $scope.generateLowercase = function () {
        return String.fromCharCode($scope.getRandomInteger(97, 123));
    };

    // Generate a random uppercase letter
    $scope.generateUppercase = function () {
        return String.fromCharCode($scope.getRandomInteger(65, 91));
    };

    // Generate a random symbol
    $scope.generateSymbol = function () {
        var randomIndex = $scope.getRandomInteger(0, $scope.symbols.length);
        return $scope.symbols.charAt(randomIndex);
    };

    // Calculate password strength and set indicator color
    $scope.calcStrength = function () {
        var hasUpper = $scope.uppercaseCb;
        var hasLower = $scope.lowercaseCb;
        var hasNumber = $scope.numberCb;
        var hasSymbol = $scope.symbolCb;

        if (hasUpper && hasLower && (hasNumber || hasSymbol) && $scope.passwordLength >= 8) {
            $scope.indicatorColor = '#0f0';
        } else if ((hasUpper || hasLower) && (hasNumber || hasSymbol) && $scope.passwordLength >= 6) {
            $scope.indicatorColor = 'ff0';
        } else {
            $scope.indicatorColor = '#f00';
        }
    };

    // Shuffle an array randomly using Fisher-Yates algorithm
    $scope.shuffleArray = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array.join('');
    };

    // Generate a password
    $scope.generatePassword = function () {
        if ($scope.checkCount <= 0) {
            alert('At least check one checkbox');
            return;
        }

        if ($scope.passwordLength < $scope.checkCount) {
            $scope.passwordLength = $scope.checkCount;
            $scope.handleSlider();
        }

        $scope.password = '';

        var checkedCbArray = [];

        if ($scope.uppercaseCb) checkedCbArray.push($scope.generateUppercase);
        if ($scope.lowercaseCb) checkedCbArray.push($scope.generateLowercase);
        if ($scope.numberCb) checkedCbArray.push($scope.generateNumber);
        if ($scope.symbolCb) checkedCbArray.push($scope.generateSymbol);

        for (var i = 0; i < checkedCbArray.length; i++) {
            $scope.password += checkedCbArray[i]();
        }

        for (var i = 0; i < ($scope.passwordLength - checkedCbArray.length); i++) {
            var randomIndex = $scope.getRandomInteger(0, checkedCbArray.length);
            $scope.password += checkedCbArray[randomIndex]();
        }

        $scope.password = $scope.shuffleArray($scope.password);
        $scope.calcStrength();
    };
});