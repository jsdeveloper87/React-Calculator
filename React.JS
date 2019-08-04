let evalStr = "";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      output: "0"
    };
    
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);
    this.getSeven = this.getSeven.bind(this);
    this.getEight = this.getEight.bind(this);
    this.getNine = this.getNine.bind(this);
    this.subtract = this.subtract.bind(this);
    this.getFour = this.getFour.bind(this);
    this.getFive = this.getFive.bind(this);
    this.getSix = this.getSix.bind(this);
    this.add = this.add.bind(this);
    this.getOne = this.getOne.bind(this);
    this.getTwo = this.getTwo.bind(this);
    this.getThree = this.getThree.bind(this);
    this.equals = this.equals.bind(this);
    this.getZero = this.getZero.bind(this);
    this.getDecimal = this.getDecimal.bind(this);
    
  }

  clear() {
    document.getElementById("display").innerHTML = "0";
    evalStr = "1-1+";
  }

  divide() {
    evalStr += "/";
    this.setState({
      output: "/"
    });
  }
 
  multiply() {
    evalStr += "*";
    this.setState({
      output: "*"
    });
  }

  getSeven() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 9) {
    evalStr += "7";
    this.setState({
      output: displayNum + "7"
    });
    }
  }

  getEight() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "8";
    this.setState({
      output: displayNum + "8"
    });
    }
  }

  getNine() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "9";
    this.setState({
      output: displayNum + "9"
    });
    }
  }

  subtract() {
   evalStr += "-";
    this.setState({
      output: "-"
    });
  }

  getFour() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 8) {
    evalStr += "4";
    this.setState({
      output: displayNum + "4"
    });
    }
  }

  getFive() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "5";
    this.setState({
      output: displayNum + "5"
    });
    }
  }

  getSix() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "6";
    this.setState({
      output: displayNum + "6"
    });
    }
  }

  add() {
    evalStr += "+";
    this.setState({
      output: "+"
    });
  }

  getOne() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 16) {
    evalStr += "1";
    this.setState({
      output: displayNum + "1"
    });
    }
  }

  getTwo() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "2";
    this.setState({
      output: displayNum + "2"
    });
    }
  }

  getThree() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0" || displayNum == "+" || displayNum == "-" || displayNum == "*" || displayNum == "/") {
      displayNum = "";
    }
    if (displayNum.length < 7) {
    evalStr += "3";
    this.setState({
      output: displayNum + "3"
    });
    }
  }
  
  equals() {
    let evaluation = eval(evalStr).toString();
    if (evaluation > 7) {
      evaluation = evaluation.substring(0,7) + "...";
    }
    this.setState({
      output: evaluation
    });
  }

  getZero() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum == "0") {
      displayNum = "";
    }
    evalStr += "0";
    this.setState({
      output: displayNum + "0"
    });
  }

  getDecimal() {
    let displayNum = document.getElementById("display").innerHTML;
    if (displayNum.indexOf(".") == -1) {
      evalStr += ".";
      this.setState({
        output: displayNum + "."
      });
    }
  }

  render() {
    return (
      <div>
        <div className="calculator">
          <div id="display">{this.state.output}</div>
          <div id="clear" onClick={this.clear}>
            AC
          </div>
          <div id="divide" onClick={this.divide}>
            /
          </div>
          <div id="multiply" onClick={this.multiply}>
            x
          </div>
          <div id="seven" onClick={this.getSeven}>
            7
          </div>
          <div id="eight" onClick={this.getEight}>
            8
          </div>
          <div id="nine" onClick={this.getNine}>
            9
          </div>
          <div id="subtract" onClick={this.subtract}>
            -
          </div>
          <div id="four" onClick={this.getFour}>
            4
          </div>
          <div id="five" onClick={this.getFive}>
            5
          </div>
          <div id="six" onClick={this.getSix}>
            6
          </div>
          <div id="add" onClick={this.add}>
            +
          </div>
          <div id="one" onClick={this.getOne}>
            1
          </div>
          <div id="two" onClick={this.getTwo}>
            2
          </div>
          <div id="three" onClick={this.getThree}>
            3
          </div>
          <div id="equals" onClick={this.equals}>
            =
          </div>
          <div id="zero" onClick={this.getZero}>
            0
          </div>
          <div id="decimal" onClick={this.getDecimal}>
            .
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("app"));
