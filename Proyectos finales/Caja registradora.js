
// function checkCashRegister(price, cash, cid) {
//   let change = cash - price;
//   let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
//   if (change > cidTotal) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   } else if (change === cidTotal) {
//     return { status: "CLOSED", change: cid };
//   } else {
//     let changeArr = [];
//     let cidCopy = cid.slice();
//     let currency = [
//       { name: "ONE HUNDRED", val: 100.0 },
//       { name: "TWENTY", val: 20.0 },
//       { name: "TEN", val: 10.0 },
//       { name: "FIVE", val: 5.0 },
//       { name: "ONE", val: 1.0 },
//       { name: "QUARTER", val: 0.25 },
//       { name: "DIME", val: 0.1 },
//       { name: "NICKEL", val: 0.05 },
//       { name: "PENNY", val: 0.01 },
//     ];
//     for (let i = 0; i < currency.length; i++) {
//       let coinName = currency[i].name;
//       let coinValue = currency[i].val;
//       if (change >= coinValue) {
//         let coinCount = 0;
//         while (change >= coinValue && cidCopy[i][1] >= coinValue) {
//           change -= coinValue;
//           cidCopy[i][1] -= coinValue;
//           coinCount++;
//           change = Math.round(change * 100) / 100;
//         }
//         if (coinCount > 0) {
//           changeArr.push([coinName, coinValue * coinCount]);
//         }
//       }
//     }
//     if (changeArr.length < 1 || change > 0) {
//       return { status: "INSUFFICIENT_FUNDS", change: [] };
//     } else {
//       return { status: "OPEN", change: changeArr };
//     }
//   }
// }








// function checkCashRegister(price, cash, cid) {
//   let change = cash - price;
//   let cidTotal = cid.reduce((acc, curr) => acc + curr[1], 0);
//   if (change > cidTotal) {
//     return { status: "INSUFFICIENT_FUNDS", change: [] };
//   } else if (change === cidTotal) {
//     return { status: "CLOSED", change: cid };
//   } else {
//     let changeArr = [];
//     let cidCopy = cid.slice();
//     let currency = [
//       { name: "PENNY", val: 0.01 },
//       { name: "NICKEL", val: 0.05 },
//       { name: "DIME", val: 0.1 },
//       { name: "QUARTER", val: 0.25 },
//       { name: "ONE", val: 1.0 },
//       { name: "FIVE", val: 5.0 },
//       { name: "TEN", val: 10.0 },
//       { name: "TWENTY", val: 20.0 },
//       { name: "ONE HUNDRED", val: 100.0 },
//     ];
//     for (let i = 0; i < currency.length; i++) {
//       let coinName = currency[i].name;
//       let coinValue = currency[i].val;
//       if (change >= coinValue) {
//         let coinCount = 0;
//         while (change >= coinValue && cidCopy[i][1] >= coinValue) {
//           change -= coinValue;
//           cidCopy[i][1] -= coinValue;
//           coinCount++;
//           change = Math.round(change * 100) / 100;
//         }
//         if (coinCount > 0) {
//           changeArr.push([coinName, coinValue * coinCount]);
//         }
//       }
//     }
//     if (changeArr.length < 1 || change > 0) {
//       return { status: "INSUFFICIENT_FUNDS", change: [] };
//     } else {
//       return { status: "OPEN", change: changeArr };
//     }
//   }
// }




// function checkCashRegister(price, cash, cid) {
//   let cashArr = cid.map((e) => e[1] * 100),
//     converted = [1, 5, 10, 25, 100],
//     rawChange = (cash - price) * 100,
//     result = [
//       ["PENNY", 0],
//       ["NICKEL", 0],
//       ["DIME", 0],
//       ["QUARTER", 0],
//       ["ONE", 0],
//       ["FIVE", 0],
//       ["TEN", 0],
//       ["TWENTY", 0],
//       ["ONE HUNDRED", 0],
//     ],
//     change = { status: "", change: [] };
//   /*Este bucle hará todos los cálculos a *100 para evitar errores de redondeo, se ejecuta a través de cashArr hacia atrás encontrando la denominación más alta de cada cambio posible hasta que el cambio llegue a 0
//    */
//   for (let i = cashArr.length - 1; i >= 0; i--) {
//     while (cashArr[i] > 0) {
//       if (rawChange - converted[i] >= 0) {
//         result[i][1] += converted[i];
//         rawChange -= converted[i];
//         cashArr[i] -= converted[i];
//       } else {
//         break;
//       }
//     }
//     if (rawChange === 0) {
//       break;
//     }
//   }
//   /*Este ciclo pasará por la matriz de resultados y dividirá cualquier número que no sea 0 por 100 para volver al formato correcto.
//    */
//   for (let i = result.length - 1; i >= 0; i--) {
//     if (result[i][1] !== 0) {
//       result[i][1] = result[i][1] / 100;
//     }
//   }
//   /*Este si la lógica verificará si hemos puesto a cero el cambio (lo que significa que tenemos suficiente cambio adecuado), si no, enviamos el mensaje de fondos insuficientes.
//    */
//   if (rawChange !== 0) {
//     change.status = "INSUFFICIENT_FUNDS";
//     return change;
//   } else if (rawChange === 0 && JSON.stringify(result) == JSON.stringify(cid)) {
//     /*Esto si la lógica verificará si tuvimos suficiente cambio y si el resultado es el mismo que cid (lo que significa que hubo exactamente suficiente cambio), si es así, envía el mensaje cerrado.
//      */
//     change.status = "CLOSED";
//     change.change = result;
//     return change;
//   } else {
//     /*Cualquier otra cosa tendrá que ser que tuvimos suficiente cambio con el cambio sobrante, por lo que enviamos el mensaje abierto después de invertir la matriz de resultados y eliminar todas las entradas que tienen un valor de 0. Esto crea la matriz necesaria para la salida.
//      */
//     result = result.filter((e) => e[1] !== 0).reverse();
//     change.status = "OPEN";
//     change.change = result;
//     return change;
//   }
// }




function checkCashRegister(price, cash, cid) {
  var output = { status: null, change: [] };
  var change = cash - price;
  var denom = [
    { name: "ONE HUNDRED", val: 100 },
    { name: "TWENTY", val: 20 },
    { name: "TEN", val: 10 },
    { name: "FIVE", val: 5 },
    { name: "ONE", val: 1 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];
  var register = cid.reduce(
    function (acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      return acc;
    },
    { total: 0 }
  );
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  var change_arr = denom.reduce(function (acc, curr) {
    var value = 0;
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val;
      register[curr.name] -= curr.val;
      value += curr.val;
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) {
      acc.push([curr.name, value]);
    }
    return acc;
  }, []);
  if (change_arr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }
  output.status = "OPEN";
  output.change = change_arr;
  return output;
}





console.log(checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]));



