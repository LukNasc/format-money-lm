# FORMAT MONEY LN  
Pacotes de utilidade para formatação de números para formato monetário.

## Get started
```javascript
    const formatMoney = require("format-money-ln");
    console.log(formatMoney.formatAsCurrency(100, {
        language: "pt-Br",
        currency: "BRL"
    }));
    //Resultado: R$ 100,00
```

## Functions

Function | Args | Description |
-------- | -----| ----------- |
|formatAsCurrency|number,options| <b>number</b> = numero que deseja formatar, <b>options</b> = {language: Linguagem, currency: Moeda}
