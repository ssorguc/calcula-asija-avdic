let calculator = {
  isAdding: false,
  isSubtracting: false,
  isDeviding: false,
  isMultiplying: false,
  isPostoing: false,
  isPositivenegativeing: false,
  currentNumber: "",
  result: 0,
  nula: function() {
    this.currentNumber += "0";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  jedan: function() {
    this.currentNumber += "1";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  dva: function() {
    this.currentNumber += "2";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  tri: function() {
    this.currentNumber += "3";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },

  cetiri: function() {
    this.currentNumber += "4";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  pet: function() {
    this.currentNumber += "5";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  sest: function() {
    this.currentNumber += "6";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  sedam: function() {
    debugger;
    this.currentNumber += "7";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  osam: function() {
    this.currentNumber += "8";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  devet: function() {
    this.currentNumber += "9";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  AC: function() {
    this.currentNumber = "";
    this.result = 0;
    document.getElementById("result").value = "";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
  },
  getResult: function() {
    debugger;
    if (this.isAdding) {
      this.result += Number(this.currentNumber);
    } else if (this.isSubtracting) {
      this.result -= Number(this.currentNumber);
    } else if (this.isDeviding) {
      this.result = this.result / Number(this.currentNumber);
    } else if (this.isMultiplying) {
      this.result = this.result * Number(this.currentNumber);
    }
    else if (this.isPostoing) {
      this.result = this.result % Number(this.currentNumber);
    }
    this.currentNumber = String(this.result);
    document.getElementById("result").value = this.result;
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
  },
  add: function() {
    debugger;
    this.isAdding = true;
    this.isPositivenegativeing = false;
    this.isPostoing = false;
    this.isSubtracting = false;
    this.isMultiplying = false;
    this.isDeviding = false;
    this.result = Number(this.currentNumber);
    this.currentNumber = "";
    document.getElementById("currentNumber").innerHTML = "+";
  },
  subtract: function() {
    debugger;
    this.isSubtracting = true;
    this.isPositivenegativeing = false;
    this.isPostoing = false;
    this.isAdding = false;
    this.isMultiplying = false;
    this.isDeviding = false;
    this.result = Number(this.currentNumber);
    this.currentNumber = "";
    document.getElementById("currentNumber").innerHTML = "-";
  },
  devide: function() {
    debugger;
    this.isDeviding = true;
    this.isPositivenegativeing = false;
    this.isPostoing = false;
    this.isAdding = false;
    this.isSubtracting = false;
    this.isMultiplying = false;
    this.result = Number(this.currentNumber);
    this.currentNumber = "";
    document.getElementById("currentNumber").innerHTML = "/";
  },
  multiply: function() {
    debugger;
    this.isMultiplying = true;
    this.isPositivenegativeing = false;
    this.isPostoing = false;
    this.isDeviding = false;
    this.isAdding = false;
    this.isSubtracting = false;
    this.result = Number(this.currentNumber);
    this.currentNumber = "";
    document.getElementById("currentNumber").innerHTML = "*";
  },
  posto: function() {
    this.isPostoing = true;
    this.isPositivenegativeing = false;
    this.isMultiplying = false;
    this.isDeviding = false;
    this.isAdding = false;
    this.isSubtracting = false;
    this.result = Number(this.currentNumber);
    this.currentNumber = "";
    document.getElementById("currentNumber").innerHTML = "%";
  },
  decimal: function() {
    this.currentNumber += ".";
    document.getElementById("currentNumber").innerHTML = this.currentNumber;
    document.getElementById("result").value = this.currentNumber;
  },
  positiveNegative: function() {
    debugger;
    this.isPositivenegativeing = true;
    this.isPostoing = false;
    this.isMultiplying = false;
    this.isDeviding = false;
    this.isAdding = false;
    this.isSubtracting = false;
    this.currentNumber = document.getElementById("result").value;
    this.result = Number(this.currentNumber);
    if(this.result>0) {
      this.result=Number("-"+ this.result);
      document.getElementById("result").value = this.result;
      this.currentNumber = this.result;
    } else {
      this.result=Number(this.currentNumber)* -1;
      document.getElementById("result").value = this.result;
      this.currentNumber = this.result;
    }
    document.getElementById("currentNumber").innerHTML = "+/-";
  }
}