var valor1 = null;
    var valor2 = null;
    var status = null;
    
    function suma(){
        valor1 = document.getElementsByName("num1")[0].value;
        valor2 = document.getElementsByName("num2")[0].value;
        suma = parseFloat(valor1) + parseInt(valor2);
        alert("El resultado es " + suma);
    };

    function multi(){
        valor1 = document.getElementsByName("num1")[0].value;
        valor2 = document.getElementsByName("num2")[0].value;
        prod = parseFloat(valor1) * parseInt(valor2);
        alert("El resultado es " + prod);
    };

    function rest(){
        valor1 = document.getElementsByName("num1")[0].value
        valor2 = document.getElementsByName("num2")[0].value
        res = parseFloat(valor1) - parseInt(valor2);
        alert("El resultado es " + res);
    }

    function  divi(){
        valor1 = document.getElementsByName("num1")[0].value;
        valor2 = document.getElementsByName("num2")[0].value;
        div = parseFloat(valor1) / parseInt(valor2);
        alert("El resultado es " + div);
        }
